/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'gateway.pinata.cloud',
				pathname: '/ipfs/**',
			},
            {
                protocol: 'https',
                hostname: 'yt3.ggpht.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'yt3.googleusercontent.com',
                pathname: '/**',
            },
		],
	},
};

module.exports = nextConfig;
