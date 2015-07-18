var compare = require('./')

require('tape')(function(test) {
  test.equal(compare.gt('GPL-3.0', 'GPL-2.0'), true)
  test.equal(compare.lt('MPL-1.0', 'MPL-2.0'), true)
  test.equal(compare.gt('LPPL-1.3a', 'LPPL-1.0'), true)
  test.equal(compare.gt('LPPL-1.3c', 'LPPL-1.3a'), true)
  test.equal(compare.gt('MIT', 'ISC'), false)
  test.equal(compare.gt('OSL-1.0', 'OPL-1.0'), false)
  test.equal(compare.gt('AGPL-3.0', 'AGPL-1.0'), true)
  test.throws(function() { compare.gt('(MIT OR ISC)', 'GPL-3.0') })
  test.end() })
