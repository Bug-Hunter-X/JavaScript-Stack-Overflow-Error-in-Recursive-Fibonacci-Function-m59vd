function foo(x){
  if (x == 1) {
    return 1;
  } else if (x == 2) {
    return 2;
  } else {
    return foo(x - 1) + foo(x - 2);
  }
}
console.log(foo(5)); // Output: 8

//This is a recursive function that calculates the fibonacci sequence
//However there is no base case that will end the loop when x is below 2
//The function will infinitely call itself with x-1 and x-2 causing a stack overflow error
//The stack overflow error occurs because the recursive calls don't have a condition that prevents the function from calling itself infinitely.
//A stack overflow is an error that occurs when a program attempts to use more stack memory than is available.