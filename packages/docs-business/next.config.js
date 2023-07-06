/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode : true,
	swcMinify       : true,
	basePath        : '/components',
	assetPrefix     : '/components',
	webpack(config) {
		const newConfig = { ...config };
		newConfig.module.rules.push({
			test : /\.svg$/i,
			use  : [{ loader: '@svgr/webpack' }],
		});
		return config;
	},
};
