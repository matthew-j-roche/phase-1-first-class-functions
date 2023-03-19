function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() { 
  return function hi() {
    return 'hello';
  }
}

function returnsAnAnonymousFunction() {
  return function() {return "Goo Goo Ga Ga!"};
}