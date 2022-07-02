const defaultTheme = require("tailwindcss/defaultTheme");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");
const lineClamp = require("@tailwindcss/line-clamp");
const aspectRatio = require("@tailwindcss/aspect-ratio");

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx,scss}"],
	darkMode: "class",
	theme: {
		extend: {
			transitionTimingFunction: {
				DEFAULT: defaultTheme.transitionTimingFunction.out,
			},
		},
	},
	plugins: [typography, forms, lineClamp, aspectRatio],
};
