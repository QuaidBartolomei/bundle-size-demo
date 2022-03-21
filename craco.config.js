const StatsWriterPlugin =
  require('webpack-stats-plugin').StatsWriterPlugin

module.exports = {
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
