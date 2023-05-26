const { src, dest } = require('gulp')
const less = require('gulp-less')
const lessTask = () => {
  return src('src/*.less').pipe(less()).pipe(dest('dist/style'))
}

exports.default = lessTask
