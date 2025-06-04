function convertObjectToString(obj) {
    return JSON.stringify(obj);
  }
  
  function convertStringToObject(str) {
    return JSON.parse(str);
  }
  
  const person = { name: "Alice", age: 30 };
  const personString = convertObjectToString(person); 
  console.log(personString); 
  
  
  const parsedPerson = convertStringToObject(personString);
  console.log(parsedPerson); 
  