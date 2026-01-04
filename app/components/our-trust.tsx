import { motion } from "framer-motion";
import { CheckCircle2, Clock, ShieldCheck, Star, Users } from "lucide-react";

import { Card, CardDescription, CardHeader, CardIcon, CardTitle } from "~/components/vorent/card";
import { Heading } from "~/components/vorent/heading";
import { Small, Text } from "~/components/vorent/text";

const stats = [
  { icon: Users, title: "49+ Proyek Berhasil", description: "Digunakan UMKM hingga Korporat" },
  { icon: Star, title: "Ulasan Bintang 5", description: "Kepuasan klien adalah prioritas" },
  { icon: Clock, title: "Tepat Waktu", description: "Selesai sesuai jadwal" },
  { icon: ShieldCheck, title: "Garansi & Dukungan", description: "Layanan purna jual responsif" },
];

const features = [
  "Copywriting & Konsultasi Gratis",
  "Kualitas Standar Internasional",
  "Paket Lengkap: desain, dev, domain, server",
  "Dukungan Berkelanjutan: garansi error",
  "Pendekatan Solutif & Efektif",
  "Harga Transparan Tanpa Biaya Tersembunyi",
];

export default function OurTrust() {
  return (
    <section
      id="our-trust"
      className="flex min-h-dvh items-center justify-center overflow-hidden py-32">
      <div className="container">
        <div className="mb-32 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}>
              <Card className="size-full text-center">
                <CardHeader>
                  <CardIcon className="mx-auto">
                    <stat.icon />
                  </CardIcon>
                  <CardTitle>{stat.title}</CardTitle>
                  <CardDescription>{stat.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className="relative aspect-video overflow-hidden rounded-md">
              <div className="absolute inset-0 z-10 bg-primary/10 mix-blend-multiply"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Team Meeting Lombok Kode"
                className="size-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <Text className="mb-4 uppercase">
              <Small>Kenapa Memilih Kami?</Small>
            </Text>
            <Heading level={2} className="mb-8">
              Lebih dari Sekadar Pembuatan Website
            </Heading>
            <Text className="mb-4">
              Kami tidak hanya membuat website, tetapi memastikan website Anda membantu mencapai
              tujuan bisnis dan konversi.
            </Text>
            <ul className="flex flex-col gap-2">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}>
                  <Text className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    {feature}
                  </Text>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
