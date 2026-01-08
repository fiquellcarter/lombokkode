import { Link } from "react-router";

import { Button } from "~/components/vorent/button";
import { Heading } from "~/components/vorent/heading";
import { Text } from "~/components/vorent/text";
import { site } from "~/config/site";

export default function OurCTA() {
  return (
    <section id="our-cta" className="relative bg-secondary py-32 text-secondary-foreground">
      <div className="container text-center">
        <div className="mb-16 flex flex-col gap-8">
          <Heading>Siap Transformasi Digital?</Heading>
          <div className="mx-auto max-w-2xl">
            <Text>
              Diskusikan proyek Anda sekarang. Kami siap membantu Anda mencapai target bisnis dengan
              solusi digital yang tepat.
            </Text>
          </div>
        </div>
        <Button
          render={
            <Link
              to={`https://wa.me/${site.contact.phone}`}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          size="lg">
          Mulai Konsultasi Gratis
        </Button>
      </div>
      <div className="absolute inset-x-0 -top-20 z-10 h-32 w-full bg-background blur-xl"></div>
      <div className="absolute inset-x-0 -bottom-20 z-10 h-32 w-full bg-background blur-xl"></div>
    </section>
  );
}
