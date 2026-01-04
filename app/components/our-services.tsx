import { motion } from "framer-motion";

import { Card, CardDescription, CardHeader, CardIcon, CardTitle } from "~/components/vorent/card";
import { Heading } from "~/components/vorent/heading";
import { Small, Text } from "~/components/vorent/text";
import { services } from "~/data/services";

export default function OurServices() {
  return (
    <section
      id="services"
      className="flex min-h-dvh items-center justify-center bg-card py-32 text-card-foreground">
      <div className="container">
        <div className="mx-auto mb-32 grid max-w-6xl grid-cols-1 gap-8 text-center lg:grid-cols-2 lg:text-left">
          <div className="flex flex-col gap-2">
            <Small className="uppercase">Tentang Kami</Small>
            <Heading level={2}>Partner Digital Anda di Lombok</Heading>
          </div>
          <div className="flex flex-col gap-4">
            <Text>
              Lombok Kode adalah tim kreatif dan teknis berbasis di Lombok dengan visi global. Kami
              merancang pengalaman digital yang sederhana, menyenangkan, dan berdampak nyata bagi
              pertumbuhan bisnis Anda.
            </Text>
            <Text>
              Kami melayani pemilik bisnis, agensi travel, hingga mahasiswa yang ingin membangun
              portofolio profesional.
            </Text>
          </div>
        </div>
        <div className="mb-16 flex flex-col gap-4 text-center">
          <Heading level={3}>Keunggulan Kami</Heading>
          <Text>Mengapa ratusan klien mempercayakan website mereka kepada kami?</Text>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}>
              <Card className="bg-background text-foreground transition-colors duration-200 ease-in-out hover:bg-card hover:text-card-foreground">
                <CardHeader>
                  <CardIcon>
                    <service.icon />
                  </CardIcon>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
