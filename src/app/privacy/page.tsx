import type { Metadata } from "next";
import { LegalLayout } from "@/components/site/legal-layout";
import { firm, contact } from "@/data/firm";

// NOTE: Final legal language should be reviewed by the firm's lawyer.

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "The privacy policy for the Saransh Raj & Associates website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro={
        <p>
          This privacy policy explains how {firm.name} handles information
          collected through this website. The firm is conscious of visitor
          privacy and seeks to collect only what is necessary for the
          informational functioning of the site and for responding to
          enquiries received through the contact form.
        </p>
      }
      sections={[
        {
          id: "information-collected",
          heading: "Information we collect",
          body: (
            <>
              <p>
                This website collects the following categories of information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Information you provide through the contact form:</strong>{" "}
                  when you submit the contact form, the firm receives the name,
                  email address, phone number (if provided), nature of enquiry
                  (if selected) and message that you provide. This information
                  is stored in the firm&apos;s local database so that the firm
                  can read and respond to the enquiry.
                </li>
                <li>
                  <strong>Technical information:</strong> basic, non-identifying
                  information such as browser type and broad geographic region,
                  collected to understand how the website is used.
                </li>
              </ul>
              <p>
                This website does not knowingly collect sensitive personal data
                beyond what is necessary for the contact form. Please do not
                share confidential information through the form.
              </p>
            </>
          ),
        },
        {
          id: "use",
          heading: "How information is used",
          body: (
            <p>
              Information provided through the contact form is used solely to
              read and respond to your enquiry. Technical information is used in
              aggregate to maintain and improve the website. The firm does not
              use this information for advertising or for soliciting professional
              engagement.
            </p>
          ),
        },
        {
          id: "retention",
          heading: "Retention",
          body: (
            <p>
              Contact-form enquiries are retained in the firm&apos;s local
              database only for as long as necessary to respond to and document
              the enquiry, and are then removed or archived in accordance with
              the firm&apos;s record-keeping practices.
            </p>
          ),
        },
        {
          id: "sharing",
          heading: "Sharing and disclosure",
          body: (
            <p>
              The firm does not sell or rent personal information. Information
              may be shared with service providers who assist in operating the
              website (such as hosting providers), or where required by law.
              Such service providers are expected to handle information
              confidentially and securely.
            </p>
          ),
        },
        {
          id: "cookies",
          heading: "Cookies and similar technologies",
          body: (
            <>
              <p>
                This website may use essential cookies necessary for its basic
                functioning. It does not use cookies for cross-site advertising,
                behavioural profiling or tracking visitors across other
                websites.
              </p>
              <p>
                The contact form operates through a server-side submission and
                does not depend on cookies to function. No acceptance or
                preference state is stored in your browser by this website.
              </p>
            </>
          ),
        },
        {
          id: "security",
          heading: "Security",
          body: (
            <p>
              The firm takes reasonable measures to protect information
              collected through this website, including the use of a local
              database for storing contact-form submissions. However, no method
              of transmission over the internet or of electronic storage is
              fully secure, and the firm cannot guarantee absolute security.
            </p>
          ),
        },
        {
          id: "your-rights",
          heading: "Your rights",
          body: (
            <p>
              You may request access to, correction of, or deletion of personal
              information you have provided by contacting the firm using the
              details below. You may also choose not to provide information
              through the contact form; the consequence of doing so is that the
              firm will not be able to respond to an enquiry.
            </p>
          ),
        },
        {
          id: "children",
          heading: "Children",
          body: (
            <p>
              This website is not directed at children, and the firm does not
              knowingly collect information from children.
            </p>
          ),
        },
        {
          id: "contact",
          heading: "Contact",
          body: (
            <p>
              For privacy-related questions, please contact {firm.name} at{" "}
              <a href={contact.emailHref} className="link-underline text-ink hover:text-copper">
                {contact.email}
              </a>{" "}
              or{" "}
              <a href={contact.phoneHref} className="link-underline text-ink hover:text-copper">
                {contact.phone}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
