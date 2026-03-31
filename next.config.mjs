/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    domains: ["picsum.photos"], // ✅ allow external images
  },
};

export default nextConfig;