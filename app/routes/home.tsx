import Footer from "~/components/footer";
import Hero from "~/components/hero";
import OurAbout from "~/components/our-about";
import OurCTA from "~/components/our-cta";
import OurFAQ from "~/components/our-faq";
import OurPortfolio from "~/components/our-portfolio";
import OurPricing from "~/components/our-pricing";
import OurTestimonial from "~/components/our-testimonial";
import OurTrust from "~/components/our-trust";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <OurAbout />
        <OurTrust />
        <OurPricing />
        <OurPortfolio />
        <OurTestimonial />
        <OurFAQ />
        <OurCTA />
        <Footer />
      </main>
    </div>
  );
}
