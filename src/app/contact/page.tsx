import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ContactForm } from "@/components/site/contact-form";
import { Rise } from "@/components/motion/reveal";
import { contact } from "@/data/firm";

export const metadata: Metadata = {
  title: "Contact — Offices",
  description:
    "Contact Saransh Raj & Associates. Office at G-14, LGF, Kalkaji, New Delhi – 110019. Phone +91 79067 08411.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact · Offices"
        title={<>Reach the</>}
        titleAccent="firm."
        intro={
          <>
            The firm welcomes enquiries about its work. Use the details below or
            send a brief message; the firm will respond within one business day
            where possible.
          </>
        }
        accent="cobalt"
      />

      <section className="bg-ivory py-12 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Details */}
            <div className="lg:col-span-5">
              <Rise>
                <p className="eyebrow mb-6">Office</p>
                <div className="space-y-8">
                  <div>
                    <p className="eyebrow text-ink/40 mb-2">Address</p>
                    <p className="text-ink/85 leading-relaxed">
                      {contact.address.line1}
                      <br />
                      {contact.address.line2}
                      <br />
                      {contact.address.country}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="eyebrow text-ink/40 mb-2">Phone</p>
                      <a href={contact.phoneHref} className="link-underline text-ink/85 hover:text-ink">
                        {contact.phone}
                      </a>
                    </div>
                    <div>
                      <p className="eyebrow text-ink/40 mb-2">Email</p>
                      <a href={contact.emailHref} className="link-underline text-ink/85 hover:text-ink break-all">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="eyebrow text-ink/40 mb-2">Office hours</p>
                    <p className="text-ink/85">{contact.hours}</p>
                  </div>
                </div>
              </Rise>

              {/* Map */}
              <Rise delay={0.1}>
                <div className="mt-10 relative aspect-[4/3] w-full bg-paper border border-line overflow-hidden">
                  <iframe
                    title="Office location map"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=77.2550%2C28.5450%2C77.2700%2C28.5550&layer=mapnik&marker=28.5499%2C77.2625`}
                    className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[0.95]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="mt-3 text-xs text-ink/45">
                  G-14, Kalkaji, New Delhi — indicative map view.
                </p>
              </Rise>
            </div>

            {/* Form */}
            <div className="lg:col-span-6 lg:col-start-7">
              <Rise delay={0.1}>
                <div className="bg-paper border border-line p-7 md:p-9">
                  <p className="eyebrow mb-2">Enquiry</p>
                  <h2 className="display-3 text-2xl md:text-3xl mb-6">
                    Send a message
                  </h2>
                  <ContactForm />
                </div>
              </Rise>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
