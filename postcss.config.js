module.exports = {
  plugins: [
    require('precss')(),
    require('postcss-flexbugs-fixes')(),
    require('autoprefixer')({
      browsers: [
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
        'not ie < 10'
      ]
    })
  ]
};
