class Food {
    constructor(pName, pCalories) {
      this.name = pName;
      this.calories = parseInt(pCalories);
    }
  }
  
  let foodArray = [];
  const form = document.getElementById("add-food-form");
  const foodNameInput = document.getElementById("food-name");
  const caloriesInput = document.getElementById("calories");
  const totalCalories = document.getElementById("calories-total-value");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const foodName = foodNameInput.value;
    const calories = caloriesInput.value;
    const foodObject = new Food(foodName, calories);
    foodArray.push(foodObject);
    console.log(foodArray);
    const sumCalories = foodArray.reduce((total, item) => {
      return total + item.calories;
    }, 0);
    totalCalories.innerText = sumCalories;
    foodNameInput.value = "";
    caloriesInput.value = "";
  });
  
