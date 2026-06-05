import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Terms of Service | NZ Home Improvement Stamford CT",
  description:
    "Read the Terms of Service for NZ Home Improvement. Learn about our service agreements, responsibilities, and policies for home renovation projects in Stamford, CT.",
  alternates: { canonical: "https://nzhomeimprovement.com/terms" },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing our website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.",
  },
  {
    title: "Services Provided",
    body: "NZ Home Improvement provides residential remodeling and renovation services including kitchen remodeling, bathroom renovation, basement finishing, home additions, and general home renovation in Stamford, CT and surrounding areas. All services are subject to a written contract agreed upon by both parties before work begins.",
  },
  {
    title: "Estimates & Pricing",
    body: "All estimates provided are based on information available at the time of consultation. Final pricing may vary based on unforeseen conditions discovered during construction, changes requested by the client, or material price fluctuations. Any changes to the original scope of work will be documented via a written change order.",
  },
  {
    title: "Project Timeline",
    body: "Project timelines are estimates and may be affected by weather, material availability, permit processing times, or client-requested changes. NZ Home Improvement will communicate any significant delays promptly and work to minimize disruption.",
  },
  {
    title: "Payment Terms",
    body: "Payment schedules are outlined in the project contract. Typically, a deposit is required before work begins, with progress payments tied to project milestones. Final payment is due upon project completion and client walkthrough.",
  },
  {
    title: "Warranties",
    body: "NZ Home Improvement provides a 1-year warranty on labor and workmanship from the date of project completion. This warranty does not cover damage resulting from misuse, neglect, acts of nature, or modifications made by third parties. Manufacturer warranties apply separately to materials and products installed.",
  },
  {
    title: "Limitation of Liability",
    body: "NZ Home Improvement's liability is limited to the value of the contracted work. We are not responsible for indirect, incidental, or consequential damages arising from delays, defects, or service interruptions beyond our reasonable control.",
  },
  {
    title: "Client Responsibilities",
    body: "Clients are responsible for providing accurate information about the property, ensuring site access during agreed working hours, and promptly reviewing and approving work at agreed milestones. Delays caused by client unavailability may affect project timelines.",
  },
  {
    title: "Permits & Compliance",
    body: "NZ Home Improvement will obtain required building permits as specified in the project contract. All work will be performed in compliance with applicable local building codes and regulations in Stamford, CT and Fairfield County.",
  },
  {
    title: "Dispute Resolution",
    body: "Any disputes arising from our services will first be addressed through direct communication between the parties. If unresolved, disputes will be subject to mediation before any legal action is pursued. These terms are governed by the laws of the State of Connecticut.",
  },
  {
    title: "Changes to Terms",
    body: "NZ Home Improvement reserves the right to update these Terms of Service at any time. Changes will be posted on our website and take effect immediately upon posting. Continued use of our services constitutes acceptance of updated terms.",
  },
  {
    title: "Contact Us",
    body: "If you have any questions about these Terms of Service, please contact us at info@nzhomeimprovement.com or call us at (203) 524-7974.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" bgImage="/img/full/20.jpg" crumb="Terms of Service" />

      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-3xl mx-auto">

          <p className="text-gray-500 text-sm leading-relaxed mb-12 border-b border-gray-100 pb-8">
            Last updated: January 1, 2025. These Terms of Service govern your use of NZ Home Improvement&apos;s website and services.
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
