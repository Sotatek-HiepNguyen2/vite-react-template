module.exports = {
  semi: false,
  singleQuote: true,
  bracketSameLine: false,
  printWidth: 80,
  overrides: [
    {
      files: ["*.yml"],
      options: {
        singleQuote: false,
      },
    },
  ],
}
