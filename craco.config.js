const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
  webpack: {
    configure: (config) => {
      if (!config.plugins) {
        config.plugins = [];
      }

      config.plugins.unshift(
        new ModuleFederationPlugin({
          name: "search",
          filename: "remoteEntry.js",
          remotes: {
            // web: "web@http://localhost:5000/assets/remoteEntry.js",
          },
          exposes: {
            "./FeaturedProducts":
              "./src/components/shared/FeaturedProducts.tsx",
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        })
      );

      return config;
    },
  },
};
