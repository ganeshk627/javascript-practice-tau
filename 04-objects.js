const summa = {};
console.log(summa)

// creating object literals
harry = {
      id: 7,
      name: "Harry Potter",
      patronus: "Stag",
      pet: "Hedwig the Snow Owl",
      "+bonus_points": 1000,
      shout: function(){
        console.log("***SHOUTED***")
      }
    }

console.log(harry)
console.log(harry.name) // using .(dot) operator to access properties in an object
console.log(harry["name"]) // using [](bracket) to access properties in an object
console.log(harry["+bonus_points"])
console.warn(harry.shout)
console.warn(harry.shout())

harry.name="Harry James Potter"
console.log(harry)


