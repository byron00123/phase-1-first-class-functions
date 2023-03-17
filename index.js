function receivesAFunction(callback) {
    callback();
  }
  function myCallback() {
    console.log("The callback function was called!");
  }
  
  receivesAFunction(myCallback);

function returnsANamedFunction(){
  return function namedfunction(){

  };

  
}

function returnsAnAnonymousFunction(){
  return function(){
    //takes no argument
  }
}