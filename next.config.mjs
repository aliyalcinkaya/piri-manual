/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: { cpus: 1 },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
