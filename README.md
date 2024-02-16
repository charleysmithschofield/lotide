# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @charleysmithschofield/lotide`

**Require it:**

`const _ = require('@charleysmithschofield/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: a function that compares two arrays for equality.
* `assertEqual`: is a function that compares two values for equality.
* `assertObjectsEqual`: is a function compares two objects for equality.
* `countLetters`: is a function that takes in a string and returns a count of each of the letters in that string.
* `countOnly`: is a function that takes in a collection of items and counts the occurences of specific items.
* `eqArrays`: is a function that takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects`: eqArrays takes in two objects and returns true or false, based on a perfect match.
* `findKey`: is a function that takes in an object and a callback and return the first key for which the callback returns a truthy value.
* `findKeyByValue`: is a function that takes an object and a value as inputs and returns the first key in the object that has that value.
* `flatten`: is a function that takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `head`: is a function that will return the first element of an array, also known as the "head".
* `letterPositions`: is a function that returns all
the indices (zero-based positions) in the string where each character is found.
* `map`: is a function that takes in an array and a callback and reuturns a new array based on the results of the callback on each item in the array.
* `middle`: is a function that finds the middle elements of an array.
* `tail`: is a function which returns the "tail" of an array. The "tail" is everything except for the first element.
* `takeUntil`: is a function which returns a "slice of the array with elements taken from the beginning". 
* `without`: is a function that returns a subset of a given array, removing unwanted elements.
