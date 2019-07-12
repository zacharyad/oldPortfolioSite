var waterPerIn = document.getElementById("input2").value;
var flourIn = 1000;
var waterIn = 570;
var waterPer = (waterPerIn / 100);
var yeastIn = 3.5;
var saltIn = 52;
var amount = document.getElementById("input1").value;
var pizzaBtn = document.querySelector("button");


function yourPizza() {
    var x = document.getElementById("input1").value;
	var waterPercentIn = document.getElementById("input2").value;
	var y = x / 4;
    var waterIn = (waterPercentIn / 100) * 1000;
    var pizza = ("You will need to begin by Measuring out " + (flourIn * y) + " grams of flour into a large cooking vessal. " + " To the flour, measure and add " + (saltIn * y) + " grams of salt, as well as "  + (yeastIn * y) + " grams of active dry yeast (I use wine making yeast, so go figure). " + " Lastly, add  " + (waterIn * y) + " grams of water to the dry ingrdients and combine with a fork or your hand. Let this cohesive mixture hang out in the bowl for 15-24 hours. Yes, hours. This time will develop the dough and allow the yeast to make it tasty. After the dough has rested, within the previous mention times, cut it in to portions and refrigerate for up to 2 days. Use as you would any pizza dough, i.e. puts some pizza stuff on it and bake.");
    
    document.querySelector("li").textContent = ("You will need: " + pizza);
	
}

pizzaBtn.addEventListener("click", function(){
	yourPizza();
	pizzaBtn.innerHTML = "Create another?";

})
	
