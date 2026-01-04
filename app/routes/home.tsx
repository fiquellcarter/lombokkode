import Hero from "~/components/hero";
import OurServices from "~/components/our-services";
import OurTrust from "~/components/our-trust";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <OurServices />
        <OurTrust />
      </main>
    </div>
  );
}
