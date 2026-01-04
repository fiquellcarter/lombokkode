import { motion } from "framer-motion";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { Link } from "react-router";

import { Button } from "~/components/vorent/button";
import { Heading } from "~/components/vorent/heading";
import { Small, Text } from "~/components/vorent/text";

export default function Hero() {
  return (
    <section className="flex min-h-dvh items-center justify-center overflow-hidden py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}>
            <div className="mb-2 inline-block rounded-sm border border-border bg-primary/5 px-2 py-1">
              <Small className="uppercase">Mitra Digital Terpercaya Lombok</Small>
            </div>
            <Heading className="mb-4 leading-tight font-bold">
              <span>Bangun Website Premium yang</span>
              <br />
              <span className="bg-linear-to-r from-primary to-[#e65a3f] bg-clip-text text-transparent">
                Menguatkan Identitas Bisnis Anda
              </span>
            </Heading>
            <Text className="mb-6">
              Dari bisnis hingga personal branding — kami membantu Anda tampil percaya diri di dunia
              digital dengan website yang elegan, cepat, dan mudah dikelola.
            </Text>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:justify-start">
              <Button render={<Link to="#contact" />} size="lg">
                Konsultasi Gratis Sekarang
                <MessageCircleMore />
              </Button>
              <Button render={<Link to="#portfolio" />} variant="secondary" size="lg">
                Lihat Portofolio Kami
                <ArrowRight />
              </Button>
            </div>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ delay: 0.2, duration: 0.8 }}>
            <div className="group relative aspect-square overflow-hidden rounded-md">
              <div className="absolute inset-0 z-10 bg-linear-to-t from-primary/20 to-transparent"></div>
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174"
                alt="Modern Workspace"
                className="size-full object-cover transition-transform duration-400 ease-in-out group-hover:scale-105"
              />
              <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute inset-x-8 bottom-8 z-20 rounded-md border border-border bg-card/80 p-6 text-card-foreground backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.8, y: 25 }}
                transition={{ delay: 0.4, duration: 0.8 }}>
                <div className="mb-2 flex items-end justify-between">
                  <div>
                    <Small className="mb-1">Studi Kasus Terbaru</Small>
                    <Heading level={4}>Gili Adventures</Heading>
                  </div>
                  <Heading level={2} className="text-primary">
                    +300%
                  </Heading>
                </div>
                <div className="flex items-center justify-between gap-2 text-sm">
                  <Text>Leads Booking</Text>
                  <Text>Kenaikan Trafik</Text>
                </div>
              </motion.div>
            </div>
            <div className="absolute -top-10 -right-10 -z-10 size-60 rounded-full bg-primary/30 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 -z-10 size-60 rounded-full bg-primary/30 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
