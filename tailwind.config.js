/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
        
            "primary": "#ae81f8",
                    
            "secondary": "#c62127",
                    
            "accent": "#96d5f7",
                    
            "neutral": "#44403c",
                    
            "base-100": "#ffffff",
                    
            "info": "#fda4af",
                    
            "success": "#18b47b",
                    
            "warning": "#f0d447",
                    
            "error": "#f41042",
        },
      },
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'main' : 'Josefin Sans'
      }
    },
  },
  plugins: [require("daisyui")],
}
