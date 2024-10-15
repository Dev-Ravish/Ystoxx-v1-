/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'gateway.pinata.cloud',
				port: '',
				pathname: '/ipfs/**',
			},
			,
            {
                protocol: 'https',
                hostname: 'yt3.ggpht.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'yt3.googleusercontent.com',
                port: '',
                pathname: '/**',
            },
		],
	},
};

module.exports = nextConfig;
