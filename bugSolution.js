function foo(x) {
  if (x <= 1) {
    return x; // Base case: return x if x is 0 or 1
  } else {
    return foo(x - 1) + foo(x - 2);
  }
}
console.log(foo(5)); // Output: 5
//The solution adds a base case that stops the recursion. When x is less than or equal to 1 the function returns x which terminates the loop.