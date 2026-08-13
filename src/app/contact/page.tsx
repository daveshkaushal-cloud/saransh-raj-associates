import type { Metadata } from "next";
import { contact, firm } from "@/data/firm";
import { FadeUp, SheetReveal } from "@/components/motion/editorial";
import { ContactForm } from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Contact — Offices",
  description:
    "Reach Saransh Raj & Associates in New Delhi. Office address, phone, email and hours, with a neutral enquiry form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero — quiet, functional */}
      <section className="relative bg-porcelain pt-10 md:pt-16 pb-12 md:pb-16 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <span className="mono-label text-ink/50">Chapter 07 · Contact</span>
            <span className="folio text-ink/45">008 / 018</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <FadeUp>
                <p className="mono-label text-ink/55 mb-4">Offices</p>
                <p className="margin-note">
                  A neutral enquiry form and the firm&apos;s verified contact details.
                </p>
              </FadeUp>
            </div>
            <div className="md:col-span-9">
              <SheetReveal>
                <h1 className="display-1 text-ink max-w-[14ch]">
                  Reach the{" "}
                  <span className="serif-italic text-vermilion">firm</span>
                </h1>
              </SheetReveal>
              <FadeUp delay={0.15}>
                <p className="lead mt-8 max-w-2xl text-ink/70">
                  The firm welcomes enquiries about its work. Please use the form
                  below or the contact details to the right to be in touch.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Contact grid: form + details */}
      <section className="bg-porcelain py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
            {/* Form — left, wider */}
            <div className="md:col-span-7">
              <FadeUp>
                <div className="border-t border-ink pt-6">
                  <p className="mono-label text-ink/55 mb-2">§ Enquiry</p>
                  <h2 className="display-3 text-2xl md:text-3xl mb-8">
                    Send a message
                  </h2>
                </div>
                <ContactForm />
              </FadeUp>
            </div>

            {/* Details — right */}
            <div className="md:col-span-4 md:col-start-9">
              <FadeUp delay={0.1}>
                <div className="border-t border-ink pt-6 space-y-8">
                  <div>
                    <p className="mono-label text-ink/55 mb-2">Address</p>
                    <p className="text-ink/85 leading-relaxed">
                      {contact.address.line1}<br />
                      {contact.address.line2}<br />
                      {contact.address.country}
                    </p>
                  </div>
                  <div>
                    <p className="mono-label text-ink/55 mb-2">Phone</p>
                    <a href={contact.phoneHref} className="link-underline text-ink/85 hover:text-ink">{contact.phone}</a>
                  </div>
                  <div>
                    <p className="mono-label text-ink/55 mb-2">Email</p>
                    <a href={contact.emailHref} className="link-underline text-ink/85 hover:text-ink break-all">{contact.email}</a>
                  </div>
                  <div>
                    <p className="mono-label text-ink/55 mb-2">Office hours</p>
                    <p className="text-ink/85">{contact.hours}</p>
                  </div>
                  <div className="pt-4 border-t border-line">
                    <p className="mono-label text-ink/45 mb-2">Based in</p>
                    <p className="text-sm text-ink/65">{firm.basedIn}, India</p>
                    <p className="text-sm text-ink/55 mt-1">Serving across {firm.servesAcross}</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
