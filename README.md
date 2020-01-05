A modern utility library for JavaScript/TypeScript. Visit [commonlyjs.com](https://commonlyjs.com) to learn more.  

[![Build Status](https://github.com/commonlyjs/commonly/workflows/build/badge.svg?branch=master)](https://github.com/commonlyjs/commonly/actions)
[![Coverage Status](https://coveralls.io/repos/github/commonlyjs/commonly/badge.svg?branch=master)](https://coveralls.io/github/commonlyjs/commonly?branch=master)
[![codecov](https://codecov.io/gh/commonlyjs/commonly/branch/master/graph/badge.svg)](https://codecov.io/gh/commonlyjs/commonly)
[![Gitter](https://badges.gitter.im/commonlyjs/community.svg)](https://gitter.im/commonlyjs/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


### Overview

#### Why Commonly?
You can already find multiple fine libraries which provide you with a basic tooling, each is different, each seasons adds its own flavor to JavaScript.
Commonly blends features form the latest versions of EcmaScripts with standards and concepts from those libraries together, 
delivering you the most comprehensive set of utilities for JavaScript/TypeScript.  

* Batteries included. Commonly is to be the most comprehensive JavaScript/TypeScript utility library.
* Written and tested thoroughly in TypeScript. Coverage at 95%.
* Comes in modular, tree shakeable packages, install and import only what you need. 
* Designed with functional programming in mind, it will never mutate your data.
* Extensible, every functionality's implementation is based on protocols. Meaning you can `map`, `filter` and more on immutable.js data structures or even use `add` function to sum matrices.
* Every utility is well documented and tightly typed to enhance your experience using IDEs.

You can perform any kind of operation on any native JavaScript data structure.
```typescript
import { map } from "@commonly/iterable"

const uniques = new Set()   // -> { 0, 1, 2 }
    .add(0)
    .add(1)
    .add(1)
    .add(2)

map(item => item / item, uniques)   // -> { NaN, 1 }
```

And any other data structure that is added by a third party library, like RxJS or Immutable.js.
```typescript
import { map, reduce } from "@commonly/iterable"
import { fromEvent } from 'rxjs'
import { Map } from "immutable"

const source = fromEvent(document, 'click')
const archive = reduce((archive, event) => archive.set(event.timeStamp, event),  Map(), source)
const coords = map(([ timeStamp, event ]) => ({ x: event.clientX, y: event.clientY, ts: timeStamp }), archive)
console.log(coords)
```

Also it can be easily operate on your custom data structures. 
```typescript
import { map } from "@commonly/iterable"

class Queue {
    state = []

    enqueue(item) {
        this.state.push(item)
        return this
    }

    [Symbol.iterator]*() {
        for (item in this.state) {
            yield item
        }
    }

    ["@@cmny/reducer"]: (accumulator, item) => accumulator.enqueue(item)
}

const numbers = new Queue()     // -> { 0, 1, 1, 2 }
    .enqueue(0)
    .enqueue(1)
    .enqueue(1)
    .enqueue(2)

const strings = map(item => String(item), numbers)      // -> { "0", "1", "1", "2" }
```

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
#### `@commonly/function` 
![npm (scoped)](https://img.shields.io/npm/v/@commonly/function)  
Collection of functional utilities, often higher-order functions.  

#### `@commonly/iterable` 
![npm (scoped)](https://img.shields.io/npm/v/@commonly/iterable)  
Collection of common list processing utilities.  

Those functions can operate out of the box on an Array, TypedArray, String, Map and a Set.  

Support for custom collections can be added by making sure that a collection implement the following properties:
* An `Iterable.iterator` from a `@commonly/protocol` package (an alias for a `Symbol.iterator` symbol, you can use it directly if you prefer) which returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) so the collection can be iterated over.
* A `Reducible.reducer` from a `@commonly/protocol` package which returns a default reducer for the collection.

#### `@commonly/math` 
![npm (scoped)](https://img.shields.io/npm/v/@commonly/math)  
Collection of common mathematics related utilities.

Here you can find common operators and utilities found often in mathematics.

#### `@commonly/number` 
![npm (scoped)](https://img.shields.io/npm/v/@commonly/number)  
Collection of common number related utilities. 

#### `@commonly/protocol` 
![npm (scoped)](https://img.shields.io/npm/v/@commonly/protocol)  
Collection of protocols used internally by `commonly`.   

By implementing one of those on your own data structure you can enable or alter the behaviour of the utilities.  
Whenever a function leverages one of the protocols, it have to state so in its documentation. 

#### `@commonly/reflect` 
![npm (scoped)](https://img.shields.io/npm/v/@commonly/reflect)  
Collection of reflection utilities. 

#### `@commonly/string` 
![npm (scoped)](https://img.shields.io/npm/v/@commonly/string)  
Collection of common string related utilities.  n  

#### `@commonly/transducer` 
![npm (scoped)](https://img.shields.io/npm/v/@commonly/transducer)  
Collection of common transducing functions.  

Our `@commonly/iterable` package leverages those as they let us decouple the process 
from a processed context (to some extent) when you iterate over a collection, 
so our `@commonly/iterable` utilities can process multiple types of inputs with ease.  

Additionally, using `@commonly/transducer` directly instead of `@commonly/iterable` will eliminate instantiation 
of intermediate collections in a pipeline between each step.

#### `@commonly/type` 
![npm (scoped)](https://img.shields.io/npm/v/@commonly/type)  
Collection of common shape definitions used in commonly, required for TypeScript projects.  
