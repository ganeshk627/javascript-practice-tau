const summa = {};
console.log(summa)


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
console.log(harry["name"])
console.log(harry["+bonus_points"])
console.warn(harry.shout)
console.warn(harry.shout())

harry.name="Harry James Potter"
console.log(harry)


