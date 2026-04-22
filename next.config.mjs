/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:"export",
 
  reactCompiler: true,

  // ✅ static export (creates /out folder)


  images: {
    unoptimized: true, // ✅ required for export
  },
};

export default nextConfig;