import ContactCard from "~/components/contact/contact-card";
import ContactForm from "~/components/contact/contact-form";
import SocialCard from "~/components/contact/social-card";
import { contacts, socials } from "~/utils/constants";

export default function ContactPage() {
  return (
    <main className="px-8 py-24">
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-shadow-grey mx-auto max-w-[20ch] py-1 text-4xl font-extrabold tracking-wide sm:text-5xl">
            Want more out of your compute? Let&apos;s talk.
          </h1>
          <p className="mt-6 text-secondary-foreground">
            Submit this form and a member of our team will reach out shortly.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-[1000px] rounded-xl border bg-background-accent p-6">
          <ContactForm />
        </div>
      </div>

      <div className="mt-36">
        <div className="text-center">
          <h2 className="text-shadow-grey py-1 text-center text-3xl font-bold sm:text-4xl">Contacts</h2>
          <p className="mx-auto mt-2 max-w-[80ch] text-secondary-foreground">
            We&apos;re always looking for ways to improve our services and better serve our customers. If you have any
            questions or would like to get in touch, feel free to reach out to us.
          </p>
        </div>

        <div className="mx-auto mt-8 grid w-full max-w-[350px] gap-4 sm:max-w-[600px] sm:grid-cols-2 lg:max-w-[1000px] lg:grid-cols-3">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} {...contact} />
          ))}
        </div>
      </div>

      <div className="mt-36">
        <div className="text-center">
          <h2 className="text-shadow-grey py-1 text-center text-3xl font-bold sm:text-4xl">Socials</h2>
          <p className="mx-auto mt-2 max-w-[80ch] text-secondary-foreground">
            Stay up to date with our latest news and events by following us on social media.
          </p>
        </div>

        <div className="mx-auto mt-8 grid w-full max-w-[350px] gap-4 sm:max-w-[600px] sm:grid-cols-2 lg:max-w-[900px] lg:grid-cols-3">
          {socials.map((social) => (
            <SocialCard key={social.id} {...social} />
          ))}
        </div>
      </div>
    </main>
  );
}
