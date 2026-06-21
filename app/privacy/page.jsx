import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy | NZ Home Improvement Stamford CT",
  description:
    "Read the Privacy Policy of NZ Home Improvement. Learn how we collect, use, and protect your personal information when you use our home renovation services.",
  alternates: { canonical: "https://nzhomeimprovement.com/privacy/" },
};

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly to us, including your name, phone number, email address, zip code, and details about your renovation project. We may also collect information automatically when you visit our website, such as your IP address, browser type, pages visited, and time spent on our site.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect to respond to your inquiries, provide estimates and quotes, deliver our renovation services, send project updates and communications, improve our website and services, and comply with legal obligations. We do not sell your personal information to third parties.",
  },
  {
    title: "Information Sharing",
    body: "We may share your information with trusted subcontractors or suppliers involved in your renovation project, service providers who assist with our business operations (such as email or CRM platforms), or as required by law or legal process. All third parties we work with are required to maintain the confidentiality of your information.",
  },
  {
    title: "Cookies & Tracking",
    body: "Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality.",
  },
  {
    title: "Data Security",
    body: "We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Data Retention",
    body: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal requirements, resolve disputes, and enforce our agreements. Project records may be retained for up to 7 years for warranty and legal purposes.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, correct, or request deletion of your personal information. You may also opt out of marketing communications at any time by contacting us or using the unsubscribe link in our emails. To exercise these rights, please contact us using the details below.",
  },
  {
    title: "Third-Party Links",
    body: "Our website may contain links to third-party websites such as review platforms or social media. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies separately.",
  },
  {
    title: "Children's Privacy",
    body: "Our services are intended for adults 18 years of age and older. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Updated versions will be posted on this page with a revised date. Continued use of our services after changes constitutes acceptance of the updated policy.",
  },
  {
    title: "Contact Us",
    body: "If you have any questions or concerns about this Privacy Policy or how we handle your information, please contact us at info@nzhomeimprovement.com or call (203) 524-7974. Our office is located in Stamford, CT.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" bgImage="/img/full/20.jpg" crumb="Privacy Policy" />

      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-3xl mx-auto">

          <p className="text-gray-500 text-sm leading-relaxed mb-12 border-b border-gray-100 pb-8">
            Last updated: January 1, 2025. This Privacy Policy explains how NZ Home Improvement collects, uses, and protects your personal information.
          </p>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={s.title}>
                <h2 className="text-lg font-bold text-black tracking-tight mb-3">
                  {i + 1}. {s.title}
                </h2>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
