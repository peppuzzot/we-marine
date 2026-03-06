/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./assets/js/**/*.js",
  ],
  prefix: "tw-",
  corePlugins: {
    preflight: false,
  },
};
