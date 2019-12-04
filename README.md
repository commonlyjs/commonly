A modern utility library for JavaScript/TypeScript. Visit [commonlyjs.com](https://commonlyjs.com) to learn more.  

![Build Status](https://github.com/commonlyjs/commonly/workflows/CD/badge.svg)
[![Dependencies](https://david-dm.org/comomnlyjs/commonly.svg)](https://david-dm.org/commonlyjs/commonly)



### Overview
Commonly aims to be the most comprehensive JavaScript/TypeScript utility library.
 
Some of the functionality may seem redundant at first, but for someone striving for a [tacit programming](https://en.wikipedia.org/wiki/Tacit_programming) they are necessary.



### Content
* [Overview](#Overview)
* [Installation](#Installation)
* [Packages](#Packages)



### Installation 
To start using commonly in your project, simply install packages of your choosing.
You can find a list of all `commonly` packages in the [packages](#Packages) section.  

An example: 
```bash
$ npm install  @commonly/type @commonly/function @commonly/iterable @commonly/math
```
```javascript
import compose from "@commonly/function/compose"
import Math from "@commonly/math"
import { filter, reduce } from "@commonly/iterable"


const normalize = compose(
  reduce(Math.add, 0), 
  filter(x => x % 2)
)

console.log(
  normalize([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])    // -> 44
)
```



### Packages

#### @commonly/function
Collection of functional utilities, often higher-order functions.  


#### @commonly/iterable
Collection of common list processing utilities.  

Those functions can operate out of the box on an Array, TypedArray, String, Map and a Set.  

Support for custom collections can be added by making sure that a collection implement the following properties:
* An `Iterable.iterator` from a `@commonly/protocol` package (an alias for a `Symbol.iterator` symbol, you can use it directly if you prefer) which returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) so the collection can be iterated over.
* A `Reducible.reducer` from a `@commonly/protocol` package which returns a default reducer for the collection.


#### @commonly/math
Collection of common mathematics related utilities.

Here you can find common operators and utilities found often in mathematics.


#### @commonly/number
Collection of common number related utilities. 


#### @commonly/protocol
Collection of protocols used internally by `commonly`.   

By implementing one of those on your own data structure you can enable or alter the behaviour of the utilities.  
Whenever a function leverages one of the protocols, it have to state so in its documentation. 


#### @commonly/reflect
Collection of reflection utilities. 


#### @commonly/string
Collection of common string related utilities.  


#### @commonly/transducer
Collection of common transducing functions.  

Our `@commonly/iterable` package leverages those as they let us decouple the process 
from a processed context (to some extent) when you iterate over a collection, 
so our `@commonly/iterable` utilities can process multiple types of inputs with ease.  

Additionally, using `@commonly/transducer` directly instead of `@commonly/iterable` will eliminate instantiation 
of intermediate collections in a pipeline between each step 
as [deforestation](https://en.wikipedia.org/wiki/Deforestation_(computer_science)) 
is not implemented in any JavaScript runtime environment just yet.


#### @commonly/type
Collection of common shape definitions used in commonly, required for TypeScript projects.  
