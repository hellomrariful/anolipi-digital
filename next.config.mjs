/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: [
      'i.postimg.cc',
      'flaticon.com',
      'cdn-icons-png.flaticon.com',
      'i.ibb.co'
    ],
  },
};

export default nextConfig;
