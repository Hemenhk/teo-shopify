/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.shopify.com", "res.cloudinary.com"],
    formats: ["image/webp"],
  },
};

export default nextConfig;
