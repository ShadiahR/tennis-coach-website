module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.avif$/i,
          type: "asset/resource",
        },
      ],
    },
  },
};
