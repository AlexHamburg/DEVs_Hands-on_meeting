# web development

# part 1 :theory

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

- es6
  - let, const , var // scopes
  - lamda: ()=> {}
  - Promise, async /await
  - object spredding {...{}, name }, let { name } = { name:1 }
  - array spredding [...{}, name ], let [ name , ...array2 ] = [ 1,2,3 ]

# part 2 : practic

## Exercises 1

- theory: what is npm ?
- practice:
  - npm init
  - install dependencies
  - exrpess
  - typescript

## Exercise 2

- run dummy server with express

## Exercieses 3: IO

- io / synrocnious

## Exercieses 4: IO

- IO : asyncronius
  - Promises
  - async / await

## Exercieses 5: Fetch in Browser

- callback
  - callback hall
- promise chain
  - then
  - catch
- async await
- try { } catch(e){ }

## Exercieses 6: DOM

    var element = document.createElement("header");
    element.innerHTML = "<div> hello world </div>
    document.appendChild(element);
    element.addeventListener
