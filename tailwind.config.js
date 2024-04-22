/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["home.hbs", "partials/email-subscription.hbs"],
  theme: {
    extend: {
      colors: {
        beige: "#FCF3E1",
      },
      boxShadow: {
        light: "0px 100px 80px 0px rgba(0, 0, 0, 0.03), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.02), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.02), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.01), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.01), 0 0 0 1px rgba(0,0,100,0.06);",
        juicer:
          "0.3px 0.5px 0.7px hsl(48deg 30% 60% / 0.34), 1.5px 2.9px 3.7px -0.4px hsl(48deg 30% 60% / 0.34), 2.7px 5.4px 6.8px -0.7px hsl(48deg 30% 60% / 0.34), 4.5px 8.9px 11.2px -1.1px hsl(48deg 30% 60% / 0.34), 7.1px 14.3px 18px -1.4px hsl(48deg 30% 60% / 0.34), 11.2px 22.3px 28.1px -1.8px hsl(48deg 30% 60% / 0.34), 17px 33.9px 42.7px -2.1px hsl(48deg 30% 60% / 0.34), 25px 50px 62.9px -2.5px hsl(48deg 30% 60% / 0.34);",
        juicy:
          "0.3px 0.5px 0.7px hsl(48deg 30% 60% / 0.36), 0.8px 1.6px 2px -0.8px hsl(48deg 30% 60% / 0.36), 2.1px 4.1px 5.2px -1.7px hsl(48deg 30% 60% / 0.36), 5px 10px 12.6px -2.5px hsl(48deg 30% 60% / 0.36);",
        ok: "0px 0.2px 0.2px hsl(48deg 30% 60% / 0.34), 0px 0.9px 1px -0.4px hsl(48deg 30% 60% / 0.34), -0.1px 1.7px 1.9px -0.7px hsl(48deg 30% 60% / 0.34), -0.2px 2.8px 3.2px -1.1px hsl(48deg 30% 60% / 0.34), -0.2px 4.4px 5px -1.4px hsl(48deg 30% 60% / 0.34), -0.4px 6.9px 7.8px -1.8px hsl(48deg 30% 60% / 0.34), -0.6px 10.5px 11.8px -2.1px hsl(48deg 30% 60% / 0.34),-0.8px 15.5px 17.5px -2.5px hsl(48deg 30% 60% / 0.34);",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        "sans-serif": [
          '"Inter Display"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
          {
            fontFeatureSettings: '"cv11", "ss01", "ss03", "tnum"'
          }
        ],
        serif: [
          '"Ivar Text"',
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};