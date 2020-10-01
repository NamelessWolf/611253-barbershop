var surge = require('gulp-surge')

gulp.task('deploy', [], function () {
  return surge({
    project: './build',         // Path to your static build directory
    domain: 'example.surge.sh'  // Your domain or Surge subdomain
  })
})
