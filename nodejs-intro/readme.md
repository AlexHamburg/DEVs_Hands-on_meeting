# web development

## requirments

- install node.js : https://nodejs.org/en/download/

# run in terminal:

    npm -v
    node

# Part 1 :theory

- access:

  - browser: limited acces to files
  - node: acces to files

- Basic syntaxees

  - primitive types:
    - number
    - string
    - object : everything is hashMaps
    - array: is mutable Object (hashMap)
    - undefined | null

- scopes

  - global
  - function
  - es6 "use strict"

- Syntaxes

  - everything:
    - is object 1.toString() but bad practice
  - equeality:
    - a == b: bed
    - a === b: okey
  - best practices:
    - []
    - {}

- Paradigmas

  - closure
  - prototype
  - currying

- es5
- "use strict" // aplies optimization and better typings

- array:
  map, forEach, reduce, filter ,sort

- es6
  - let, const , var // scopes
  - lamda: ()=> {}
  - Promise, async /await
  - object spredding {...{}, name }, let { name } = { name:1 }
  - array spredding [...{}, name ], let [ name , ...array2 ] = [ 1,2,3 ]

# Part 2 : lets Code

### - Exerciese 1: npm

### - Exerciese 2: server with express

### - Exerciese 3 - 4 : IO

### - Exerciese 5: Fetch in Browser

- callback
  - callback hall
- promise chain
  - then
  - catch
- async await
- try { } catch(e){ }

### - Exerciese 6: DOM

    var element = document.createElement("header");
    element.innerHTML = "<div> hello world </div>
    document.appendChild(element);
    element.addeventListener
