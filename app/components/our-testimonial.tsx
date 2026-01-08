import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/vorent/avatar";
import { Heading } from "~/components/vorent/heading";
import {
  Testimoni,
  TestimoniContent,
  TestimoniHeader,
  TestimoniIcon,
  TestimoniMedia,
  TestimoniMeta,
  TestimoniTitle,
} from "~/components/vorent/testimoni";
import { Small, Text } from "~/components/vorent/text";
import { testimonials } from "~/data/testimonials";

export default function OurTestimonial() {
  return (
    <section className="flex min-h-dvh items-center justify-center bg-card py-32 text-card-foreground">
      <div className="container">
        <div className="mb-16 flex flex-col gap-2 text-center">
          <Text>
            <Small className="uppercase">Testimoni</Small>
          </Text>
          <Heading level={3}>Apa Kata Klien Kami</Heading>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}>
              <Testimoni className="size-full bg-background text-foreground transition-colors duration-200 ease-in-out hover:bg-card hover:text-card-foreground">
                <TestimoniIcon>
                  <Quote className="size-10" />
                </TestimoniIcon>
                <TestimoniHeader>
                  <TestimoniMedia>
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </TestimoniMedia>
                  <TestimoniTitle>{testimonial.name}</TestimoniTitle>
                  <TestimoniMeta>{testimonial.role}</TestimoniMeta>
                </TestimoniHeader>
                <TestimoniContent>
                  <Text className="italic">{testimonial.content}</Text>
                </TestimoniContent>
              </Testimoni>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
