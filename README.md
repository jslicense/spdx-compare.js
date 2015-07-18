<!--js
	var compare = require('./');
-->

```js
compare.gt('GPL-3.0', 'GPL-2.0'); // => true
compare.lt('MPL-1.0', 'MPL-2.0'); // => true

compare.gt('LPPL-1.3a', 'LPPL-1.0'); // => true
compare.gt('LPPL-1.3c', 'LPPL-1.3a'); // => true
compare.gt('MIT', 'ISC'); // => false
compare.gt('OSL-1.0', 'OPL-1.0'); // => false
compare.gt('AGPL-3.0', 'AGPL-1.0'); // => true

try {
  compare.gt('(MIT OR ISC)', 'GPL-3.0');
} catch (error) {
  error.message; // => '"(MIT OR ISC)" is not a simple license identifier'
}
```

