import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
};

export default function PrivacyPolicyAccordion() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [expandAll, setExpandAll] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const toggleAccordion = (index) => {
        if (expandAll) return; // disable individual toggle when expanded all
        setActiveIndex(activeIndex === index ? null : index);
    };

    const toggleExpandAll = () => {
        setExpandAll((prev) => !prev);
        setActiveIndex(null);
    };


    return (
        <motion.div
            ref={containerRef}
            className="relative min-h-screen bg-gray-50 overflow-hidden"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Background with Parallax */}
            <motion.div
                style={{ y: yBg, backgroundImage: "url('/Doc.jpg')" }}
                className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40"
            ></motion.div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/70 to-blue-100/60 backdrop-blur-[2px]" />

            {/* Foreground Content */}
            <section className="relative max-w-[95%] sm:max-w-4xl md:max-w-5xl mx-auto px-6 sm:px-10 md:px-16 py-16 sm:py-20 z-10">
                {/* Hero Header */}
                <motion.div
                    className="text-center rounded-2xl relative overflow-hidden shadow-2xl bg-white/70 backdrop-blur-lg border border-white/50 p-8 sm:p-10 md:p-12"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1E4466] to-blue-600 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                        CHSINC is a healthcare technology company providing secure
                        software solutions for healthcare providers and patients across
                        Canada. Click on any section below to explore how CHSINC manages
                        and protects personal information.
                    </p>

                    {/* Expand / Collapse Button */}
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={toggleExpandAll}
                            className="px-6 py-2 bg-gradient-to-r from-[#1E4466] to-blue-600 text-white text-sm font-semibold rounded-full shadow hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            {expandAll ? "Collapse All Sections" : "Expand All Sections"}
                        </button>
                    </div>
                </motion.div>

                {/* Accordion */}
                <div className="mt-10 space-y-6">
                    {accordionData.map((item, index) => {
                        const isOpen = expandAll || activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                className={`rounded-xl border border-white/40 backdrop-blur-md transition-all duration-300 ${isOpen ? "bg-white/80 shadow-lg" : "bg-white/50"
                                    } hover:bg-white/70 hover:shadow-md`}
                                whileHover={{ y: -2 }}
                            >
                                {/* Header */}
                                <motion.button
                                    className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span
                                        className={`font-semibold text-lg tracking-wide ${isOpen
                                                ? "bg-gradient-to-r from-[#1E4466] to-blue-600 bg-clip-text text-transparent"
                                                : "text-[#1E4466]"
                                            }`}
                                    >
                                        {item.title}
                                    </span>

                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FaChevronDown className="text-[#1E4466]" />
                                    </motion.div>
                                </motion.button>

                                {/* Content */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        opacity: isOpen ? 1 : 0,
                                        height: isOpen ? "auto" : 0,
                                    }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                                        {item.content}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Spacer for smooth scroll end */}
            <div className="h-20 sm:h-28 md:h-36"></div>
        </motion.div>
    );
}

// Existing accordionData preserved here...


const accordionData = [
    {
        title: "Accountability",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    In adopting and adhering to this Policy, we assure you that the personal information we collect will be used in an appropriate and responsible manner. CHSINC is committed to protecting the privacy of all personal information which has been provided to us and we will manage personal information in accordance with applicable Canadian privacy legislation and any other applicable provincial or federal legislation.
                    This Policy applies to the personal information collected through the Services by CHSINC. This includes personal information collected, used, processed and disclosed through:
                    <li>CHSINC’s Solutions</li>
                    <li>CHSINC’s Sites, as well as our social media, such as Facebook, Twitter, YouTube and LinkedIn</li>
                    <li>Correspondence from individuals about our Sites, the Solutions and/or the Services (including e-mails, messages sent to us through the Sites, telephone calls to our call centres)</li>
                    <li>Providing support for our Services</li>
                    <li>Online job applications</li>
                </p>
            </div>
        ),
    },
    {
        title: "What is Personal Information and Personal Health Information?",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    In this Policy, “<b>personal information</b>” means information about an identifiable individual, including personal health information about that individual. “<b>Personal health information</b>” means identifying information that relates to an individual’s health, including diagnostic, treatment and care information, and information like the individual’s personal health number.
                </p>
            </div>
        ),
    },
    {
        title: "What Personal Information Do We Collect and Use and Why?",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    CHSINC provides software solutions for healthcare providers and patients. In the course of using our Solutions, healthcare providers will collect, use and/or disclose personal information about their patients, including personal health information. In the provision of our Solutions, CHSINC manages (and in some cases hosts) personal information on behalf of healthcare providers, who remain the custodians of that personal health information.
                </p>
                <p>
                    This Policy is not about the collection, use, and/or disclosure of personal information by healthcare providers. If you would like to know more about how your healthcare provider handles your personal information, you should ask them about their policies and practices. To learn more about the types of personal information which your healthcare provider may collect from you while using the Solutions, click on the Personal Information Collected by Healthcare Providers Using the Solutions section below.
                </p>
            </div>
        ),
    },
    {
        title: "Personal Information Collected by Healthcare Providers Using the Solutions",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    CHSINC’s Solutions provide healthcare providers with a platform to collect, use,
                    process, store, and disclose patients’ personal information. Below, we have
                    described what types of personal information are collected by healthcare providers
                    (including physicians, pharmacists and their administrative staff) using each
                    solution.
                    <strong> EMR Advantage</strong>
                </p>
                <p>EMR Advantage allows for the collection, use and disclosure of the following types of personal information by healthcare providers:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Name</li>
                    <li>Address</li>
                    <li>Contact information, including phone number and e-mail address</li>
                    <li>
                        Demographic information, such as languages spoken, occupation, age, gender, and
                        dependent information
                    </li>
                    <li>Personal health number</li>
                    <li>
                        Personal health information, including:
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>
                                Visits to your healthcare provider (e.g. date of service, healthcare provider,
                                visit type, visit reason, referring provider, payment information); and
                            </li>
                            <li>
                                Health information recorded by healthcare providers and their staff in the
                                course of providing treatment (e.g. conditions, diagnoses, medications,
                                diagnostic imaging, lab observations, immunizations, treatments, referrals,
                                clinical observations, surgical history and consultations).
                            </li>
                        </ul>
                    </li>
                </ul>
                <p>
                    <b>Medeo</b>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <p>
                        Medeo allows for the storage of the following types of personal information by users, and for the collection, use and disclosure of the following types of personal information by healthcare providers and caregivers:
                    </p>
                    <li>Name and other demographic information</li>
                    <li>Appointment dates (for in clinic and virtual visits)</li>
                    <li>Medical conditions</li>
                    <li>Reason(s) for visit</li>
                    <li>Encounter notes</li>
                    <li>Prescription information</li>
                    <li>Lab requisitions</li>
                    <li>Care plans</li>
                    <li>Messages between healthcare providers and patients</li>
                    <p>
                        Medeo includes an option to add premium features through a Medeo Plus subscription.
                    </p>
                    <p>
                        If the healthcare provider also has EMR Advantage, certain personal information can be shared between EMR Advantage and Medeo by the provider (e.g. appointment information and personal health information).
                    </p>
                </ul>

                <p>
                    <b>FreedomRx </b>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <p>
                        FreedomRx allows for the collection, use and disclosure of the following types of personal information by health care providers and pharmacies:
                    </p>
                    <li>Name</li>
                    <li>Address</li>
                    <li>Telephone number</li>
                    <li>Date of birth</li>
                    <li>Gender</li>
                    <li>Personal health number</li>
                    <li>Medication information</li>
                    <li>Health information such as allergies</li>
                    <li>Messages between prescribers and pharmacists</li>
                    <li>HealthMail Address</li>
                    <li>Identifying information about the healthcare provider and clinic</li>
                    <p>
                        Your healthcare provider will share pertinent information with the pharmacy indicated by the healthcare provider or selected by you in the course of providing treatment. FreedomRx is being used by many independent pharmacies, Shoppers Drug Mart and Loblaw Pharmacies.
                    </p>
                    <p>
                        CHSINC also uses third party partners to provide additional functionality to our Solutions. See the section Partners in Providing Specialized Service below for a description of these partners and services.
                    </p>
                </ul>
            </div>
        ),
    },
    {
        title: "What Personal Information Does CHS Collect and Use in Providing the Services?",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    CHSINC also collects personal information from and about individuals in a variety of ways, including: when it is provided directly; and when individuals interact with us and use the Sites, Solutions, and/or the Services.We use personal information to provide our products, Services and Solutions, to manage our business relationship, to communicate offers and information, to measure the effectiveness our Services, including marketing and promotions about our Services, and as permitted or required by law.
                </p>

                <p>
                    CHSINC collects certain personal information from our clients and their staff in the course of managing our business relationship. For example, we collect the names and authentication information of our clients’ staff so they have unique log in credentials to use the Solutions in accordance with our License and Services Agreements with clients. For user verification and security purposes, we also collect information like IP address and browser type for use in conjunction with authentication information. We also collect personal information about our clients’ staff when providing them with Services like training or support on our Solutions.
                </p>

                <p><strong>Personal Information You Provide to CHSINC:</strong></p>

                <ul className="list-disc pl-5 space-y-1">
                    <p>
                        We collect information that you provide directly to CHSINC, over the telephone, by e-mail, as well as through the use of the Sites and the Solutions. This includes your contact information, account and profile information associated with the Solutions, limited personal health information, appointment information, feedback, ratings, reviews, job application information, social media information, and call centre information. Click on the headings below to learn more about the purposes for collecting this information.
                    </p>
                    <p>
                        We collect your personal information when you contact CHSINC to directly to inquire about Sites, the Solutions, and/or the Services. For example, when you complete any of the contact or inquiry forms on our Sites, we will collect your name, phone number, e-mail address, city, province, postal code, and any other information that you choose to provide to us. When you send customer support a message on one of our Sites, we collect your name, e-mail address, phone number, and any other information that you choose to provide to us. When you report a problem, or submit questions, concerns or comments regarding the Solutions, we may also collect your name, e-mail address, phone number, and other information that you choose to provide to us.
                    </p>
                    <p>
                        We use your contact information to contact and correspond with you directly about our relationship, and your use of the Sites, Solutions and/or Services. We may contact you to inform you about our services in different ways including by mail, email, telephone, or other means to which you have agreed. We may use your contact information to provide you with information, quote, or services that you have requested, to respond to customer service requests, and where we have your consent to do so, to send you push notifications on your device through the Solutions.
                    </p>
                    <p>
                        Where permitted and we have your consent to do so, we may send you information about CHSINC’s services, including general updates and announcements, contests, promotions relating to the care, seminars, workshops and events (see below for information on how to “opt-out” of receiving certain communications from us).
                    </p>

                    <li>
                        <strong>Contact Information:</strong> Includes name, phone, email, city, province, postal code — used to respond to inquiries, send quotes, and provide notifications.
                    </li>
                    <li>
                        <strong>Account and Profile Information:</strong> Includes name, address, birthdate, email, phone number, username, and password — used to create accounts and connect users with providers.
                    </li>
                    <li>
                        <strong>Feedback, Ratings, and Reviews:</strong> Submitted feedback is used to improve services, investigate issues, and train support teams.
                    </li>
                    <li>
                        <strong>Job Applications:</strong> Submitted via ADP and includes resume and contact details. Used to assess employment eligibility. Read more at <a href="https://privacy.adp.com/privacy.html?locale=en_CA" target="_blank" className="text-blue-600 underline">ADP’s Privacy Policy</a>.
                    </li>
                    <li>
                        <strong>Social Media Information:</strong> Submitted on platforms like LinkedIn or Facebook to respond to your inquiries.
                    </li>
                    <li>
                        <strong>Call Centre Information:</strong> Calls may be recorded and personal data collected to deliver support and quotes.
                    </li>
                    <li>
                        <strong>Other Information:</strong> Voluntarily submitted information during promotions or contests.
                    </li>
                </ul>

                <p><strong>Information Provided by Healthcare Providers:</strong></p>
                <p>
                    Providers share user data to enable login and service usage. This includes name, email, role-specific identifiers, and patient data during onboarding.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        <strong>EMR Advantage:</strong> Name, email, phone, college number, PIN, demographics.
                    </li>
                    <li>
                        <strong>Medeo:</strong> Name, email, phone, specialization, password.
                    </li>
                    <li>
                        <strong>FreedomRx:</strong> Name, username, email.
                    </li>
                </ul>

                <p>
                    Providers may import patient databases into the Solutions. CHSINC may also receive user data during support sessions.
                </p>

                <p><strong>Automatically Collected Information:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        <strong>Device & Technical Info:</strong> IP address, browser type, usage patterns — used to improve experience and for licensing.
                    </li>
                    <li>
                        <strong>Video Visits:</strong> Metadata (e.g. date/time, IP) collected by third-party services, not the video content itself.
                    </li>
                    <li>
                        <strong>Messaging:</strong> Facilitated via Twilio (SMS) and SendGrid (email). HealthMail is direct through CHSINC.
                    </li>
                    <li>
                        <strong>Web Analytics:</strong> Google Analytics and Pardot track usage for product improvements — no personal health info is shared.
                    </li>
                    <li>
                        <strong>Cookies & Visitor Preferences:</strong> Used to remember sessions and tailor experiences. Pardot links visitor activity to Salesforce for opted-in users.
                    </li>
                </ul>

                <p><strong>Business and Legal Use:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Conduct data analysis and monitor usage trends</li>
                    <li>Enforce terms, billing, and compliance</li>
                    <li>Detect fraud and protect security</li>
                    <li>Meet legal obligations</li>
                    <li>Other purposes as disclosed and consented</li>
                </ul>

                <p>
                    CHSINC only uses personal information for its intended purpose unless further use is permitted by law or with your consent.
                </p>
            </div>
        )
    },

    {
        title: "Getting Your Consent",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    There are various ways you may consent to the collection, use and disclosure of your personal information processed through our Solutions on behalf of your healthcare provider and the Services provided by CHSINC. Typically, you will voluntarily give information to your healthcare provider or will otherwise provide your consent to them. You should raise any questions you have about consent you have given your healthcare provider directly with them.As described above, there are some instances in which individuals provide personal information to CHSINC. If you install any of the Solutions, enter into a License and Services Agreement, create an account to use one of our Solutions, or use the Sites, Solutions or Services, you acknowledge the notices in this Policy and you consent to CHSINC collection, use, disclosure, and retention of your personal information in accordance with this Policy and as otherwise permitted by law. You may withdraw your consent at any time by giving CHSINC reasonable notice, but consent may not be withdrawn where doing so would frustrate performance of a legal obligation.
                </p>
                <p>
                    In some cases, CHSINC may seek your consent for the use and disclosure of your personal information after it has been collected, but before it has been used or disclosed (e.g. where we want to use your personal information for a purpose not previously identified to you). We will not use or disclose your personal information for any new purpose without first identifying the new purpose and providing notice to you or obtaining your consent (as applicable), unless otherwise permitted by law. You can always choose not to provide CHSINC with certain requested personal information, but then you may not be able to access or utilize all or part of the Sites, the Solutions and/or the Services.
                </p>
            </div>
        ),

    },
    {
        title: "How Do We Share Personal Information with Partners and Service Providers?",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    We may share your personal information within our group of companies, or with our service providers and other third parties for the purposes described below and in accordance with applicable laws. <b> CHSINC does not share any of your health information with any advertisers or related companies.</b> Except as described in this Policy or in other situations where we have provided you with prior notice, have obtained your consent, or are obligated or permitted by law, CHSINC will not share your personal information with third parties. Please note that third party companies are not governed by this Policy and may have their own privacy policies and practices regarding personal information.
                </p>
                <p><b>Sale or Transfer of the Business</b></p>
                <p>
                    CHSINC may decide to sell or transfer all or part of our business to a related company or to a third party, to merge with another entity, to insure or securitize its assets, or to engage in another form of corporate or financing transaction (including transfers made as part of insolvency or bankruptcy proceedings or as part of a corporate reorganization or stock sale or other change in corporate control). CHSINC may share your personal information in connection with the evaluation of and/or entry into such transactions.
                </p>
                <p><b>Where Required or Authorized by Law</b></p>
                <p>
                    CHSINC may also disclose your personal information where authorized or required by law. For example, we may disclose your personal information to comply with a subpoena, in response to a law enforcement body with the lawful authority to obtain the information, pursuant to an investigation into the breach of a law, or to our legal counsel.
                </p>
            </div>
        ),
    },
    {
        title: "What Choices Do You Have About How We Use and Share Your Personal Information?",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    We want you to understand your choices and make informed decisions about how we use and disclose your personal information. There are several options available for you to manage your privacy preferences including, for example by managing your preferences within your account(s), contacting CHSINC directly, changing your browser or device settings, and/or by contacting third parties.Opting-Out of Marketing Communications from CHSINC
                </p>
                <p>
                    If you provide us with your e-mail address and “opt-in” to receiving messages from us via the e-mail address provided, you may receive electronic communications from us from time to time. These electronic communications will provide you with our contact information and a method to opt-out and unsubscribe from receiving marketing information and/or any further communications from us. You can opt-out of receiving these types of communications by updating your email preferences or clicking the unsubscribe link directly within the emails.

                </p>
                <p>
                    CHSINC may use your e-mail address to communicate with you regarding important matters, such as information about your account with one of our Solutions. You may not opt-out of receiving communications required by law, or necessary to provide you with requested services.

                </p>
                <p><b>Tracking Technologies</b></p>
                <p>
                    You can disable cookies by adjusting the settings on your internet browser. Disabling cookies may affect your ability to access some pages on the Sites and some parts of the Solutions may not be accessible or may not function properly.
                </p>
                <p><b>Advertising</b></p>
                <p>
                    We do not share personal health information. We also do not share your personal information with unaffiliated third parties for marketing or promotional purposes.
                </p>
                <p>
                    We do not control third parties’ collection or use of your information to serve advertising. These third parties may provide you with additional choices about how they use your information or ways to choose not to have your information collected or used in this way. You can opt out of several third-party ad servers’ and networks’ cookies by using one of the tools created by the Digital Advertising Alliance of Canada.
                </p>



            </div>
        ),
    },
    {
        title: "How Do We Secure Your Personal Information?",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    The security of personal information in our care is important to us.We have built security features into our Solutions to help healthcare professionals protect your personal health information when they are using the Solutions. Some of these features include access controls, unique user accounts, multi-factor authentication, threat detection, and active logging.
                </p>
                <p>
                    CHSINC takes precautions to help safeguard personal information we manage through the Solutions or is otherwise provided to us. We have made security arrangements to protect against unauthorized access, collection, use, disclosure, and disposal of personal information, in a manner appropriate to the sensitivity of the information. These measures include various administrative and technological safeguards including unique user accounts, and role-based access based on need to know. We also use security practices to protect our systems, which include but are not limited to regular monitoring of our systems for possible vulnerabilities and attacks, proactive penetration tests, encryption of data in transit and at rest, active logging, and employing intrusion detection and prevention systems. We also take steps to ensure that our third-party service providers provide similar or better privacy and security for the personal information they process for us.
                </p>
                <p>
                    As well, CHSINC will use care when destroying or disposing of personal information to prevent unauthorized access, use or disclosure of any personal information. CHSINC employees with access to personal information are required to respect the confidentiality of such information.
                </p>
                <p>
                    The safety and security of your personal information also depends on you. CHSINC is not responsible for any lost, stolen, or compromised usernames, passwords or for any activity on your account via unauthorized password activity. You should take steps to protect against unauthorized access to your account by, for example, choosing a robust password and keeping your username and password private. CHSINC is not responsible for any failure by you to secure your own devices and their access to the Internet or your use of public, unsecured networks. The Sites and Solutions may include links to external websites. Once you leave the Sites or the Solutions, this Policy does not apply. CHSINC is not responsible for the privacy practices, collection of personal information, or content of external websites.
                </p>
                <p>
                    Unfortunately, information systems, the transmission of information via the Internet and mobile platforms are not completely secure. Although we have designed features and employed security techniques to protect your personal information, we cannot guarantee the security of personal information at all times. Any transmission of your personal information is at your own risk.
                </p>
            </div>
        ),
    },
    {
        title: "Data Retention",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    Most of the data that CHSINC manages is on behalf of health care providers and individuals through use of the Solutions. As described above, we also collect some personal information for use by CHSINC.Personal Information Managed on Behalf of Your Healthcare Provider
                </p>
                <p>
                    Personal information that is collected by your healthcare provider, including your personal health information, is the responsibility of the healthcare provider, being the custodian of that information. Your personal information associated with your relationship with that custodian will be subject to the retention policies and practices of the custodian.
                </p>

                <p><b>Personal Information You Provide to CHSINC</b></p>
                <p>
                    Personal information collected by CHSINC for its use directly is maintained in accordance with applicable privacy legislation and CHSINC’s retention policies and practices. Generally, CHSINC stores your personal information for as long as it is reasonably necessary to fulfill the purposes we collected it for, except as otherwise permitted or required by applicable law or regulation.
                </p>
                <p>
                    For clients who have purchased CHSINC-hosted Solutions, CHSINC backs up client data and retains those backups for approximately 30 days. Data imports from health care providers may be retained for six months for data integrity confirmation purposes.
                </p>
                <p>
                    When the applicable retention period ends, personal information is scheduled for destruction according to our record retention policies. Where the personal information is stored in an electronic format, it will be deleted from the Solution or systems in which it is retained. Any backups of the personal information will exist until rotated out of the backup archives. Physical storage which is retired is put through a deep data wipe, degaussing and/or physical destruction designed to ensure there is no risk of personal information being recovered.
                </p>
                <p>
                    Under some circumstances we may anonymize or aggregate your personal information so that it can no longer be associated with you. We reserve the right to use such anonymous and de-identified data for any legitimate business purpose without further notice to you or your consent.
                </p>
            </div>
        ),
    },
    {
        title: "Where do we Store Data?",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    EMR Advantage is only hosted on datacenters located in Canada and personal health information is always stored in Canada.CHSINC stores some business and client contact information on servers in the United States. Some personal information (including personal health information) may be processed outside of Canada. For example, peer-to-peer connections and video streaming on the Solutions are supported from within Canada, with fail-over servers located in the United States. CHSINC also engages third party service providers outside of Canada to process data for the purposes of improving data security. As a result, your personal information may be processed in the United States by one of CHSINC’s third party service providers and may be subject to the laws and access by government or regulatory organizations in the United States.
                </p>
            </div>
        ),
    },
    {
        title: "How Can You Correct and Access Your Personal Information?",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    You can challenge the accuracy and completeness of your personal information. It may be most appropriate for you to raise this with your healthcare provider who maintains your healthcare record. <b>Accessing or Correcting Personal Information in a Medical File or stored on behalf of your Healthcare Provider</b>
                </p>
                <p>
                    If you want to access or correct personal information in your medical file, including personal information stored in a Solution on behalf of your healthcare provider, you should make the request directly to your healthcare services provider. It is your responsibility to provide any updates to your personal information to your healthcare provider as appropriate.
                </p>
                <p><b>Accessing or Correcting Personal Information Collected by CHSINC for Use by CHSINC</b></p>
                <p>
                    If you have an account with one of our Solutions, all personal information in your account and user profile is accessible by you. You can make changes to certain personal information that CHSINC holds about you, such as your contact information, by editing the information in your account. You are responsible for keeping the personal information in your account up to date and accurate. If you are a Medeo user, certain minimum personal information must be input in your account in order to use the Solution’s services. For example, users must share their name, email address and certain other account related information we may reasonably require for verification purposes.
                </p>
                <p>
                    In appropriate circumstances, CHSINC will amend personal information. It is your responsibility to provide any updates to your personal information to CHSINC in writing, as applicable.
                </p>
                <p>
                    You may request access to your personal information and/or correction of that information by contacting CHSINC in writing at the contact information noted below, with sufficient detail to enable CHSINC to identify the personal information being sought. When you contact CHSINC, we may ask for further information to confirm your identity and the nature of the information being sought.
                </p>
                <p>
                    After we receive your request for access to personal information, CHSINC may provide you with an estimate of when you can expect a response. In some cases, CHSINC may need additional time to respond to a request, in which case we will provide you with written notice of the extension. If you require the documents in an alternative format, we will make reasonable efforts to provide you with your personal information in that format.
                </p>
                <p>
                    Please note that in some cases, CHSINC may not provide access to personal information that we hold about you, such as where the denial of access is authorized by law. There are also cases where CHSINC may be legally required to refuse access to personal information. If CHSINC denies your request for access to personal information, we will advise you of the reason for the refusal, and will provide the name, title, and contact information of the designated person who can address the refusal.
                </p>
                <p>
                    CHSINC may charge a reasonable fee according to the cost required to retrieve and provide access to the requested information, or to provide it in a requested alternative format. We may provide an estimate of the fee in advance and in some cases, will require a deposit for all or part of the fee.
                </p>
            </div>
        ),
    },
    {
        title: "Changes to the Policy",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    Questions or concerns about your personal health information should be directed to the healthcare provider from whom you received healthcare services.If you have a product, service, program, or are participating in a promotion, contest or event that is offered by a third party on behalf of CHSINC, the third party may hold certain of your personal information. Should you have any questions or concerns about their use of your personal information, we will direct you to the appropriate contact so that you may make enquiries as to that party’s privacy policies and practices.
                </p>
                <p>
                    Questions or concerns regarding this Policy, including the collection of your personal information, can be directed to the CHSINC Privacy Officer, who is responsible for ensuring CHSINC’s compliance with this Policy. You can contact the Privacy Officer using any of the following methods:
                </p>
                <p>
                    Mailing Address: 1902 Robertson Rd., Suite 204, Ottawa, Ontario, Canada K2H 5B8
                </p>
                <p>
                    Email: info@chsinc.ca
                </p>
                <p>
                    CHSINC takes any complaint about our privacy practices seriously. CHSINC will investigate all complaints. If CHSINC finds a complaint justified, we will take the necessary steps to resolve it. You will be informed of the outcome of the investigation regarding any complaint. If you are not satisfied with CHSINC’s response to a complaint, you may have options to exercise various complaint procedures, including with the relevant Privacy Commissioner or regulatory authority.
                </p>

            </div>
        ),
    },
    {
        title: "Questions and Concerns",
        content: (
            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    CHSINC may update this Policy from time to time by posting a new version of the Policy on the Sites and the Solutions. If there are significant changes made to the Policy, we may notify users of the Solutions in advance through the Solutions or by e-mail. CHSINC’s collection, use, disclosure, and retention of your personal information will be governed by the version of the Policy in effect at that time. We suggest that you review this Policy periodically.
                </p>
            </div>
        ),
    },
    // add more sections if needed 
];

