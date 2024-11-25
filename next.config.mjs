/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
                port: '',
                pathname: '/image/**'
            },
            {
                protocol: 'https',
                hostname: 'color.femboys.rent',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
