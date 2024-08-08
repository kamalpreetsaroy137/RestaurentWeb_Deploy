/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        "-1": "-1rem",
      },
      keyframes: {
        scaleAni: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        scaleShadow: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        // fadeInLeft: {
        //   "0%": { opacity: "0", transform: "translateX(-20px)" },
        //   "100%": { opacity: "1", transform: "translateX(0)" },
        // },
        // fadeInRight: {
        //   "0%": { opacity: "0", transform: "translateX(20px)" },
        //   "100%": { opacity: "1", transform: "translateX(0)" },
        // },
        // fadeInUp: {
        //   "0%": { opacity: "0", transform: "translateY(20px)" },
        //   "100%": { opacity: "1", transform: "translateY(0)" },
        // },
        // fadeInDown: {
        //   "0%": { opacity: "0", transform: "translateY(-20px)" },
        //   "100%": { opacity: "1", transform: "translateY(0)" },
        // },
      },
      animation: {
        scaleShadow: "scaleShadow 2s linear infinite",
        scaleAni: "scaleAni 5s linear infinite",
        // fadeInLeft: "fadeInLeft 2s ease-out",
        // fadeInRight: "fadeInRight 2s ease-out",
        // fadeInUp: "fadeInUp 2s ease-out",
        // fadeInDown: "fadeInDown 2s ease-out",
      },
    },
  },
  plugins: [],
};
