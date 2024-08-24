/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "apivelhochico.alanvasconcelos.net",
                port: "",
                pathname: "/wp-content/uploads/**",
            },
        ],
    },
};

export default nextConfig;
