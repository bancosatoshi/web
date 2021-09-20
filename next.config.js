const withTM = require("next-transpile-modules")([
  "@solana/wallet-adapter-react",
  "@solana/wallet-adapter-base",
  "@solana/wallet-adapter-wallets",
  "@solana/wallet-adapter-bitpie",
  "@solana/wallet-adapter-blocto",
  "@blocto/sdk",
]);

const { i18n } = require("./next-i18next.config");

module.exports = withTM({
  webpack5: false, // you want to keep using Webpack 4
  i18n,
});
