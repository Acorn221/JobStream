const { copy } = require('esbuild-plugin-copy');


module.exports = [
	// The prisma schema needs to be included in the dist folder
	copy({
		resolveFrom: 'out',
		copyOnStart: true,
		once: false,
		assets: {
			from: ['../../packages/database/prisma/schema.prisma'],
			to: './',
		},
		watch: false,
	}),
	copy({
		resolveFrom: 'out',
		copyOnStart: true,
		once: false,
		assets: {
			from: ['../../packages/database/node_modules/.prisma/client/libquery_engine-rhel-openssl-1.0.x.so.node'],
			to: './',
		},
		watch: false,
	})
];
