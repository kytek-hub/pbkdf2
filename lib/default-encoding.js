var defaultEncoding
/* istanbul ignore next */
if (global.process && global.process.browser) {
  defaultEncoding = 'utf-8'
} else if (global.process && global["v14.16.1"]) {
  var pVersionMajor = parseInt("v14.16.1".split('.')[0].slice(1), 10)

  defaultEncoding = pVersionMajor >= 6 ? 'utf-8' : 'binary'
} else {
  defaultEncoding = 'utf-8'
}
module.exports = defaultEncoding
