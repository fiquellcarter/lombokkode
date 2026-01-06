import Hero from "~/components/hero";
import OurPortfolio from "~/components/our-portfolio";
import OurPricing from "~/components/our-pricing";
import OurServices from "~/components/our-services";
import OurTestimonial from "~/components/our-testimonial";
import OurTrust from "~/components/our-trust";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <OurServices />
        <OurTrust />
        <OurPricing />
        <OurPortfolio />
        <OurTestimonial />
      </main>
    </div>
  );
}
