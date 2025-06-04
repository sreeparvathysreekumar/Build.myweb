function getType(variable) {
    return typeof variable;
  }
  
  console.log(getType(5)); 
  
  console.log(getType("Hello")); 
  
  console.log(getType([1, 2, 3])); 
  
  console.log(getType({ name: "Alan" })); 
  
  console.log(getType(undefined)); 
  
  console.log(getType(true)); 
  
  