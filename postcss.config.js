module.exports = {
  plugins: [
    require('precss')(),
    require('postcss-flexbugs-fixes')(),
    require('autoprefixer')({
      browsers: [
        '> 2%',
        'last 2 versions',
        'not ie < 10'
      ]
    })
  ]
};
