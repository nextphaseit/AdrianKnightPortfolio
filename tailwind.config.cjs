/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#475569',
        tertiary: '#1e293b',
        'black-100': '#0f172a',
        'black-200': '#1e293b',
        'white-100': '#f8fafc',
        flashWhite: '#f1f5f9',
        platinum: '#e2e8f0',
        platinumLight: '#f8fafc',
        timberWolf: '#cbd5e1',
        taupe: '#94a3b8',
        silver: '#e2e8f0',
        dim: '#64748b',
        battleGray: '#475569',
        french: '#94a3b8',
        night: '#0f172a',
        jet: '#1e293b',
        jetLight: '#334155',
        jetGray: '#64748b',
        richBlack: '#1e293b',
        eerieBlack: '#0f172a',
        onyx: '#475569',
        // NextPhase IT accent colors
        cyan: '#06b6d4',
        cyanLight: '#67e8f9',
        cyanDark: '#0891b2',
        blue: '#3b82f6',
        blueLight: '#60a5fa',
        blueDark: '#1d4ed8',
      },
      boxShadow: {
        card: '0px 35px 120px -15px rgba(6,182,212,0.3)',
        cardLight: '0px 19px 38px rgba(59,130,246,0.1), 0px 15px 12px rgba(6,182,212,0.1)',
      },
      screens: {
        xs: '450px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      backgroundImage: {
        about:
          'linear-gradient(165deg, rgba(15,23,42,1) 100%, rgba(71,85,105,1) 100%)',
        experience:
          "linear-gradient(135deg, rgba(15,23,42,0.9) 60%, rgba(30,41,59,0.8) 100%),url('/src/assets/backgrounds/white-abstract.png')",
        experienceLight:
          'linear-gradient(137deg, rgba(15,23,42,0.8) 60%, rgba(30,41,59,0.9) 60%)',
        hero: 'linear-gradient(135deg, rgba(15,23,42,0.95) 60%, rgba(30,41,59,0.9) 60%)',
        'hero-mobile':
          'linear-gradient(137deg, rgba(15,23,42,0.95) 60%, rgba(30,41,59,1) 60%)',
        tech: "linear-gradient(165deg, rgba(15,23,42,0.9) 100%, rgba(71,85,105,0.8) 100%), url('/src/assets/backgrounds/nairobi.png')",
      },
      fontFamily: {
        arenq: ['Arenq'],
        beckman: ['Beckman'],
        mova: ['Mova'],
        overcameBold: ['Overcame Bold'],
        overcameOutline: ['Overcame Outline'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
