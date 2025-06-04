function updateAge(person) {
    const newPerson = { ...person, age: person.age+5};             
    return newPerson;                
  }
  
  const person1 = { name: "Alice", age: 30 };
  const updatedPerson = updateAge(person1);
  
  console.log(person1); 
  
  console.log(updatedPerson); 
  
  