import { Link } from "react-router";

import Logo from "~/assets/images/brand/logo.png?format=webp";
import { Icon } from "~/components/shared/icon";
import { Button } from "~/components/vorent/button";
import { Heading } from "~/components/vorent/heading";
import { Text, TextLink } from "~/components/vorent/text";
import { site } from "~/config/site";
import { navigations } from "~/data/navigations";
import { pricings } from "~/data/pricings";
import { toSlug } from "~/lib/utils";

const socials = [
  { title: "TikTok", icon: Icon.tiktok, href: "https://www.tiktok.com/@lombokkode" },
  { title: "Instagram", icon: Icon.instagram, href: "https://www.instagram.com/lombokkode" },
];

const prices = pricings.map((pricing) => ({
  title: pricing.title,
  href: `/?layanan=${toSlug(pricing.title)}#pricing`,
}));

export default function Footer() {
  return (
    <footer className="relative pt-32">
      <div className="container">
        <div className="mb-16 grid grid-cols-1 gap-16 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col gap-6 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 select-none">
              <img src={Logo} alt="Logo" className="size-10" />
              <Heading level={2} size="md">
                Lombok <span className="text-primary">Kode</span>
              </Heading>
            </div>
            <Text className="text-muted-foreground">
              Mitra digital terpercaya di Lombok. Membangun website premium yang estetik,
              fungsional, dan berdampak bagi pertumbuhan bisnis Anda.
            </Text>
            <div className="flex items-center gap-2">
              {socials.map((social, index) => (
                <Button
                  key={index}
                  render={<Link to={social.href} target="_blank" rel="noopener noreferrer" />}
                  variant="secondary"
                  size="icon-sm"
                  aria-label={social.title}>
                  <social.icon />
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Heading level={3} size="sm">
              Layanan & Harga
            </Heading>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              {prices.map((price, index) => (
                <li key={index}>
                  <TextLink render={<Link to={price.href} />}>{price.title}</TextLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <Heading level={3} size="sm">
              Menu Utama
            </Heading>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              {navigations.map((navigation, index) => (
                <li key={index}>
                  <TextLink render={<Link to={navigation.link} />}>{navigation.title}</TextLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <Heading level={3} size="sm">
              Hubungi Kami
            </Heading>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li>
                <TextLink render={<Link to={`mailto:${site.contact.email}`} />}>
                  {site.contact.email}
                </TextLink>
              </li>
              <li>
                <TextLink
                  render={
                    <Link
                      to="https://maps.app.goo.gl/rRkMDxnTPKtgKRCk8"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }>
                  Jl. Kesra VIII Perumnas No.99, Tj. Karang Permai, Kec. Sekarbela, Kota Mataram,
                  Nusa Tenggara Barat.
                </TextLink>
              </li>
              <li>
                <TextLink render={<Link to={`tel:${site.contact.phone}`} />}>
                  +62 857-0899-1581
                </TextLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t py-10">
          <Text className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {site.name}. Semua Hak Dilindungi.
          </Text>
        </div>
      </div>
    </footer>
  );
}
