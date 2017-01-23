const camelCase = require('camelcase')
const postcss = require('postcss')

function transformCamelizeCall (str) {
  return str.replace(/camelize\((.+)\)/, (_, value) => camelCase(value))
}

module.exports = postcss.plugin('postcss-camelize', function (opts) {
  return function (css) {
    css.walk(function (node) {
      if (node.type === 'decl') {
        if (node.value.toString().indexOf('camelize(') !== -1) {
          node.value = transformCamelizeCall(node.value.toString())
        }

        if (node.prop.indexOf('camelize(') !== -1) {
          node.prop = transformCamelizeCall(node.prop)
        }
      } else if (node.type === 'rule') {
        if (node.selector.indexOf('camelize(') !== -1) {
          node.selector = transformCamelizeCall(node.selector)
        }
      }
    })
  }
})
