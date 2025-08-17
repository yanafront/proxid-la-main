import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'neural-blue': '#0066FF',
        'quantum-purple': '#8B5CF6',
        'quantum-gray': '#F5F7FA',
        'glass-white': 'rgba(255, 255, 255, 0.25)',
        'glass-dark': 'rgba(0, 0, 0, 0.1)',
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        'inter': ['Inter', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(2deg)' 
          }
        },
        'pulse-soft': {
          '0%, 100%': { 
            transform: 'scale(1) translateZ(0)', 
            boxShadow: '0 0 0 rgba(102, 102, 255, 0)' 
          },
          '50%': { 
            transform: 'scale(1.05) translateZ(0)', 
            boxShadow: '0 0 40px rgba(102, 102, 255, 0.3)' 
          }
        },
        'swipe-auto': {
          '0%': { 
            transform: 'translateX(0) rotateY(0deg) rotateZ(0deg)', 
            opacity: '1' 
          },
          '25%': { 
            transform: 'translateX(100px) rotateY(-15deg) rotateZ(5deg)', 
            opacity: '0.8' 
          },
          '50%': { 
            transform: 'translateX(300px) rotateY(-25deg) rotateZ(10deg)', 
            opacity: '0' 
          },
          '51%': { 
            transform: 'translateX(-300px) rotateY(25deg) rotateZ(-10deg)', 
            opacity: '0' 
          },
          '75%': { 
            transform: 'translateX(-100px) rotateY(15deg) rotateZ(-5deg)', 
            opacity: '0.8' 
          },
          '100%': { 
            transform: 'translateX(0) rotateY(0deg) rotateZ(0deg)', 
            opacity: '1' 
          }
        },
        'particle-burst': {
          '0%': { 
            transform: 'scale(0.8) rotate(0deg)', 
            opacity: '0' 
          },
          '50%': { 
            transform: 'scale(1.2) rotate(180deg)', 
            opacity: '1' 
          },
          '100%': { 
            transform: 'scale(1.5) rotate(360deg)', 
            opacity: '0' 
          }
        },
        'holographic': {
          '0%': { 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            backgroundPosition: '100% 50%' 
          },
          '100%': { 
            backgroundPosition: '0% 50%' 
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'swipe-auto': 'swipe-auto 4s ease-in-out infinite',
        'particle-burst': 'particle-burst 0.8s ease-out',
        'holographic': 'holographic 2s linear infinite'
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
