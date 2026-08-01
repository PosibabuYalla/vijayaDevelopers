/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#FF6300',
          dark: '#E65900',
          sage: '#FF6300',
        },
        sand: {
          DEFAULT: '#FF6300',
          hover: '#E65900',
          beige: '#E5EAF1',
        },
        charcoal: '#1B2430',
        offwhite: '#FAFBFC',
        surface: '#F5F7FA',
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
