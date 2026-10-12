/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Zilla Slab', 'Georgia', 'serif'],
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Acento principal: teal de manómetro de carga de gas refrigerante.
        ice: {
          DEFAULT: '#0f8a7a',
          light: '#6ec0ad',
          dark: '#0b6a5d',
          50: '#eaf6f3',
          100: '#d1ece5',
          200: '#a3d9cc',
          300: '#6ec0ad',
          400: '#0f8a7a',
          500: '#0b6a5d',
          600: '#0a5c52',
          700: '#0a4941',
          800: '#083a34',
          900: '#06302b',
        },
        // Tinta casi negra: texto y paneles oscuros tipo chapa/ficha técnica.
        dark: {
          DEFAULT: '#1b1d17',
          2: '#262820',
          3: '#30332a',
        },
        // Gris neutro cálido (chapa/galvanizado), reemplaza el gris azulado anterior.
        cool: {
          50: '#f6f6f2',
          100: '#ecece5',
          200: '#d8d8cd',
          300: '#b7b7a8',
          800: '#5c5c4e',
          900: '#33332a',
        },
        // Color funcional reservado (etiqueta "Destacado"), como el amarillo de señalización.
        signal: {
          DEFAULT: '#d99a2b',
          light: '#f0b955',
          dark: '#b57c1c',
          50: '#fdf6e9',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
};
