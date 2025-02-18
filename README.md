# JavaScript Stack Overflow Bug
This repository demonstrates a common JavaScript error: a stack overflow caused by an improperly written recursive function.  The function calculates the Fibonacci sequence, but without a base case to stop the recursion, it overflows the call stack.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides the corrected version with a proper base case.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js` in your terminal.  You'll observe a stack overflow error.
3. Run `node bugSolution.js` to see the corrected implementation.

This example highlights the importance of careful base case design in recursive functions to prevent runtime errors.