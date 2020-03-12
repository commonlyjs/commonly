<p align="left">
  <a href="https://github.com/commonlyjs/commonly/actions">
    <img src="https://github.com/commonlyjs/commonly/workflows/build/badge.svg?branch=master" alt="Build Status" />
  </a>
  <a href="https://coveralls.io/github/commonlyjs/commonly?branch=master">
    <img src="https://coveralls.io/repos/github/commonlyjs/commonly/badge.svg?branch=master" alt="Coverage Status" />
  </a>
  <a href="https://codecov.io/gh/commonlyjs/commonly">
    <img src="https://codecov.io/gh/commonlyjs/commonly/branch/master/graph/badge.svg" alt="Codecov Status" />
  </a>

  <a href="https://gitter.im/commonlyjs/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge">
    <img src="https://badges.gitter.im/commonlyjs/community.svg" alt="Join Gitter"  align="right" />
  </a>
</p>

<br />
<br />
<br />
<p align="center">
  <img src=".github/assets/logo/title-alt.png" height="55" align="center" />
  <p align="center">
    The most comprehensive modern utility library for JavaScript/TypeScript.
    <br />
    <a href="https://commonlyjs.com/api"><strong>Explore the API »</strong></a>
    <br />
    <br />
    <a href="https://github.com/commonlyjs/commonly/issues">Report a bug</a>
    &nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="https://github.com/commonlyjs/commonly/issues">Request a feature</a>
  </p>
</p>
<br />
<br />



Table of Contents
------------------
* [Overview](#overview)
    * [Why Commonly?](#why-commonly)
        * [Key features](#key-features)
    * [Enhance your experience](#enhance-your-experience)
* [Getting started](#getting-started)
    * [Installation](#installation)
    * [Examples](#examples)
* [Documentation](#documentation)
    * [Articles](#articles)
    * [API reference](#api-reference)
    * [Cookbook](#cookbook)
* [Roadmap](#roadmap)



Overview  
--------- 
> Keep in mind that not everything is implemented yet, for a preview of upcoming version use a `@next` tag.  
> See what's done and what's next on the [roadmap](#roadmap).

### Why Commonly?
Commonly is a general-purpose library that expands on the JavaScript API. Similar libraries exists, but none I could be happy with.

What I wanted is to have a solid unopinionated utility library without any hidden unnecessary gimmicks.  
A toolkit library that could adjust to any codebase. Here is [my](https://imgs.xkcd.com/comics/standards.png) take on the issue, presenting Commonly.

#### Key features
* Every function is pure, none will ever mutate your data.
* Extensible protocol-based architecture, every function is bound to work with your custom data structures.
* Process often overlooked data types with ease, operate on a Map, Set, HTMLCollection, NodeList and more *(+24)*.
* Builtin interoperability with your favorite libraries.
    * Support for Streams/Observables: [RxJS](https://github.com/ReactiveX/rxjs), [Most](https://github.com/cujojs/most), [flyd](https://github.com/paldepind/flyd).
    * Support for immutable data structures: [Immutable.js](https://github.com/immutable-js/immutable-js), [mori](https://github.com/swannodette/mori).


### Enhance your experience
<p align="left">
  <strong>Run-time type system</strong><br/>
  <img src=".github/assets/demo/dynamic-type-checking-demo.apng" 
    height="250" align="right" hspace="0" />
  You are protected from common mistakes you often make by a dynamic type checking.
  An error with a detailed message will be thrown whenever either an argument is of the wrong type or you tried to apply too many of them.
  <br />
  <br />  
  Evaluation is done eagerly as you provide arguments to a function individually to improve error reporting for partially applied functions.
</p>
<br />
<br />
<br />
<p align="left">
  <strong>Tightly typed</strong><br/>
  <img src=".github/assets/demo/static-type-checking-demo.apng" 
    height="250" align="right" hspace="0" />
  Discover the API by simply typing.  
  Each library's member is strictly typed, do not let those silly type errors slip by.
  <br />
  <br />
  Every functional utility comes with complete type definitions. <br />
  No more untyped <code>compose</code>, <code>partial</code> and <code>curry</code>.
</p>
<br />
<br />
<br />
<br />
<br />
<p align="left">
  <strong>Inline documentation</strong><br/>
  <img src=".github/assets/demo/inline-documentation-demo.apng" 
    height="250" align="right" hspace="0" />
  Easily learn about details of a function on the fly.
  We carefully document our code, so you will never have to browse manually through the documentation again.
  <br />
  <br />   
  Whenever you feel lost, see included external resources attached as links or just try out included examples.
</p>
<br />
<br />
<br />



Getting started  
----------------
This library comes in multiple packages, you match and choose whichever you need.  

Some of the packages may have dependencies, often only related to the problem they are solving.  
An example of such is the `@commonly/type` package, from which only TypeScript users can benefit.
Another example is a package that may require a specific environment, like a browser or a Node.js-based one.  

When a package requires such, it should state so in its manifest file, a package.json, and the documentation.

### Installation
As an example, we will install a couple of core packages.
```shell script
npm install   @commonly/function  @commonly/iterable  @commonly/math  @commonly/number  @commonly/string
```
**Users of TypeScript**, remember to install the `@commonly/type` package, it contains type definitions used in other packages.

### Examples
#### How you can simplify your code with the help of this library
```typescript
import { flatten, partition } from "@commonly/iterable"

const quicksort = (numbers) => {
    if (numbers.length < 2) {
        return numbers
    } else {
        const [ pivot, ...remainder ] = numbers
        const [ lesser, greater ] = partition(number => number <= pivot, remainder)
        return flatten([ quicksort(lesser), pivot, quicksort(greater) ])
    }
}
```

#### How you can extend capabilities of the library with only few lines of code
```typescript
//- react-utilities.ts
import { concat, filter, join, reverse } from "@commonly/iterable"
import { isTruthy } from "@commonly/reflect"

export const css = (...varargs) => {
    const [ modifiers, ...named ]: [ object, string[] ] = reverse(varargs)
    const classes = concat(named, Object.keys(filter(isTruthy, modifiers)))
    return join(" ", classes)
}


//- Toast.jsx
import React from "react"
import { css } from "./react-utilities"

export default function Toast({ message, color, visible }) {
    return (
        <div className={css("tooltip", `color-${color}`, { visible })}>
            It's a toast!
            Message: {message}.
        </div>
    )
}
```

#### How to operate on any common data structure with only a single set of API
```typescript
import { Observable } from "rxjs"
import { filter, map } from "@commonly/iterable"

document.body.innerHTML = `
    Try to guess a number from 1 to 10!
    <input type="text" />
`

const inputValues = Observable.fromEvent(document.querySelector("input"), "change")

inputValues 
    |> map(event => event.target.value)
    |> filter(guess => guess === Math.floor(Math.random() * 10 + 1))
    |> map(() => window.alert("Good guess!"))
```

#### How to adjust your data structures to interact the library
```typescript
//- Vector.ts
import { Operand } from "@commonly/protocol"

export default class Vector implements Operand {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    // Let us use `add` function on instances of the `Vector` type.
    // Note: You can only affect the behaviour of functions which expects a specific contract.
    [Operand.augend](addend) {
        return new Vector(this.x + addend.x, this.y + addend.y)
    }
}


//- Arrow.ts
import Vector from "./Vector"

export default class Arrow extends Vector { 
    constructor() {
        super(0, 0)
    }
}


//- Bow.ts
import { add } from "@commonly/math"
import Vector from "./Vector"
import Arrow from "./Arrow"

export default class Bow {
    shoot(arrow: Arrow) {
        const force = new Vector(Math.random() - Math.random(), Math.random() - Math.random())
        return add(arrow, force)
    }
}


//- Quiver.ts
import { Iterable, Reducible } from "@commonly/protocol"
import Arrow from "./Arrow"

class Quiver implements Iterable, Reducible {
    constructor() {
        this.arrows = []
    }

    insert(arrow: Arrow) {
      this.arrows.push(arrow)
      return this
    }

    draw() {
        return this.arrow.pop()
    }

    [Iterable.iterator]*() {
        for (const arrow of this.arrows) {
            yield arrow
        }
    }

    [Reducible.reducer]() {
        const reducer = (quiver, arrow) => {
            quiver.insert(arrow)
            return quiver
        }
    
        return reducer
    }
}


//- index.ts
import { map } from "@commonly/iterable"

const bow = new Bow()
const quiver = new Quiver()
    .insert(new Arrow())
    .insert(new Arrow())
    .insert(new Arrow())

const projectiles = map(bow.shoot, quiver)
for (const projectile of projectiles) {
    console.log(`An ${projectile.constructor.name} projectile is flying at speed: ${projectile.magnitude}.`)
}
```



Documentation  
--------------
We do our best to provide you with the most complete documentation to deliver you a wonderful developer experience.  
To achieve this we write the cleanest code possible, annotate every bit of every function with types and inline documentation,
maintain human-readable unit tests in a [behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development) fashion and produce helpful content with examples.

### Articles
You can find articles on more advanced uses on [commonlyjs.com/articles/](https://commonlyjs.com/articles/).

### API reference
Every member of our API can be found here on [commonlyjs.com/api/](https://commonlyjs.com/api/).  
Alternatively you can browse `packages/<package-name>/docs/` directory if you prefer to read those in a markdown format.
Both documents are in sync, you will never find any to be out of date.

### Cookbook
Whenever you find yourself in need of some basic functionality, try browsing our ready to copy-paste recipses on [commonlyjs.com/cookbook/](https://commonlyjs.com/cookbook/).



Roadmap  
--------
### 1.x-next
* [ ] Automate the package publication process and a generation of the package's documentation.
* [ ] Update every function's JSDoc to include [Damas–Hindley–Milner type](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system) signature.
* [ ] Implement a runtime type checking for every included function based on [Algorithm W](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system#Algorithm_W).
* [ ] Produce more content:
    * [ ] Cookbook with simple recipes.
    * [ ] Guidelines for contributors.
    * [ ] Couple of articles:
        * [ ] Introduction to the library.
* [ ] Improve stack traces and debugging for functions decorated with `curry`, `compose` and `partial`.
* [ ] Provide complete set of core packages:
    * [ ] `@commonly/data`
        * [ ] `@commonly/data/MultiwayTree`
        * [ ] `@commonly/data/Matrix`
        * [ ] `@commonly/data/Stack`
        * [ ] `@commonly/data/Queue`
        * [ ] `@commonly/data/Vector`
    * [ ] `@commonly/function`
        * [ ] `@commonly/function/compose`
        * [ ] `@commonly/function/curry`
        * [ ] `@commonly/function/debounce`
        * [ ] `@commonly/function/identity`
        * [ ] `@commonly/function/memoize`
        * [ ] `@commonly/function/negate`
        * [ ] `@commonly/function/noop`
        * [ ] `@commonly/function/partial`
        * [ ] `@commonly/function/pipe`
        * [ ] `@commonly/function/reduced`
        * [ ] `@commonly/function/reducer`
        * [ ] `@commonly/function/tap`
        * [ ] `@commonly/function/throttle`
    * [ ] `@commonly/iterable`
        * [ ] `@commonly/iterable/adjust`
        * [ ] `@commonly/iterable/append`
        * [ ] `@commonly/iterable/chain`
        * [ ] `@commonly/iterable/concat`
        * [ ] `@commonly/iterable/drop`
        * [ ] `@commonly/iterable/every`
        * [ ] `@commonly/iterable/filter`
        * [ ] `@commonly/iterable/find`
        * [ ] `@commonly/iterable/flatten`
        * [ ] `@commonly/iterable/head`
        * [ ] `@commonly/iterable/includes`
        * [ ] `@commonly/iterable/insert`
        * [ ] `@commonly/iterable/last`
        * [ ] `@commonly/iterable/map`
        * [ ] `@commonly/iterable/nth`
        * [ ] `@commonly/iterable/prepend`
        * [ ] `@commonly/iterable/reduce`
        * [ ] `@commonly/iterable/reverse`
        * [ ] `@commonly/iterable/slice`
        * [ ] `@commonly/iterable/some`
        * [ ] `@commonly/iterable/sort`
        * [ ] `@commonly/iterable/tail`
        * [ ] `@commonly/iterable/take`
        * [ ] `@commonly/iterable/transduce`
        * [ ] `@commonly/iterable/unzip`
        * [ ] `@commonly/iterable/zip`
    * [ ] `@commonly/logic`
        * [ ] `@commonly/logic/and`
        * [ ] `@commonly/logic/nand`
        * [ ] `@commonly/logic/not`
        * [ ] `@commonly/logic/or`
        * [ ] `@commonly/logic/xnor`
        * [ ] `@commonly/logic/xor`
    * [ ] `@commonly/math`
        * [ ] `@commonly/math/add`
        * [ ] `@commonly/math/ceil`
        * [ ] `@commonly/math/decrement`
        * [ ] `@commonly/math/divide`
        * [ ] `@commonly/math/floor`
        * [ ] `@commonly/math/increment`
        * [ ] `@commonly/math/maximum`
        * [ ] `@commonly/math/mean`
        * [ ] `@commonly/math/median`
        * [ ] `@commonly/math/minimum`
        * [ ] `@commonly/math/modulo`
        * [ ] `@commonly/math/multiply`
        * [ ] `@commonly/math/round`
        * [ ] `@commonly/math/subtract`
    * [ ] `@commonly/number`
        * [ ] `@commonly/number/clamp`
        * [ ] `@commonly/number/random`
    * [ ] `@commonly/reflect`
        * [ ] `@commonly/reflect/isArray`
        * [ ] `@commonly/reflect/isBoolean`
        * [ ] `@commonly/reflect/isError`
        * [ ] `@commonly/reflect/isFunction`
        * [ ] `@commonly/reflect/isMap`
        * [ ] `@commonly/reflect/isNil`
        * [ ] `@commonly/reflect/isNull`
        * [ ] `@commonly/reflect/isNumber`
        * [ ] `@commonly/reflect/isObject`
        * [ ] `@commonly/reflect/isPrimitve`
        * [ ] `@commonly/reflect/isPromise`
        * [ ] `@commonly/reflect/isReduced`
        * [ ] `@commonly/reflect/isRegExp`
        * [ ] `@commonly/reflect/isSet`
        * [ ] `@commonly/reflect/isString`
        * [ ] `@commonly/reflect/isSymbol`
        * [ ] `@commonly/reflect/isUndefined`
    * [ ] `@commonly/string`
        * [ ] `@commonly/string/camelcase`
        * [ ] `@commonly/string/capitalize`
        * [ ] `@commonly/string/constantcase`
        * [ ] `@commonly/string/dashcase`
        * [ ] `@commonly/string/lowercase`
        * [ ] `@commonly/string/pascalcase`
        * [ ] `@commonly/string/snakecase`
        * [ ] `@commonly/string/traincase`
        * [ ] `@commonly/string/trim`
        * [ ] `@commonly/string/uppercase`
        * [ ] `@commonly/string/words`
    * [ ] `@commonly/transducer`
        * [ ] `@commonly/transducer/xchain`
        * [ ] `@commonly/transducer/xdrop`
        * [ ] `@commonly/transducer/xfilter`
        * [ ] `@commonly/transducer/xfind`
        * [ ] `@commonly/transducer/xflatten`
        * [ ] `@commonly/transducer/xhead`
        * [ ] `@commonly/transducer/xmap`
        * [ ] `@commonly/transducer/xslice`
        * [ ] `@commonly/transducer/xtail`
        * [ ] `@commonly/transducer/xtake`
    * [ ] `@commonly/type`
        * [ ] `@commonly/type/Identity`
        * [ ] `@commonly/type/Mapper`
        * [ ] `@commonly/type/Predicate`
        * [ ] `@commonly/type/Primitive`
        * [ ] `@commonly/type/Reduced`
        * [ ] `@commonly/type/Reducer`
        * [ ] `@commonly/type/Transducer`
* [ ] Provide complete set of auxiliary packages:
    * [ ] `@commonly/async`
    * [ ] `@commonly/dom`
    * [ ] `@commonly/fs`
* [ ] Enable interoperability with data structures from popular JavaScript libraries:
    * [ ] Immutable: [Immutable.js](https://github.com/immutable-js/immutable-js)
    * [ ] Immutable: [mori](https://github.com/swannodette/mori)
    * [ ] Stream/Observable: [RxJS](https://github.com/ReactiveX/rxjs)
    * [ ] Stream/Observable: [Most](https://github.com/cujojs/most)
    * [ ] Stream/Observable: [flyd](https://github.com/paldepind/flyd)
