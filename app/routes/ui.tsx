import { Bell, Heart, MoreHorizontal, Sparkles } from "lucide-react";

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "~/components/vorent/accordion";
import { Button } from "~/components/vorent/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
} from "~/components/vorent/card";
import { Heading } from "~/components/vorent/heading";
import { Small, Text, TextLink } from "~/components/vorent/text";

export default function UI() {
  return (
    <main className="container flex flex-col gap-16 py-16">
      <div className="flex flex-col items-center gap-2">
        <Card className="w-full max-w-xl">
          <CardHeader>
            <CardIcon>
              <Bell />
            </CardIcon>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full max-w-xl">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
              <Button variant="outline" size="icon-sm">
                <MoreHorizontal />
              </Button>
              <Button variant="outline" size="icon-sm">
                <Heart />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Text>Card Content</Text>
          </CardContent>
          <CardFooter>
            <Text>Card Footer</Text>
            <Text>Card Footer</Text>
          </CardFooter>
        </Card>
        <Card className="w-full max-w-xl">
          <CardHeader>
            <CardIcon>
              <Bell />
            </CardIcon>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
              <Button variant="outline" size="icon-sm">
                <MoreHorizontal />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Text>Card Content</Text>
          </CardContent>
          <CardFooter>
            <Text>Card Footer</Text>
          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center">
        <Accordion className="w-full max-w-xl">
          <AccordionItem>
            <AccordionHeader>
              <AccordionTrigger>What is Liverpool Football Club?</AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel>
              <Text className="text-muted-foreground">
                Liverpool Football Club is the biggest football club in the world.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader>
              <AccordionTrigger>How many titles has Liverpool Football Club won?</AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel>
              <Text className="text-muted-foreground">
                Liverpool Football Club has won 20 titles.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader>
              <AccordionTrigger>Will Jurgen Klopp manage Liverpool again?</AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel>
              <Text className="text-muted-foreground">We will be there.</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Text>Phasellus non risus purus. Morbi id nulla ac mi viverra.</Text>
        <TextLink href="/">Phasellus non risus purus. Morbi id nulla ac mi viverra.</TextLink>
        <Text>
          <Small>Phasellus non risus purus. Morbi id nulla ac mi viverra.</Small>
        </Text>
      </div>
      <div>
        <Heading level={6} size="sm">
          Phasellus non risus purus. Morbi id nulla ac mi viverra.
        </Heading>
        <Heading level={5} size="md">
          Phasellus non risus purus. Morbi id nulla ac mi viverra.
        </Heading>
        <Heading level={4} size="lg">
          Phasellus non risus purus. Morbi id nulla ac mi viverra.
        </Heading>
        <Heading level={3} size="xl">
          Phasellus non risus purus. Morbi id nulla ac mi viverra.
        </Heading>
        <Heading level={2} size="xxl">
          Phasellus non risus purus. Morbi id nulla ac mi viverra.
        </Heading>
        <Heading level={1} size="xxxl">
          Phasellus non risus purus. Morbi id nulla ac mi viverra.
        </Heading>
        <Heading level={1} size="sm">
          Phasellus non risus purus. Morbi id nulla ac mi viverra.
        </Heading>
        <Heading level={2} size="md">
          Phasellus non risus purus. Morbi id nulla ac mi viverra.
        </Heading>
        <Heading level={3} size="lg">
          Phasellus non risus purus. Morbi id nulla ac mi viverra.
        </Heading>
        <Heading level={4} size="xl">
          Phasellus non risus purus. Morbi id nulla ac mi viverra.
        </Heading>
        <Heading level={5} size="xxl">
          Phasellus non risus purus. Morbi id nulla ac mi viverra.
        </Heading>
        <Heading level={6} size="xxxl">
          Phasellus non risus purus. Morbi id nulla ac mi viverra.
        </Heading>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Button variant="primary" size="sm">
            Primary
          </Button>
          <Button variant="primary" size="md">
            Primary
          </Button>
          <Button variant="primary" size="lg">
            Primary
          </Button>
          <Button variant="primary" size="icon-sm">
            <Sparkles />
          </Button>
          <Button variant="primary" size="icon-md">
            <Sparkles />
          </Button>
          <Button variant="primary" size="icon-lg">
            <Sparkles />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm">
            Secondary
          </Button>
          <Button variant="secondary" size="md">
            Secondary
          </Button>
          <Button variant="secondary" size="lg">
            Secondary
          </Button>
          <Button variant="secondary" size="icon-sm">
            <Sparkles />
          </Button>
          <Button variant="secondary" size="icon-md">
            <Sparkles />
          </Button>
          <Button variant="secondary" size="icon-lg">
            <Sparkles />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Outline
          </Button>
          <Button variant="outline" size="md">
            Outline
          </Button>
          <Button variant="outline" size="lg">
            Outline
          </Button>
          <Button variant="outline" size="icon-sm">
            <Sparkles />
          </Button>
          <Button variant="outline" size="icon-md">
            <Sparkles />
          </Button>
          <Button variant="outline" size="icon-lg">
            <Sparkles />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Ghost
          </Button>
          <Button variant="ghost" size="md">
            Ghost
          </Button>
          <Button variant="ghost" size="lg">
            Ghost
          </Button>
          <Button variant="ghost" size="icon-sm">
            <Sparkles />
          </Button>
          <Button variant="ghost" size="icon-md">
            <Sparkles />
          </Button>
          <Button variant="ghost" size="icon-lg">
            <Sparkles />
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="primary" size="sm" block>
            Block
          </Button>
          <Button variant="primary" size="md" block>
            Block
          </Button>
          <Button variant="primary" size="lg" block>
            Block
          </Button>
          <Button variant="primary" size="sm" block disabled>
            Disabled
          </Button>
          <Button variant="primary" size="md" block disabled>
            Disabled
          </Button>
          <Button variant="primary" size="lg" block disabled>
            Disabled
          </Button>
        </div>
      </div>
    </main>
  );
}
