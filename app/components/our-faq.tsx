import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "~/components/vorent/accordion";
import { Heading } from "~/components/vorent/heading";
import { Small, Text } from "~/components/vorent/text";
import { faqs } from "~/data/faqs";

export default function OurFAQ() {
  return (
    <section className="flex min-h-dvh items-center justify-center py-32">
      <div className="container max-w-3xl">
        <div className="mb-16 flex flex-col gap-2 text-center">
          <Text>
            <Small className="uppercase">FAQ</Small>
          </Text>
          <Heading level={3}>Pertanyaan yang Sering Diajukan</Heading>
        </div>
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionHeader>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
              </AccordionHeader>
              <AccordionPanel>
                <Text className="text-muted-foreground">{faq.answer}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
