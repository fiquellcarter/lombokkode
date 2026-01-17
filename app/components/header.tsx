import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

import Logo from "~/assets/images/brand/logo.png?format=webp";
import { Button } from "~/components/vorent/button";
import { Heading } from "~/components/vorent/heading";
import { TextLink } from "~/components/vorent/text";
import { navigations } from "~/data/navigations";
import { cn } from "~/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background transition-[border] duration-200 ease-in-out",
        isScrolled ? "border-b" : "border-b-transparent"
      )}>
      <div className="container">
        <nav className="flex min-h-16 w-full items-center py-4">
          <div className="inline-flex w-1/2 items-center justify-start">
            <Link to="/">
              <div className="flex items-center gap-2 select-none">
                <img src={Logo} alt="Logo" className="size-8" />
                <Heading level={2} size="md">
                  Lombok <span className="text-primary">Kode</span>
                </Heading>
              </div>
            </Link>
          </div>
          <div className="inline-flex w-1/2 items-center justify-end">
            <div className="hidden md:flex md:items-center md:gap-16">
              {navigations.map((navigation, index) => (
                <TextLink
                  key={index}
                  render={<Link to={navigation.link} />}
                  className="font-medium">
                  {navigation.title}
                </TextLink>
              ))}
              <Button render={<Link to="#contact" />}>Konsultasi</Button>
            </div>
            <div className="md:hidden">
              <Button
                variant="secondary"
                size="icon-sm"
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
            <Button render={<Link to="#contact" />} onClick={() => setIsOpen(!isOpen)}>
              Konsultasi
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
