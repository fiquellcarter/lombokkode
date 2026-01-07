import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import * as React from "react";
import { Link } from "react-router";

import { Icon } from "~/components/shared/icon";
import { Button } from "~/components/vorent/button";
import { Dialog, DialogContent, DialogPopup, DialogTrigger } from "~/components/vorent/dialog";
import { Heading } from "~/components/vorent/heading";
import { Small, Text } from "~/components/vorent/text";
import { site } from "~/config/site";
import { portfolios } from "~/data/portfolios";
import { cn } from "~/lib/utils";

type Portfolio = (typeof portfolios)[number];

export default function OurPortfolio() {
  const [showAll, setShowAll] = React.useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = React.useState<Portfolio | null>(null);

  const visiblePortfolios = showAll ? portfolios : portfolios.slice(0, 6);

  return (
    <section id="our-portfolio" className="flex min-h-dvh items-center justify-center py-32">
      <div className="container">
        <div className="mb-16 md:flex md:items-end md:justify-between md:gap-4">
          <div>
            <Text className="mb-2 uppercase">
              <Small>Portofolio</Small>
            </Text>
            <Heading level={3} className="mb-4">
              Karya Terpilih Kami
            </Heading>
            <Text>Studi kasus nyata bagaimana kami membantu klien berkembang.</Text>
          </div>
          <div className="hidden md:block">
            <Button variant="ghost" onClick={() => setShowAll(!showAll)}>
              {showAll ? (
                <React.Fragment>
                  <span>Tampilkan Lebih Sedikit</span>
                  <ArrowLeft />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <span>Lihat Semua Proyek</span>
                  <ArrowRight />
                </React.Fragment>
              )}
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visiblePortfolios.map((portfolio, index) => (
            <Dialog key={index}>
              <DialogTrigger
                render={
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                }
                nativeButton={false}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-md",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
                )}
                onClick={() => setSelectedPortfolio(portfolio)}>
                <motion.div>
                  <div className="aspect-6/4">
                    <img
                      src={portfolio.image}
                      alt={portfolio.title}
                      className="size-full object-cover transition-transform duration-400 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-start justify-end bg-linear-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                    <Text>
                      <Small>{portfolio.category}</Small>
                    </Text>
                    <Heading level={4} className="text-white">
                      {portfolio.title}
                    </Heading>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogPopup className="max-w-6xl overflow-hidden">
                <DialogContent className="p-0">
                  {selectedPortfolio && (
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-3/5">
                        <img
                          src={selectedPortfolio.image}
                          alt={selectedPortfolio.title}
                          className="h-72 w-full object-cover lg:h-full"
                        />
                      </div>
                      <div className="p-6 lg:w-2/5">
                        <Text className="mb-2">
                          <Small className="uppercase">{selectedPortfolio.category}</Small>
                        </Text>
                        <Heading level={3} className="mb-4">
                          {selectedPortfolio.title}
                        </Heading>
                        <Text className="mb-8">{selectedPortfolio.description}</Text>
                        <div className="flex flex-col gap-2 lg:flex-row lg:justify-end">
                          <Button
                            render={
                              <Link
                                to={selectedPortfolio.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              />
                            }
                            variant="outline">
                            Lihat Proyek
                            <ExternalLink />
                          </Button>
                          <Button
                            render={
                              <Link
                                to={`https://wa.me/${site.contact.phone}?text=${encodeURIComponent(`Halo kak, saya tertarik dengan proyek ${selectedPortfolio.title}. Mohon info detailnya ya. Terima kasih.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              />
                            }
                            className="bg-[#25D366] text-white hover:bg-[#25D366]/90 active:bg-[#25D366]/85">
                            Hubungi via WhatsApp
                            <Icon.whatsapp className="fill-current" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </DialogPopup>
            </Dialog>
          ))}
        </div>
        <div className="mt-16 text-center md:hidden">
          <Button variant="ghost" onClick={() => setShowAll(!showAll)}>
            {showAll ? (
              <React.Fragment>
                <span>Tampilkan Lebih Sedikit</span>
                <ArrowLeft />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span>Lihat Semua Proyek</span>
                <ArrowRight />
              </React.Fragment>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
