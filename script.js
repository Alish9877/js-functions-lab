const IsAdult = (age) => {
  if (age >= 18) {
    return 'Adult'
  } else {
    return 'Major'
  }
}

console.log('Exercise 2 Result:', IsAdult(1))
