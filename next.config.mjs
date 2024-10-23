/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // webpack(config, options) {
  //   config.resolve.alias.canvas = false
  //   config.plugins.push(
  //     new NextFederationPlugin({
  //       name: 'algodao',
  //       filename: 'static/chunks/remoteEntry.js',
  //       remotes: remotes(options.isServer),
  //       exposes: {
  //         './algodaoApp': './pages/index.js',
  //       },
  //     }),
  //   )
  //   return config
  // },
};

export default nextConfig;
