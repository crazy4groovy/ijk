var obj
var clense = function(a, b) {
  return !b ? a : typeof b[0] === 'string' ? a.concat([b]) : a.concat(b)
}
var factory = function(x, y, z) {
  return function(node) {
    return !!node && typeof node[1] === 'object' && !Array.isArray(node[1])
      ? ((obj = {}),
        (obj[x] = node[0]),
        (obj[y] = node[1]),
        (obj[z] = Array.isArray(node[2])
          ? node[2].reduce(clense, []).map(factory(schema))
          : node[2] + ''),
        obj)
      : factory(schema)([node[0], {}, node[1] || ''])
  }
}
var h = factory('name', 'props', 'children')
var p = factory('nodeName', 'attributes', 'children')

exports.h = h
exports.p = p
//# sourceMappingURL=index.js.map
