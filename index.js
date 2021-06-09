let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
const input = require("readline-sync")
//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

foodCabinet = food.split(",").sort()
equipmentCabinet = equipment.split(",").sort()
petsCabinet = pets.split(",").sort()
sleepAidsCabinet = sleepAids.split(",").sort()



//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet]

console.log(cargoHold)

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
userCabinet = Number(input.question("Select a cabinet (0-3): "))



//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (userCabinet >=0 && userCabinet <= 3) {
  console.log(`The contents of Cabinet ${userCabinet} are:
  ${cargoHold[userCabinet]}`)
} else
{ 
  userCabinet = Number(input.question("Invalid Number.  Please select a number (0-3): "))
}

/* How would I get the code to run again if the number is invalid? */

//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

userCabinet = Number(input.question("\nI can help you find an item in the cabinet. \nFirst, please select a cabinet number (0-3): "))

if (userCabinet >=0 && userCabinet <= 3) {
userCabinetItem = input.question("Please enter the item you're looking for: ")
  
} else
{ 
  console.log("Please enter a valid number")
}


if (cargoHold[userCabinet].includes(userCabinetItem)) {
  console.log(`Cabinet ${userCabinet} DOES contain ${userCabinetItem}.`)
} else {
   console.log(`Cabinet ${userCabinet} DOES NOT contain ${userCabinetItem}`)
}



/*How can I change the 'if else' code above to only run if a valid number is entered? */

userCabinet = Number(input.question("\nI can help you find an item in the cabinet. \nFirst, please select a cabinet number (0-3): "))

if (userCabinet >=0 && userCabinet <= 3) {
userCabinetItem = input.question("Please enter the item you're looking for: ")
  
} else
{ 
  while (userCabinet < 0 || userCabinet > 3){
    userCabinet = input.question("Please enter a valid number")
  }
  
  console.log("Please enter a valid number")
}


if (cargoHold[userCabinet].includes(userCabinetItem)) {
  console.log(`Cabinet ${userCabinet} DOES contain ${userCabinetItem}.`)
} else {
   console.log(`Cabinet ${userCabinet} DOES NOT contain ${userCabinetItem}`)

}