import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useSearchParams } from "react-router";

import { Button } from "~/components/vorent/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/vorent/card";
import { Heading } from "~/components/vorent/heading";
import { ScrollArea } from "~/components/vorent/scroll-area";
import { Small, Text } from "~/components/vorent/text";
import { site } from "~/config/site";
import { pricings } from "~/data/pricings";
import { cn, toSlug } from "~/lib/utils";

export default function OurPricing() {
  const [searchParams, setSearchParams] = useSearchParams();

  const serviceParam = searchParams.get("service");
  const found = pricings.find((pricing) => toSlug(pricing.title) === serviceParam);
  const currentPricing = found || pricings[0];
  const activePricing = currentPricing.title;

  const handleSelectPricing = (title: string) => {
    setSearchParams(
      (params) => {
        params.set("service", toSlug(title));

        return params;
      },
      { preventScrollReset: true }
    );
  };

  const handleSelectPlan = (name: string) => {
    const message = `Halo kak, saya tertarik dengan layanan ${currentPricing.title} (${name}). Mohon info detailnya ya. Terima kasih.`;
    const url = `https://wa.me/${site.contact.phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="pricing"
      className="flex min-h-dvh items-center justify-center bg-card py-32 text-card-foreground">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <Text className="mb-2 uppercase">
            <Small>Layanan & Harga</Small>
          </Text>
          <Heading level={3} className="mb-4">
            Paket Website Premium
          </Heading>
          <Text>
            Siap naik level? Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Konsultasi gratis
            untuk hasil maksimal!
          </Text>
        </div>
        <ScrollArea className="mb-8">
          <div className="flex items-center gap-4 p-2 lg:justify-center">
            {pricings.map((pricing, index) => (
              <Button
                key={index}
                variant={activePricing === pricing.title ? "primary" : "outline"}
                onClick={() => handleSelectPricing(pricing.title)}>
                {pricing.title}
              </Button>
            ))}
          </div>
        </ScrollArea>
        <div className="mb-16 flex flex-col gap-2 text-center">
          <Heading level={4}>{currentPricing.title}</Heading>
          <Text>{currentPricing.description}</Text>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePricing}
            initial={{ opacity: 0, y: 25 }}
            exit={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {currentPricing.plans.map((plan, index) => (
              <Card
                key={index}
                className={cn(
                  "relative flex size-full flex-col",
                  plan.highlight && "scale-105 bg-background text-foreground"
                )}>
                {plan.highlight && (
                  <div className="absolute inset-x-0 -top-3 text-center">
                    <Text>
                      <Small className="rounded-sm border bg-linear-to-r from-primary to-[#e65a3f] px-3 py-1.5 text-primary-foreground uppercase">
                        Paling Laris
                      </Small>
                    </Text>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <Heading level={3}>{plan.price}</Heading>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <Text className="flex items-center gap-2">
                          <Check className="text-primary" />
                          {feature}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    variant={plan.highlight ? "primary" : "outline"}
                    block
                    onClick={() => handleSelectPlan(plan.name)}>
                    Pilih Paket
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="mt-16 rounded-sm border p-6 text-center">
          <Text>
            <Small className="text-base">Catatan:</Small> Harga dapat berubah sesuai fitur khusus.{" "}
            <Small className="text-base">Diskon 15%</Small> untuk pembayaran penuh di awal!
          </Text>
        </div>
      </div>
    </section>
  );
}
