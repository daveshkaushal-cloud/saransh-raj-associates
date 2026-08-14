import type { Metadata } from "next";
import { LegalLayout } from "@/components/site/legal-layout";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms of use for the Saransh Raj & Associates website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      updated="2025"
      intro={
        <p>
          These terms govern your use of the {firm.name} website. By accessing
          and using the website, you accept these terms in full. If you do not
          accept any part of these terms, please do not use the website.
        </p>
      }
      sections={[
        {
          id: "acceptance",
          heading: "Acceptance of terms",
          body: (
            <p>
              Access to and use of this website constitutes acceptance of these
              Terms of Use and the accompanying Disclaimer and Privacy Policy.
              The firm may revise these terms at any time without notice; your
              continued use of the website following any change indicates
              acceptance of the revised terms.
            </p>
          ),
        },
        {
          id: "use",
          heading: "Permitted use",
          body: (
            <p>
              This website is provided for personal, non-commercial
              informational use. You may view, download and print material from
              this website for your own informational use, provided that all
              copyright and proprietary notices are retained. You may not use
              the content for any commercial purpose without prior written
              permission from the firm.
            </p>
          ),
        },
        {
          id: "restrictions",
          heading: "Restrictions",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>Using the website in any manner that could damage or impair its functioning;</li>
              <li>Attempting to gain unauthorised access to any part of the website or its systems;</li>
              <li>Reproducing, redistributing or republishing content without permission;</li>
              <li>Using automated tools to scrape or extract content at scale;</li>
              <li>Misrepresenting the firm or the content of this website.</li>
            </ul>
          ),
        },
        {
          id: "intellectual-property",
          heading: "Intellectual property",
          body: (
            <p>
              All content on this website — including text, design, the visual
              system, original artworks and the firm&apos;s name — is the
              property of {firm.name} or its licensors, and is protected by
              applicable intellectual property laws. The firm&apos;s name and
              marks may not be used without prior written consent.
            </p>
          ),
        },
        {
          id: "no-warranty",
          heading: "No warranty",
          body: (
            <p>
              The website and its content are provided &quot;as is&quot; without
              warranties of any kind, whether express or implied. The firm does
              not warrant that the website will be uninterrupted, error-free, or
              free of harmful components, or that any content is accurate,
              complete or current.
            </p>
          ),
        },
        {
          id: "limitation",
          heading: "Limitation of liability",
          body: (
            <p>
              To the fullest extent permitted by law, {firm.name} shall not be
              liable for any direct, indirect, incidental, consequential or
              exemplary damages arising from your use of, or inability to use,
              this website or its content.
            </p>
          ),
        },
        {
          id: "links",
          heading: "Links to and from this website",
          body: (
            <p>
              The firm is not responsible for the content of external websites
              that link to this website, nor for the content of websites linked
              from this website. The inclusion of a link does not constitute an
              endorsement.
            </p>
          ),
        },
        {
          id: "governing-law",
          heading: "Governing law and jurisdiction",
          body: (
            <p>
              These terms are governed by the laws of India. The courts at New
              Delhi shall have exclusive jurisdiction over any dispute arising
              from or in connection with these terms or the use of this website.
            </p>
          ),
        },
      ]}
    />
  );
}
