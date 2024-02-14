
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("hi", "hi"); // comparing identical strings - should pass
assertEqual("hi", "hello"); // comparing non-identical strings - should fail
assertEqual(1, 1); // comparing identical numbers - should pass
assertEqual(1, 3); // comparing non-identical numbers - should fail
