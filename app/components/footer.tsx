import { Link } from "react-router";

import { Heading } from "~/components/vorent/heading";
import { Text, TextLink } from "~/components/vorent/text";
import { site } from "~/config/site";
import { navigations } from "~/data/navigations";

const prices = [
  { title: "Halaman Arahan", href: "#" },
  { title: "Profil Perusahaan", href: "#" },
  { title: "Toko Online", href: "#" },
  { title: "Website Wisata & Tour", href: "#" },
  { title: "Jasa Optimasi SEO", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative pt-32">
      <div className="container">
        <div className="mb-16 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 select-none">
              <img src="/logo.png" alt="Logo" className="size-8" />
              <Heading level={5}>
                Lombok <span className="text-primary">Kode</span>
              </Heading>
            </div>
            <Text className="text-muted-foreground">
              Mitra digital terpercaya di Lombok. Membangun website premium yang estetik,
              fungsional, dan berdampak bagi pertumbuhan bisnis Anda.
            </Text>
          </div>
          <div className="flex flex-col gap-6">
            <Heading level={6}>Menu Utama</Heading>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              {navigations.map((navigation, index) => (
                <li key={index}>
                  <TextLink render={<Link to={navigation.link} />}>{navigation.title}</TextLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <Heading level={6}>Layanan & Harga</Heading>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              {prices.map((price, index) => (
                <li key={index}>
                  <TextLink render={<Link to={price.href} />}>{price.title}</TextLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <Heading level={6}>Hubungi Kami</Heading>
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
                  +62 877-6593-6377
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
