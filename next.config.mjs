/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // ✅ static export (creates /out folder)


  images: {
    unoptimized: true, // ✅ required for export
  },
};

export default nextConfig;