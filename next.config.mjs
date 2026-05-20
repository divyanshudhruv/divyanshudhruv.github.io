/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  allowedDevOrigins: ['10.141.113.207'],
};

export default nextConfig;
