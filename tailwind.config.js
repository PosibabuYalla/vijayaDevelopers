/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#68A39F',
          dark: '#4F6F6E',
          sage: '#A3B8BB',
        },
        sand: {
          DEFAULT: '#AA967D',
          beige: '#D8D5C9',
        },
        charcoal: '#514832',
        offwhite: '#F6F7F5',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        label: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.18em',
        widest3: '0.28em',
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        countup: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        kenburns: 'kenburns 18s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
