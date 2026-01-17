import { Link } from "react-router";

import { Button } from "~/components/vorent/button";
import { Heading } from "~/components/vorent/heading";
import { Text } from "~/components/vorent/text";
import { site } from "~/config/site";

export default function OurCTA() {
  return (
    <section id="contact" className="relative bg-secondary py-32">
      <div className="container max-w-3xl text-center">
        <div className="mb-16 flex flex-col gap-8">
          <Heading className="text-primary">Siap Transformasi Digital?</Heading>
          <Text className="text-muted-foreground">
            Diskusikan proyek Anda sekarang. Kami siap membantu Anda mencapai target bisnis dengan
            solusi digital yang tepat.
          </Text>
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
