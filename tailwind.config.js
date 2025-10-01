/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'huge': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
        'xx-large': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        'x-large': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'large': ['1.375rem', { lineHeight: '1.4', fontWeight: '600' }],
        'base': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
        'micro': ['0.625rem', { lineHeight: '1.3', fontWeight: '400' }],
        'links': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'title-footer': ['0.625rem', { lineHeight: '1.3', fontWeight: '700' }],
      },

      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
      },

      colors: {
        primary: '#0044A9',
        secondary: '#002F73',
        accent: '#006CCE',
        text: '#2B2B2A',
        stroke: '#3C3C3B',
        background: {
          primary: '#FFFFFF',
          light: '#F4F4F4',
        },        
        border: '#0000001A',
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },

      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
