(function() {
  const SECRET = 42;

  function getSecret() {
    return SECRET;
  }

  globalThis.getSecret = getSecret; 
})();


console.log(typeof SECRET === 'undefined'); // true
console.log(globalThis.getSecret()); // 42