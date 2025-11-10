// src/pages/StaffingForm.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { API_BASE_URL } from "../config";
import SuccessNotification from "../components/SuccessNotification";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function StaffingForm() {
  const [formData, setFormData] = useState({
    organization: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    industry: "",
    position: "",
    country: "",
    time: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("staffingFormData");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("staffingFormData", JSON.stringify(formData));
  }, [formData]);

  const clearLocalStorage = () => localStorage.removeItem("staffingFormData");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleTimeSelect = (time) => {
    setFormData((p) => ({ ...p, time }));
    setErrors((p) => ({ ...p, time: "" }));
  };

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PHONE_REGEX = /^\+?\d{1,4}[\s-]?\(?\d{1,4}\)?([\s-]?\d{2,4}){2,4}$/;

  const validate = () => {
    const errs = {};
    [
      "organization",
      "firstName",
      "lastName",
      "email",
      "phone",
      "industry",
      "position",
      // "country",
      "time",
    ].forEach((f) => {
      if (!formData[f]) errs[f] = "This field is required.";
    });
    if (formData.email && !EMAIL_REGEX.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (formData.phone && !PHONE_REGEX.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number (e.g. +27 65 685 5333).";
    }
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
        body: JSON.stringify(formData),
      });

      const payload = await res.json();
      if (!res.ok) throw new Error(payload.error || "Unknown error");

      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      clearLocalStorage();

      setTimeout(() => setShowSuccess(false), 10000);
      setFormData({
        organization: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        industry: "",
        position: "",
        time: "",
        additionalInfo: "",
      });
    } catch (err) {
      console.error("Email submission failed:", err);
      alert("Submission failed. Please try again later.");
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
        style={{ backgroundImage: "url('/Staffing/3.jpg')" }}
      />

      {/* Content container */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto py-20 px-6 lg:px-12">
        {/* LEFT SIDE – Intro */}
        <motion.div
          className="flex flex-col justify-start space-y-6"
          variants={fadeIn}
          style={{ marginTop: '4rem' }} /* Adjust this value to move up/down */
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E4466]">
            Remote Staffing Solutions
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            For support, please call our toll free number at <b>1 (888) 225-8310</b>, or view the support contact information on the right.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            For any Inquiries please email us at <b>info@chsinc.ca</b>, or proceed to complete the form below and we will respond as soon as possible.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            (If you are a patient, please do not fill out this form — you will not be contacted.)
          </p>

          <div className="pt-4">
            <img
              src="/EMR12.jpg"
              alt="Staffing Team"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Designed for speed, flexibility, and precision, EMR Advantage empowers clinicians to document faster and focus more on care. Experience the perfect blend of mobility and reliability — and see how easy charting can be.
          </p>
        </motion.div>

        {/* RIGHT SIDE – Form */}
        <motion.div
          variants={fadeIn}
          className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold text-[#1E4466] text-center mb-6">
            Remote Staffing Solution Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Organization */}
            <div>
              <label className="block font-medium text-gray-700">
                Name of your organization, corporation or business:{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                name="organization"
                className={`w-full mt-1 p-3 rounded-md border ${errors.organization ? "border-red-500" : "border-gray-300"
                  }`}
                value={formData.organization}
                onChange={handleChange}
              />
              {errors.organization && (
                <p className="text-sm text-red-500 mt-1">{errors.organization}</p>
              )}
            </div>

            {/* Your Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  name="firstName"
                  placeholder="First Name *"
                  className={`w-full p-3 border rounded-md ${errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  name="lastName"
                  placeholder="Last Name *"
                  className={`w-full p-3 border rounded-md ${errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email / Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className={`w-full p-3 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="(000) 000-0000 *"
                  className={`w-full p-3 border rounded-md ${errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Industry */}
            <div>
              <label className="block font-medium text-gray-700">
                What phrase best describes your industry or company?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="industry"
                className={`w-full mt-1 p-3 rounded-md border ${errors.industry ? "border-red-500" : "border-gray-300"
                  }`}
                value={formData.industry}
                onChange={handleChange}
              >
                <option value="">Please Select</option>
                <option>Medical Clinic</option>
                <option>Specialist Clinic</option>
                <option>Diagnostic Imaging Clinic</option>
                <option>Virtualcare Clinic</option>
                <option>Nurse Practitioner Clinic</option>
                <option>Hospital</option>
                <option>Real Estate Brokerage</option>
                <option>Real Estate Agent</option>
                <option>Real Estate Development</option>
                <option>Financial</option>
                <option>Accounting</option>
                <option>Law Firm</option>
                <option>Retail</option>
                <option>Construction</option>
                <option>Other</option>
              </select>
              {errors.industry && (
                <p className="text-sm text-red-500 mt-1">{errors.industry}</p>
              )}
            </div>

            {/* Position */}
            <div>
              <label className="block font-medium text-gray-700">
                What phrase best describes your position at your organization/company?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="position"
                className={`w-full mt-1 p-3 rounded-md border ${errors.position ? "border-red-500" : "border-gray-300"
                  }`}
                value={formData.position}
                onChange={handleChange}
              >
                <option value="">Please Select</option>
                <option>Owner/Key Decision Maker</option>
                <option>Partner</option>
                <option>Associate</option>
                <option>Other</option>
              </select>
              {errors.position && (
                <p className="text-sm text-red-500 mt-1">{errors.position}</p>
              )}
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

            {/* Time */}
            <div data-field="time">
              <label className="block font-medium text-gray-700">
                What time is best to contact you (EST)?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3 mt-2 flex-wrap">
                {[
                  "Morning (9-12)",
                  "Afternoon (12-4)",
                  "Evening (4-7)"
                ].map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`px-4 py-2 rounded-md border transition ${formData.time === time
                      ? "bg-[#1E4466] text-white border-[#1E4466]"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                      }`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
              {errors.time && (
                <p className="text-sm text-red-500 mt-1">{errors.time}</p>
              )}
            </div>

            {/* Additional info */}
            <div>
              <textarea
                name="additionalInfo"
                rows="4"
                placeholder="Additional Information"
                value={formData.additionalInfo}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md ${errors.additionalInfo ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.additionalInfo && (
                <p className="text-sm text-red-500 mt-1">{errors.additionalInfo}</p>
              )}
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