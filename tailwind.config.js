module.exports = {
  content: [
    './content/**/*.md',
    './themes/**/layouts/**/*.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // <-- 启用插件
  ],
}
