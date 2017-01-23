import test from 'ava'
import postcss from 'postcss'
import plugin from '../lib'

const run = async (t, input, expected) => {
  const result = await postcss([ plugin() ]).process(input)

  t.is(result.css, expected)
  t.is(result.warnings().length, 0)
}

test('converts selector to camelCase', run, '.camelize(a-non-camel-cased-selector){}', '.aNonCamelCasedSelector{}')
test('converts properties to camelCase', run, 'body { camelize(a-non-camel-cased-property): 10px; }', 'body { aNonCamelCasedProperty: 10px; }')
test('converts values to camelCase', run, 'body { color: camelize(a-non-camel-cased-value); }', 'body { color: aNonCamelCasedValue; }')
