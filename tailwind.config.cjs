module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#374151',
          700: '#111827',
          gold: '#c9a34a'
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
}
