import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

import Logo from "~/assets/logo.png?format=webp";
import { Button } from "~/components/vorent/button";
import { Heading } from "~/components/vorent/heading";
import { TextLink } from "~/components/vorent/text";
import { navigations } from "~/data/navigations";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 bg-background">
      <div className="container">
        <nav className="flex min-h-16 w-full items-center py-4">
          <div className="inline-flex w-1/2 items-center justify-start">
            <div className="flex items-center gap-2 select-none">
              <img src={Logo} alt="Logo" className="size-8" />
              <Heading level={5}>
                Lombok <span className="text-primary">Kode</span>
              </Heading>
            </div>
          </div>
          <div className="inline-flex w-1/2 items-center justify-end">
            <div className="hidden md:flex md:items-center md:gap-8">
              {navigations.map((navigation, index) => (
                <TextLink key={index} render={<Link to={navigation.link} />}>
                  {navigation.title}
                </TextLink>
              ))}
              <Button render={<Link to="#cta" />}>Konsultasi</Button>
            </div>
            <div className="md:hidden">
              <Button
                variant="secondary"
                size="icon-md"
                aria-label="Toggle Menu"
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </nav>
        {isOpen && (
          <div className="absolute inset-x-0 top-full flex flex-col gap-8 bg-background p-4 md:hidden">
            {navigations.map((navigation, index) => (
              <TextLink
                key={index}
                render={<Link to={navigation.link} />}
                onClick={() => setIsOpen(!isOpen)}>
                {navigation.title}
              </TextLink>
            ))}
            <Button render={<Link to="#cta" />} onClick={() => setIsOpen(!isOpen)}>
              Konsultasi
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
