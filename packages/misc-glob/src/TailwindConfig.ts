import type { Config } from 'tailwindcss';

export const tailwindTheme = {
  theme: {
    extend: {
      colors: {
        primary: '#d66b08',
        secondary: '#7ae27a',
        accent: '#fc4b8f',
        neutral: '#1a1b28',
        'base-100': '#3a4d5f',
        info: '#356282',
        success: '#0f853e',
        warning: '#f6d013',
        error: '#ed2662',
      },
    },
  },
} satisfies Config['theme'];
