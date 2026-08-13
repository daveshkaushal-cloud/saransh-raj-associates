import type { Metadata } from "next";
import { LegalLayout } from "@/components/site/legal-layout";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "The disclaimer for the Saransh Raj & Associates website. This site is informational and does not constitute legal advice or solicitation.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      updated="2025"
      intro={
        <p>
          This website is the online presence of {firm.name}, a law firm based
          in New Delhi, India. It has been prepared and is maintained solely for
          informational purposes. Please read this disclaimer carefully before
          accessing any part of the website.
        </p>
      }
      sections={[
        {
          id: "informational",
          heading: "Informational purpose",
          body: (
            <>
              <p>
                This website provides general information about {firm.name},
                its practice areas, sectors and people. The content is not
                intended to be, and should not be relied upon as, legal advice.
                It does not constitute an invitation to create a lawyer-client
                relationship.
              </p>
              <p>
                A lawyer-client relationship will be formed only upon a formal
                engagement with the firm, and not through access to, or
                communication via, this website.
              </p>
            </>
          ),
        },
        {
          id: "voluntary",
          heading: "Voluntary access",
          body: (
            <p>
              By entering this website, you confirm that you are accessing it
              voluntarily and on your own initiative, and that you have read and
              understood this disclaimer. If you do not agree with these terms,
              please refrain from accessing the website.
            </p>
          ),
        },
        {
          id: "no-solicitation",
          heading: "No solicitation or advertisement",
          body: (
            <>
              <p>
                This website does not solicit work or employment, and does not
                advertise or offer legal services. The Bar Council of India does
                not permit advertisement or solicitation by advocates in any
                form or manner.
              </p>
              <p>
                The content here should not be construed as an invitation for
                professional engagement. Any communication through this website
                does not constitute solicitation.
              </p>
            </>
          ),
        },
        {
          id: "no-advice",
          heading: "No legal advice",
          body: (
            <p>
              Nothing on this website constitutes legal advice. You should seek
              appropriate professional advice tailored to your circumstances
              before acting on any information presented here. The firm accepts
              no liability for any reliance placed on the content of this
              website.
            </p>
          ),
        },
        {
          id: "accuracy",
          heading: "Accuracy of information",
          body: (
            <p>
              The firm endeavours to keep the information on this website
              accurate and current, but makes no representation or warranty,
              express or implied, about its completeness, accuracy or
              reliability. The content may be updated or changed without notice.
            </p>
          ),
        },
        {
          id: "intellectual-property",
          heading: "Intellectual property",
          body: (
            <p>
              Unless otherwise stated, the content, design and visual system of
              this website are the property of {firm.name}. All visuals are
              original artworks created for this website. Unauthorised
              reproduction or distribution is not permitted.
            </p>
          ),
        },
        {
          id: "external-links",
          heading: "External links",
          body: (
            <p>
              Where this website links to external resources, the firm is not
              responsible for the content, accuracy or practices of those
              resources, and the inclusion of a link does not imply endorsement.
            </p>
          ),
        },
        {
          id: "governing-law",
          heading: "Governing law",
          body: (
            <p>
              This disclaimer is governed by the laws of India. The courts at
              New Delhi shall have exclusive jurisdiction over any matter
              arising from the use of this website.
            </p>
          ),
        },
      ]}
    />
  );
}
