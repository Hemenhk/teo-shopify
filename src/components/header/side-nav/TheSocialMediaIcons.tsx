"use client";
import { useAdminValues } from "@/hooks/useQueryHooks";
import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function TheSocialMediaIcons() {
  const { data: socialMediaData } = useAdminValues();

  const socialMediaLinks = [
    {
      href: socialMediaData?.facebook || "",
      icon: <FaFacebookF size={22} />,
    },
    {
      href: socialMediaData?.tiktok || "",
      icon: <FaTiktok size={20} />,
    },
    {
      href: socialMediaData?.instagram || "",
      icon: <FaInstagram size={22} />,
    },
  ];
  const mappedSocialMediaLinks = socialMediaLinks.map((link, index) =>
    link.href ? (
      <a href={link.href} key={index} target="_blank" rel="noopener noreferrer">
        <div className="icon-container relative group">
          <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gray-500 group-hover:animate-ping-once"></div>
          {link.icon}
        </div>
      </a>
    ) : null
  );
  return <ul className="flex items-center gap-3">{mappedSocialMediaLinks}</ul>;
}
