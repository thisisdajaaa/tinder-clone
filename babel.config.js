module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@app/components": "./src/components",
            "@app/hooks": "./src/hooks",
            "@app/navigators": "./src/navigators",
            "@app/screens": "./src/screens",
            "@app/providers": "./src/providers",
            "@app/config": "./src/config",
          },
        },
      ],
    ],
  };
};
