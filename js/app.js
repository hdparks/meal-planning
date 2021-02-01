import quips from './quips.js'
import dishes from './dishes.js'

let selectedDishIdxs = new Set()

//  Shuffle
let j, temp;
for (let i = dishes.length - 1; i > 0; i--){
  j = Math.floor(Math.random() * (i+1))
  temp = dishes[i]
  dishes[i] = dishes[j]
  dishes[j] = temp
}

//  Iterate through dishes
let currentDishIdx = 0

function showNextSuggestion(){
  //  Highlight next dish
  currentDishIdx = (currentDishIdx + 1) % dishes.length
  //  Update visuals
  updatePrompt()
}

function updatePrompt(){
  d3.select("#quip").text(quips[Math.floor(Math.random() * quips.length)])
  d3.select("#item-name").text(dishes[currentDishIdx].name + "?")
}

function getIngredients(){
  let ingredients = {}
  Array.from(selectedDishIdxs).map(idx => dishes[idx])
    .forEach(dish => {
      dish.rec.forEach(([item, quant, metric]) => {
        if (!ingredients[item]) ingredients[item] = {metrics:{},dishes:""}
        if (!ingredients[item]["metrics"][metric]) ingredients[item]["metrics"][metric] = 0

        ingredients[item]["metrics"][metric] += quant
        ingredients[item]["dishes"] += dish.name + ": " + quant + " " + metric +"\n"
      });
    });

  return Object.entries(ingredients).map(([item,data]) => {
    data["name"] = item
    data["metrics"] = Object.entries(data["metrics"])
    return data
  })
}

function updateIngredientsList(){
  let ingredients = d3.select("#ingredients")
    .selectAll("li")
    .data(getIngredients())
    .join(enter => {
      let li = enter.append("li")
      li.append("span").classed("item",true)
      li.append("span").classed("quantity",true)
      return li
    })
    .attr("title",d => d.dishes)

  ingredients.select("span.item")
    .text(d => d.name)

  ingredients.select("span.quantity")
    .text(d => d.metrics.map(([metric,quant]) => +quant.toFixed(2) + " " + metric).join(", "))
}

function updateDishesList(){
  let row = d3.select("#saved")
    .selectAll("div")
    .data(Array.from(selectedDishIdxs).map(idx => {
      let d = dishes[idx]
      d.idx = idx
      return d
    }))
    .join(enter => {
      let row = enter.append("div").attr("class","list-group-item dish-row")
      row.append("span").classed("enumeration",true)
      row.append("span").classed("dish-name",true)
      row.append("button").classed("remove fas fa-minus-circle",true)
      return row
    })


  row.select(".enumeration")
    .text((d,i) => (i+1) + ".")

  row.select(".dish-name")
    .text(d => d.name)

  row.select(".remove")
    .on("click",(e,d) => removeDishByIdx(d.idx))
}

function removeDishByIdx(idx){
  selectedDishIdxs.delete(idx)
  updateDishesList()
  updateIngredientsList()
}

document.getElementById('yep').addEventListener("click",() => {
  //  Add current selected dish to the yes column
  selectedDishIdxs.add(currentDishIdx)
  showNextSuggestion()
  updateDishesList()
  updateIngredientsList()
})

document.getElementById("nope").addEventListener("click",() => {
  showNextSuggestion()
})

updatePrompt()
