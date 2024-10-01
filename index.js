let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true
  };
  
  // rabbit inherits from animal
  rabbit.__proto__ = animal;
  
  console.log(rabbit.eats);  // true (inherited)
  console.log(rabbit.jumps); // true (own property)