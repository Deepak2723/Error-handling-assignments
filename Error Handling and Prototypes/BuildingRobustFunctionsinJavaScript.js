function getPerson(person) {
    try {
      if (typeof person !== "object" || !person.hasOwnProperty("name") || !person.hasOwnProperty("age")) {
        throw new Error("Invalid parameter type");
      }
      
      const name = person.name;
      const age = person.age;
      
      return `Name: ${name}, Age: ${age}`;
    } catch (error) {
      return error.message;
    }
  }
  const person1 = { name: "Mithun", age: 20 };
  console.log(getPerson(person1)); // Output: Name: Mithun, Age: 20
  
  const person2 = { name: "Mithun" };
  console.log(getPerson(person2)); // Output: Invalid parameter type
  
  const person3 = "Invalid person";
  console.log(getPerson(person3)); // Output: Invalid parameter type
    