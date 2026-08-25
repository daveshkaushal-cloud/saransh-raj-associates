import type { Metadata } from "next";
import { contact, firm } from "@/data/firm";
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
      <section className="relative bg-ivory pt-8 md:pt-12 pb-10 md:pb-14 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-8 md:mb-10">
            <span className="mono-label text-stone">Index 06 · Contact</span>
            <span className="folio text-stone">06 / 06</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <div>
                <p className="mono-label text-stone mb-4">Offices</p>
                <p className="margin-note text-charcoal">
                  A neutral enquiry form and the firm&apos;s verified contact details.
                </p>
              </div>
            </div>
            <div className="md:col-span-9">
              <div>
                <h1 className="display-1 text-espresso max-w-[14ch]">
                  Reach the{" "}
                  <span className="serif-italic">firm</span>
                </h1>
              </div>
              <div>
                <p className="lead mt-6 md:mt-8 measure text-charcoal">
                  The firm welcomes enquiries about its work. Please use the form
                  below or the contact details to the right to be in touch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact grid: form + details */}
      <section className="bg-porcelain py-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
            {/* Form — left, wider */}
            <div className="md:col-span-7">
              <div>
                <div className="border-t border-rose-dark pt-6">
                  <p className="mono-label text-stone mb-2">§ Enquiry</p>
                  <h2 className="display-3 mb-8">
                    Send a message
                  </h2>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Details — right */}
            <div className="md:col-span-4 md:col-start-9">
              <div>
                <div className="border-t border-rose-dark pt-6 space-y-8">
                  <div>
                    <p className="mono-label text-stone mb-2">Address</p>
                    <p className="text-espresso leading-relaxed">
                      {contact.address.line1}<br />
                      {contact.address.line2}<br />
                      {contact.address.country}
                    </p>
                  </div>
                  <div>
                    <p className="mono-label text-stone mb-2">Phone</p>
                    <a href={contact.phoneHref} className="link-underline text-espresso hover:text-rose-dark">{contact.phone}</a>
                  </div>
                  <div>
                    <p className="mono-label text-stone mb-2">Email</p>
                    <a href={contact.emailHref} className="link-underline text-espresso hover:text-rose-dark break-all">{contact.email}</a>
                  </div>
                  <div>
                    <p className="mono-label text-stone mb-2">Office hours</p>
                    <p className="text-espresso">{contact.hours}</p>
                  </div>
                  <div className="pt-4 border-t border-line">
                    <p className="mono-label text-stone mb-2">Based in</p>
                    <p className="text-sm text-charcoal">{firm.basedIn}, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
