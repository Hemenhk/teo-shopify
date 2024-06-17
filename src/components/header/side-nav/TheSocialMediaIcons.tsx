import { FaTiktok, FaInstagram, FaFacebookF  } from "react-icons/fa";

const socialMediaLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100086858259064",
    icon: <FaFacebookF  size={22} />,
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
    <a href={link.href} key={link.href} target="_blank">
      <div className="icon-container relative group">
        <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gray-500 group-hover:animate-ping-once"></div>
        {link.icon}
      </div>
    </a>
  ));
  return <ul className="flex items-center gap-3">{mappedSocialMediaLinks}</ul>;
}
