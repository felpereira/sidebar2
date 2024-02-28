module.exports = {
  plugins: ["@stylexjs"],
  rules: {
    "@stylexjs/valid-styles": ["error", { ...options }],

  },
  extends: ["next/core-web-vitals"]
};
