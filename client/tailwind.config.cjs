/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        Baloo: 'Baloo\\ 2',
        Inter: 'Inter'
      },
      colors: {
        'blue-accent-1': '#242F9B',
        'blue-accent-2': '#646FD4',
        'blue-accent-3': '#120091',
        'gray-accent-1': '#0000002B',
        'gray-accent-2': '#F4F5F3',
        dark: '#263238',
        'muted-accent-1': '#8D92A3',
        'muted-accent-2': '#D9D9D9',
        'green-accent-1': '#24C250',
        'green-accent-2': '#24C2504A',
        'green-accent-3': '#249B45',
        'green-accent-4': '#043730',
        'orange-accent-1': '#D39A0B',
        'orange-accent-2': '#FCB773',
        'orange-accent-3': '#FBB977',
        'red-accent-1': '#C91717',
        'red-accent-2': '#E75845',
        'dark-accent-1': '#111821',
        'dark-accent-2': '#3E3E3E',
        'dark-accent-3': '#20303D',
        'cream-accent-1': '#E4E0DA',
        'cream-accent-2': '#F4F1EC',
        'yellow-accent-1': '#F9A320',
      }
    }
  },
  plugins: []
}
