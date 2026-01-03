import { Bell, Heart, MoreHorizontal, Sparkles } from "lucide-react";

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "~/components/vorent/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/vorent/avatar";
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
import {
  Dialog,
  DialogAction,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "~/components/vorent/dialog";
import { Heading } from "~/components/vorent/heading";
import { ScrollArea } from "~/components/vorent/scroll-area";
import { Separator } from "~/components/vorent/separator";
import { Small, Text, TextLink } from "~/components/vorent/text";

export default function UI() {
  return (
    <main className="container flex flex-col gap-16 py-16">
      <div className="flex justify-center gap-4">
        <Dialog>
          <DialogTrigger>Nested</DialogTrigger>
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>Description</DialogDescription>
              <DialogAction>
                <DialogClose>Close</DialogClose>
              </DialogAction>
            </DialogHeader>
            <DialogContent>
              <Text>Content</Text>
            </DialogContent>
            <DialogFooter>
              <Dialog>
                <DialogTrigger>More</DialogTrigger>
                <DialogPopup>
                  <DialogHeader>
                    <DialogTitle>Title</DialogTitle>
                    <DialogDescription>Description</DialogDescription>
                    <DialogAction>
                      <DialogClose>Close</DialogClose>
                    </DialogAction>
                  </DialogHeader>
                  <DialogContent>
                    <Text>Content</Text>
                  </DialogContent>
                  <DialogFooter>
                    <Text>Footer</Text>
                  </DialogFooter>
                </DialogPopup>
              </Dialog>
            </DialogFooter>
          </DialogPopup>
        </Dialog>
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>Description</DialogDescription>
              <DialogAction>
                <DialogClose>Close</DialogClose>
              </DialogAction>
            </DialogHeader>
            <DialogContent>
              <Text>Content</Text>
            </DialogContent>
            <DialogFooter>
              <Text>Footer</Text>
            </DialogFooter>
          </DialogPopup>
        </Dialog>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Avatar size="lg">
          <AvatarImage src="https://github.com/fiquellcarter.png" alt="@fiquellcarter" />
          <AvatarFallback>FI</AvatarFallback>
        </Avatar>
        <Separator orientation="vertical" />
        <Avatar size="sm">
          <AvatarImage src="https://github.com/0xk4ll.png" alt="@0xk4ll" />
          <AvatarFallback>0X</AvatarFallback>
        </Avatar>
        <Separator orientation="vertical" />
        <div className="flex -space-x-2">
          <Avatar>LK</Avatar>
          <Avatar className="bg-blue-500 text-white">DO</Avatar>
          <Avatar className="bg-red-500 text-white">RE</Avatar>
          <Avatar className="bg-orange-500 text-white">MI</Avatar>
        </div>
        <Separator orientation="vertical" />
        <div className="flex -space-x-2">
          <Avatar>
            <AvatarImage src="https://github.com/ifyyn.png" alt="@ifyyn" />
            <AvatarFallback>IF</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/izmahaerill.png" alt="@izmahaerill" />
            <AvatarFallback>IZ</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/fiquellcarter.png" alt="@fiquellcarter" />
            <AvatarFallback>FI</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/0xk4ll.png" alt="@0xk4ll" />
            <AvatarFallback>0X</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <ScrollArea className="size-96 rounded-md border">
          <div className="p-4">
            <ul className="grid grid-cols-[repeat(10,5rem)] grid-rows-[repeat(10,5rem)] gap-4">
              {Array.from({ length: 100 }, (_, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
        <ScrollArea scrollbar={false} className="h-52 w-full rounded-md border">
          <div className="flex flex-col gap-4 p-4">
            <Text>
              Biocentrism is a philosophical worldview that places biological life at the center of
              its value system, asserting that all living beings have inherent worth and moral
              standing. Unlike anthropocentrism, which prioritizes human interests and regards the
              environment and non-human life mainly in terms of their utility to humans, biocentrism
              recognizes the intrinsic value of all living organisms, from the smallest bacterium to
              the largest mammal.
            </Text>
            <Text>
              The roots of biocentrism are found in various ancient and indigenous traditions that
              hold the natural world in deep reverence. In modern philosophy, biocentrism emerged as
              an environmental ethic in response to growing concerns about biodiversity loss,
              climate change, and the destructive impacts of human activity on ecosystems.
            </Text>
            <Text>
              Key to biocentrism is the idea that humans are not separate from or superior to other
              forms of life, but rather part of a complex, interconnected web. This perspective
              argues for moral consideration and respect for all living beings, not just humans.
              Ethical implications of biocentrism challenge us to rethink practices such as
              deforestation, industrial agriculture, and animal exploitation, urging policies and
              actions that protect the welfare and habitats of all life forms.
            </Text>
            <Text>
              Critics of biocentrism contend that it may be impractical to grant equal moral status
              to all living things, especially when the interests of different organisms conflict.
              However, proponents argue that shifting toward a biocentric mindset is necessary for
              sustainability and the long-term health of the planet.
            </Text>
            <Text>
              In conclusion, biocentrism offers a compelling alternative to traditional
              human-centered ethics, encouraging a deeper appreciation and responsibility for the
              living world. By embracing biocentric values, we move toward a more just and
              ecologically balanced future, where the flourishing of all life is our collective
              concern.
            </Text>
          </div>
        </ScrollArea>
        <Separator />
        <ScrollArea className="h-52 w-full rounded-md border">
          <div className="flex flex-col gap-4 p-4">
            <Text>
              Biocentrism is a philosophical worldview that places biological life at the center of
              its value system, asserting that all living beings have inherent worth and moral
              standing. Unlike anthropocentrism, which prioritizes human interests and regards the
              environment and non-human life mainly in terms of their utility to humans, biocentrism
              recognizes the intrinsic value of all living organisms, from the smallest bacterium to
              the largest mammal.
            </Text>
            <Text>
              The roots of biocentrism are found in various ancient and indigenous traditions that
              hold the natural world in deep reverence. In modern philosophy, biocentrism emerged as
              an environmental ethic in response to growing concerns about biodiversity loss,
              climate change, and the destructive impacts of human activity on ecosystems.
            </Text>
            <Text>
              Key to biocentrism is the idea that humans are not separate from or superior to other
              forms of life, but rather part of a complex, interconnected web. This perspective
              argues for moral consideration and respect for all living beings, not just humans.
              Ethical implications of biocentrism challenge us to rethink practices such as
              deforestation, industrial agriculture, and animal exploitation, urging policies and
              actions that protect the welfare and habitats of all life forms.
            </Text>
            <Text>
              Critics of biocentrism contend that it may be impractical to grant equal moral status
              to all living things, especially when the interests of different organisms conflict.
              However, proponents argue that shifting toward a biocentric mindset is necessary for
              sustainability and the long-term health of the planet.
            </Text>
            <Text>
              In conclusion, biocentrism offers a compelling alternative to traditional
              human-centered ethics, encouraging a deeper appreciation and responsibility for the
              living world. By embracing biocentric values, we move toward a more just and
              ecologically balanced future, where the flourishing of all life is our collective
              concern.
            </Text>
          </div>
        </ScrollArea>
      </div>
      <div className="flex flex-col items-center gap-4">
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
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-4">
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
        <div className="flex flex-col gap-4">
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
