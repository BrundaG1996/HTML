// Non-strict mode example

// y = 20; // No error in non-strict mode
// console.log("y is", y);


function demo(a, a) { // Allowed in non-strict mode
  console.log(a);
}
demo(1, 2); // Output: 2