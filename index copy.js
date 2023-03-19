function callback() {
  console.log("1 or Color Wheel?");
}

function receivesAFunction(callback) {
  callback();
}

receivesAFunction(callback);


function namedFunction() {
  return (4 * 4);
}

function returnsANamedFunction() {
  return (namedFunction);
}

returnsANamedFunction();

function returnsAnAnonymousFunction() {
  return function() {
    console.log("hi");
  }
}

returnsAnAnonymousFunction();
