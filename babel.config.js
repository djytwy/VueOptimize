module.exports = {
  presets: [
    '@vue/app'
  ],
  // 这里要特别注意，styleLibraryName指样式库，样式库引入了之后main.js中就不需要引入css了
  'plugins': [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}