// craco.config.js
const CracoSwcPlugin = require('craco-swc');
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;

module.exports = {
  plugins: [{ plugin: CracoSwcPlugin }],
  webpack: {
    plugins: [
      new StatsWriterPlugin({
        filename: 'bundle-stats.json', // Default
        stats: {
          assets: true,
          entrypoints: true,
          chunks: true,
          modules: true,
        },
      }),
    ],
  },
};
