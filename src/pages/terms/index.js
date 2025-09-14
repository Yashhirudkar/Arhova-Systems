import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-white-50 text-gray-800 mt-15">
        <section className="mx-auto max-w-4xl px-6 py-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <h1 className="text-4xl font-semibold tracking-tight text-center mb-10">
                  Terms & Conditions
                </h1>

            <ArticleSection title="1.Introduction">
              <p>
                Welcome to arhovasystems Digital Marketing Private Limited! These terms and conditions
                govern your use of our website and services. By accessing our website or using our
                services, you agree to comply with these terms.
              </p>
            </ArticleSection>

            <ArticleSection title="2.Definitions">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>“arhovasystems,” “we,” “us,” and “our”</strong> refer to arhovasystems Digital Marketing
                  Private Limited.
                </li>
                <li>
                  <strong>“You” and “your”</strong> refer to the user or customer of our website and
                  services.
                </li>
                <li>
                  <strong>“Services”</strong> refer to the paid ads management services, SEO services, and
                  website development services provided by arhovasystems Digital Marketing Private Limited.
                </li>
              </ul>
            </ArticleSection>

            <ArticleSection title="3.Acceptance of Terms">
              <p>
                By using our website or services, you agree to these terms and conditions. If you do
                not agree with any part of these terms, please refrain from using our website and
                services.
              </p>
            </ArticleSection>

            <ArticleSection title="4.Services">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  arhovasystems offers paid ads management services, SEO services, and website development
                  services to businesses seeking to improve their online presence.
                </li>
                <li>
                  Service details, including pricing, deliverables, and timelines, will be provided
                  upon request or during the consultation process.
                </li>
              </ul>
            </ArticleSection>

            <ArticleSection title="5.Payment">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Payment terms for our services will be communicated to you before engagement. We
                  accept payment via accepted payment methods compliant with Indian regulations.
                </li>
                <li>
                  All fees and charges are non-refundable unless explicitly stated otherwise.
                </li>
              </ul>
            </ArticleSection>

            <ArticleSection title="6.Intellectual Property">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  All content, designs, logos, and intellectual property on our website and in our
                  services are the property of arhovasystems unless otherwise indicated.
                </li>
                <li>
                  You may not use, reproduce, or distribute our intellectual property without prior
                  written consent.
                </li>
              </ul>
            </ArticleSection>

            <ArticleSection title="7.Confidentiality">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  We respect the confidentiality of your information and will not disclose it to third
                  parties without your consent, except as required by law.
                </li>
                <li>
                  You agree to maintain the confidentiality of any information shared by arhovasystems and not
                  disclose it to third parties.
                </li>
              </ul>
            </ArticleSection>

            <ArticleSection title="8.Disclaimer">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  While arhovasystems aims to provide accurate and effective services, we do not guarantee
                  specific results or outcomes.
                </li>
                <li>
                  We are not liable for any losses or damages resulting from your use of our services
                  or reliance on information provided on our website.
                </li>
              </ul>
            </ArticleSection>

            <ArticleSection title="9.Limitation of Liability">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  arhovasystems’s liability for any claims related to our services is limited to the total
                  amount paid by you for those services.
                </li>
                <li>
                  We are not liable for indirect, incidental, special, consequential, or punitive
                  damages arising from the use of our services or website.
                </li>
              </ul>
            </ArticleSection>

            <ArticleSection title="10.Governing Law and Jurisdiction">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  These terms and conditions are governed by Indian law and shall be interpreted in
                  accordance with the laws of Maharashtra state.
                </li>
                <li>
                  Any disputes arising from these terms shall be subject to the exclusive jurisdiction
                  of the courts in Mumbai, Maharashtra.
                </li>
              </ul>
            </ArticleSection>

            <ArticleSection title="11.Changes to Terms">
              <p>
                arhovasystems reserves the right to update or modify these terms and conditions at any time
                without prior notice. It is your responsibility to review these terms periodically for
                changes.
              </p>
            </ArticleSection>

            <ArticleSection title="12.Contact Information">
              <p>
                If you have questions or concerns about these terms and conditions, please contact us at
                <a className="mx-1 underline" href="mailto:info@arhovasystems.com">info@arhovasystems.com</a>
                or <a className="mx-1 underline" href="tel:+918369129670">+91 83691 29670</a>.
              </p>
            </ArticleSection>

            <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
              <p>
                Note: This template is a general-purpose Terms & Conditions page and does not constitute
                legal advice. Consider consulting a qualified attorney to review and tailor it to your
                specific business needs.
              </p>
            </div>
          </div>
        </section>

        {/* <footer className="border-t bg-white">
          <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} arhovasystems Digital Marketing Private Limited. All rights reserved.
          </div>
        </footer> */}
      </main>
    </>
  );
}

function ArticleSection({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-gray-700">{children}</div>
    </section>
  );
}
