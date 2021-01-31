const quips = include('./quips.js')
let dishes = include('./dishes.js')

//  Shuffle
let j, temp;
for (let i = dishes.length - 1; i > 0; i--){
  j = Math.floor(Math.random() * (i+1))
  temp = dishes[i]
  dishes[i] = dishes[j]
  dishes[j] = temp
}

//  Iterate through dishes
let currentDishIdx = -1
function nextDish(){
  currentDishIdx = (currentDishIdx + 1) % dishes.length
  $("#quip").text(quips[Math.floor(Math.random() * quips.length)])
  $("#item-name").text(dishes[currentDishIdx] + "?")

}

document.getElementById('yep').addEventListener("click",() => {
  //  Add current selected dish to the yes column
  $("#saved").append(`<li>${dishes[currentDishIdx]}</li>`)
  nextDish()
})

document.getElementById("nope").addEventListener("click",() => {
  nextDish()
})

nextDish()
