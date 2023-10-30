/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "pokeapi.co",
			},
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
			},
		],
	},
}

module.exports = nextConfig
