module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      fg: 'var(--fg)',
      bg: 'var(--bg)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
