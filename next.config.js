/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true
    },
    swcMinify: true,
    output: 'standalone'
};

module.exports = nextConfig;
