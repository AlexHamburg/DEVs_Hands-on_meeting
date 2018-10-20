# access:

- browser: limited acces to files
- node: acces to files

## primitive types:

    number
    string
    object : everything is hashMaps
    array: is mutable Object (hashMap)
    undefined | null

## scopes

- global
- function
- es5 "use strict"

## syntaxes

- 1.toString() possible but bad practice
- best practices:
  -a === b: not a == b
  -a !== b: not a != b
  - []
  - {}

## Paradigmas

- closure
- currying
- classes (es6)

## array:

map, forEach, reduce, filter ,sort

## es6

- let, const , var // scopes

- lamda: ()=> {}

- Promise, async /await

- object spredding

  - {...{}, name },
  - let { name } = { name:1 }

- array spredding

  - [...{}, name ],
  - let [ name , ...array2 ] = [ 1,2,3 ]

- classes

# dom

    var element = document.createElement("header");
    element.innerHTML = "<div> hello world </div>
    document.appendChild(element);
    element.addeventListener
