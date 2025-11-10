// src/page/EMRPage.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { API_BASE_URL } from "../config";
import SuccessNotification from "../components/SuccessNotification";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function EMRPage() {
  const [formData, setFormData] = useState({
    role: "",
    interests: [],
    firstName: "",
    lastName: "",
    organization: "",
    website: "",
    address: "",
    email: "",
    phone: "",
    clinicians: "",
    emrStatus: "",
    emrType: "",
    goLive: "",
    additionalInfo: "",
    time: "",
    howHeard: "",
  });

  // Load & Save Draft
  useEffect(() => {
    const saved = localStorage.getItem("emrFormData");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("emrFormData", JSON.stringify(formData));
  }, [formData]);

  const clearLocalStorage = () => localStorage.removeItem("emrFormData");

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInterestsOpen, setIsInterestsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleTimeSelect = (time) => {
    setFormData((p) => ({ ...p, time }));
    setErrors((p) => ({ ...p, time: "" }));
  };

  const handleInterestToggle = (interest) => {
    setFormData((p) => {
      const interests = p.interests.includes(interest)
        ? p.interests.filter((i) => i !== interest)
        : [...p.interests, interest];
      return { ...p, interests };
    });
    setErrors((p) => ({ ...p, interests: "" }));
  };

  const validate = () => {
    const required = [
      "role", "interests", "firstName", "lastName", "organization",
      "email", "phone", "clinicians", "emrType", "time",
      "howHeard", "address",
    ];
    const errs = {};
    required.forEach((field) => {
      if (field === "interests" && (!formData[field]?.length)) {
        errs[field] = "Required";
      } else if (!formData[field]) {
        errs[field] = "Required";
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Invalid email address";

    if (!formData.phone.trim())
      errs.phone = "Phone number is required.";
    else if (!/^\+?\d{1,4}[\s-]?\(?\d{1,4}\)?([\s-]?\d{2,4}){2,4}$/.test(formData.phone.trim()))
      errs.phone = "Please enter a valid phone number (e.g. +27 65 685 5333).";

    return errs;
  };

  const scrollToFirstError = (errors) => {
    const firstErrorField = Object.keys(errors)[0];
    const element =
      document.querySelector(`[name="${firstErrorField}"]`) ||
      document.querySelector(`[data-field="${firstErrorField}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => element.focus?.(), 300);
    }
  };

  const buildMessage = () => `
Role: ${formData.role}
Interests: ${formData.interests.join(", ")}
Name: ${formData.firstName} ${formData.lastName}
Organization: ${formData.organization}
Website: ${formData.website}
Address: ${formData.address}
Email: ${formData.email}
Phone: ${formData.phone}
Clinicians: ${formData.clinicians}
EMR Status: ${formData.emrStatus}
Current EMR: ${formData.emrType}
Go Live: ${formData.goLive}
Preferred Time: ${formData.time}
Heard About Us: ${formData.howHeard}

Additional Info:
${formData.additionalInfo}
`.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      scrollToFirstError(newErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/send-lead-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "emr",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          organization: formData.organization,
          phone: formData.phone,
          time: formData.time,
          message: buildMessage(),
        }),
      });


      if (!res.ok) throw new Error("Failed to submit");

      clearLocalStorage();
      setShowSuccess(true);
      setFormData({
        role: "", interests: [], firstName: "", lastName: "",
        organization: "", website: "", address: "", email: "",
        phone: "", clinicians: "", emrStatus: "", emrType: "",
        goLive: "", additionalInfo: "", time: "", howHeard: "",
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => setShowSuccess(false), 8000);
    } catch {
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Country list for the dropdown field
  const countries = [
    "Australia", "Austria", "Canada", "China", "Denmark", "France", "Germany",
    "Ghana", "India", "Ireland", "Italy", "Japan", "Kenya", "Malaysia",
    "Netherlands", "New Zealand", "Nigeria", "Norway", "Philippines", "Poland",
    "Portugal", "Saudi Arabia", "Singapore", "South Africa", "Spain", "Sweden",
    "Switzerland", "Thailand", "United Arab Emirates", "United Kingdom",
    "United States", "Other"
  ].sort();

  //  UI 
  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Background blur image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/emr-bg.jpg')" }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto py-20 px-6 lg:px-12">
        {/* LEFT SIDE – Intro */}
        <motion.div
          className="flex flex-col justify-start space-y-6 mt-32"
          variants={fadeIn}
          style={{ marginTop: '4rem' }} /* Adjust this value: 8rem = 128px. Change to move up/down */
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E4466]">
            Request Your <span className="text-[#1E4466]">EMR Demo</span>
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            For support, please call our toll free number at <b>1 (888) 225-8310</b>, or view the support contact information on the right.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            For any Inquiries please email us at <b>info@chsinc.ca</b>, or proceed to complete the form below and we will respond as soon as possible.
          </p>

          <div className="pt-4">
            <img
              src="/AwardWinningEMR/8.jpg"
              alt="EMR Preview"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Say goodbye to clunky workflows and hello to seamless documentation. EMR Advantage is a fully mobile, hardware-agnostic solution that works effortlessly across desktops and tablets — whether you're in the clinic or working remotely.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Need Training Materials? We’ve Got You Covered.

            Whether you're starting from scratch or looking to modernize outdated documentation, we’ll partner with your team to create clear, user-friendly training resources tailored to your workflows.

            Our experienced staff integrate effortlessly into your organization, aligning with your protocols and acting as a true extension of your team — so your staff can learn faster, with less friction.
          </p>
        </motion.div>

        {/* RIGHT SIDE – Form */}
        <motion.div
          variants={fadeIn}
          className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold text-[#1E4466] text-center mb-6">
            Please Fill Out The Form Below
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role */}
            <div>
              <label className="block font-medium text-gray-700">
                Your Role <span className="text-red-500">*</span>
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`w-full mt-1 p-3 rounded-md border ${errors.role ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Select your role</option>
                <option>MD - Physician (Actively Practicing)</option>
                <option>MD - Physician (Not Actively Practicing)</option>
                <option>MD - Physician/Clinic Owner</option>
                <option>Clinic Owner/Manager</option>
                <option>NP - Nurse Practitioner</option>
                <option>Admin staff</option>
                <option>Medical Office Assistant</option>
                <option>Pharmacist</option>
                <option>Optometrist</option>
                <option>Physiotherapist</option>
                <option>Psychologist</option>
                <option>Physician</option>
                <option>Other</option>
                <option>I am a Patient, I want to speak to a Physician</option>
              </select>
              {errors.role && <p className="text-sm text-red-500 mt-1">{errors.role}</p>}
            </div>

            {/* Interest */}
            <div data-field="interests" className="relative">
              <label className="block font-medium text-gray-700 mb-2">
                What are you interested in learning about? (Select all that apply): <span className="text-red-500">*</span>
              </label>

              {/* Dropdown trigger */}
              <button
                type="button"
                onClick={() => setIsInterestsOpen(!isInterestsOpen)}
                className={`w-full p-3 border rounded-md text-left flex justify-between items-center ${errors.interests ? "border-red-500" : "border-gray-300"} bg-white`}
              >
                <span className={formData.interests.length === 0 ? "text-gray-400" : "text-gray-700"}>
                  {formData.interests.length === 0
                    ? "Select interests..."
                    : `${formData.interests.length} selected`}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${isInterestsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown content */}
              {isInterestsOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {[
                    "EMR Advantage® - Award Winning EMR System",
                    "Medical Office Kiosk/Self-Registration",
                    "EMR Custom Development",
                    "Additional Clinic Revenue Generators",
                    "Clinic Website",
                    "Importing/Scanning files into any EMR",
                    "Handling Calls (inbound/outbound, scheduling, etc.)",
                    "Remote Staff (Virtual Admin Services)",
                  ].map((interest) => (
                    <label
                      key={interest}
                      className="flex items-start gap-3 p-3 hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="mt-1 w-4 h-4 text-[#1E4466] border-gray-300 rounded focus:ring-[#1E4466]"
                      />
                      <span className="text-gray-700 text-sm">{interest}</span>
                    </label>
                  ))}
                </div>
              )}

              {errors.interests && <p className="text-sm text-red-500 mt-1">{errors.interests}</p>}
            </div>

            {/* Name first and last */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative input-required">
                <input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
              </div>

              <div className="relative input-required">
                <input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
              </div>
            </div>


            {/* Email / Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative input-required">
                <input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>


              {/* Phone */}
              <div className="relative input-required">
                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
              </div>

            </div>

            {/* Clinic Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <input
                  name="organization"
                  placeholder="Clinic / Organization "
                  value={formData.organization}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${errors.organization ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.organization && <p className="text-sm text-red-500 mt-1">{errors.organization}</p>}
              </div>
              <div>
                <input
                  name="website"
                  placeholder="Website "
                  value={formData.website}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${errors.website ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.website && <p className="text-sm text-red-500 mt-1">{errors.website}</p>}
              </div>

              {/* Address */}
              <div className="relative input-required">
                <input
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${errors.address ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address}</p>}
              </div>
            </div>

            {/* Users / EMR */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <select
                  name="clinicians"
                  value={formData.clinicians}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${errors.clinicians ? "border-red-500" : "border-gray-300"}`}
                >
                  <option value=""># of Users</option>
                  <option>1-3</option>
                  <option>3-6</option>
                  <option>6-10</option>
                  <option>10-20+</option>
                </select>
                {errors.clinicians && <p className="text-sm text-red-500 mt-1">{errors.clinicians}</p>}
              </div>

              <div>
                <select
                  name="emrStatus"
                  value={formData.emrStatus}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${errors.emrStatus ? "border-red-500" : "border-gray-300"}`}
                >
                  <option value="">Do you currently use an EMR? *</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Unsure</option>
                </select>
                {errors.emrStatus && <p className="text-sm text-red-500 mt-1">{errors.emrStatus}</p>}
              </div>
            </div>

            {/* EMR Deployed */}
            <div>
              <select
                name="emrType"
                value={formData.emrType}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md ${errors.emrType ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">If you have an EMR deployed, which one?</option>
                <option>OSCAR PRO/Legacy OSCAR</option>
                <option>TELUS PS</option>
                <option>ACCURO</option>
                <option>NOT SURE</option>
                <option>NONE</option>
                <option>Multiple EMRs in office</option>
              </select>
              {errors.emrType && <p className="text-sm text-red-500 mt-1">{errors.emrType}</p>}
            </div>

            {/* Go-live */}
            <div>
              <select
                name="goLive"
                value={formData.goLive}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md ${errors.goLive ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Expected Go-Live Date</option>
                <option>Immediately</option>
                <option>Within 2 months</option>
                <option>Within 4 months</option>
                <option>Within 6 months</option>
                <option>TBD</option>

              </select>
              {errors.goLive && <p className="text-sm text-red-500 mt-1">{errors.goLive}</p>}
            </div>

            {/* How heard */}
            <div>
              <select
                name="howHeard"
                value={formData.howHeard}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md ${errors.howHeard ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">How did you hear about us?</option>
                <option>Current User</option>
                <option>Email</option>
                <option>Social Media</option>
                <option>Peer Referral</option>
                <option>Google/Search Engine</option>
                <option>Third-Party Review</option>
                <option>Other</option>
              </select>
              {errors.howHeard && <p className="text-sm text-red-500 mt-1">{errors.howHeard}</p>}
            </div>

            {/* Country */}
            <div>
              <label className="block font-medium text-gray-700">
                <span className="text-red-500"></span>
              </label>
              <select
                name="country"
                className={`w-full mt-1 p-3 rounded-md border ${errors.country ? "border-red-500" : "border-gray-300"
                  }`}
                value={formData.country || ""}
                onChange={handleChange}
              >
                <option value="">Select your country:</option>
                {countries.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Best time to contact */}
            <div data-field="time">
              <label className="block font-medium text-gray-700">
                Best Time to Contact (EST) <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3 mt-2 flex-wrap">
                {["Morning (9-12)",
                  "Afternoon (12-4)",
                  "Evening (4-7)"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => handleTimeSelect(t)}
                      className={`px-4 py-2 rounded-md border transition ${formData.time === t
                        ? "bg-[#1E4466] text-white border-[#1E4466]"
                        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                      {t}
                    </button>
                  ))}
              </div>
              {errors.time && <p className="text-sm text-red-500 mt-1">{errors.time}</p>}
            </div>

            {/* Additional info */}
            <div className={` text-gray-500 ${errors.additionalInfo ? "border-red-500" : "border-gray-300"}`}>
              <textarea
                name="additionalInfo"
                rows="4"
                placeholder="Additional Information"
                value={formData.additionalInfo}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md ${errors.additionalInfo ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.additionalInfo && <p className="text-sm text-red-500 mt-1">{errors.additionalInfo}</p>}
            </div>

            {/* Submit */}

            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#1E4466] hover:bg-[#14314D] text-white font-semibold px-8 py-3 rounded-lg shadow-md w-full sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>

          </form>

          <SuccessNotification show={showSuccess} />
        </motion.div>
      </div>
    </motion.div>
  );
}