/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
      'landing-bg-image' : "url('https://images.unsplash.com/photo-1487376480913-24046456a727?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      },
      fontFamily: {
        sofadi: ['Sofadi One', 'cursive'], 
        default: ['Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
}