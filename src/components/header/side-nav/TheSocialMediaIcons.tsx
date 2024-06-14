import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

const socialMediaLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100086858259064",
    icon: <FaFacebook size={20} />,
  },
  {
    href: "https://www.tiktok.com/@tigerone.store?lang=en",
    icon: <FaTiktok size={20} />,
  },
  {
    href: "https://www.instagram.com/tigerone.store/",
    icon: <FaInstagram size={22} />,
  },
];
export default function TheSocialMediaIcons() {
  const mappedSocialMediaLinks = socialMediaLinks.map((link) => (
    <a href={link.href} target="_blank" key={link.href}>
      {link.icon}
    </a>
  ));
  return <ul className="flex items-center gap-3">{mappedSocialMediaLinks}</ul>;
}
