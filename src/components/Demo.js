import React, { useState } from 'react'


export default function Demo() {
  
    // Polulate the list with ingredients from kk.json

    let ingredients = {
        "Apple":{"calories":95},
        "Banana":{"calories":105},
        "Broccoli":{"calories":55},
        "Brown rice":{"calories":216},
        "Chicken breast":{"calories":165},
        "Egg":{"calories":78},
        "Greek yogurt":{"calories":100},
        "Ground beef":{"calories":250},
        "Oatmeal":{"calories":150},
        "Orange":{"calories":62},
        "Salmon":{"calories":200},
        "Spinach": {"calories":7},
        "Sweet potato":{"calories":103},
        "Tuna":{"calories":99},
        "Whole wheat bread":{"calories":69},
        "Avocado":{"calories":160},
        "Blueberries":{"calories":84},
        "Carrots":{"calories":52},
        "Cheddar cheese":{"calories":114},
        "Eggs":{"calories":78},
        "Green beans":{"calories":44},
        "Ground turkey":{"calories":185},
        "Peanut butter":{"calories":190},
        "Quinoa":{"calories":222},
        "Strawberries":{"calories":46},
        "Turkey breast":{"calories":140},
        "Whole wheat pasta":{"calories":175},
        "Almonds":{"calories":164},
        "chicken": {"calories": 350},
        "Samosas": {"calories":150},
        "Aloo gobi": {"calories":150 },
        "Tandoori chicken": {"calories":200},
        "Chana masala": {"calories":150 },
        "Palak paneer": {"calories":200},
        "Biryani": {"calories":300 },
        "Dosa": {"calories":150},
        "Butter chicken": {"calories":300 },
        "Dhokla": {"calories":100 },
        "Mutter paneer": {"calories":200 },
        "Pulao": {"calories":250 },
        "Kulfi": {"calories":150 },
        "Idli": {"calories":100},
        "Chicken tikka": {"calories":200 },
        "Vada pav": {"calories":300 },
        "Sushi ":{"calories":180 },
        "Ramen ":{"calories":400 },
        "Udon ":{"calories":300 },
        "Tempura ":{"calories":200 },
        "Takoyaki ":{"calories":150 },
        "Teriyaki ":{"calories":300 },
        "Yakitori ":{"calories":150 },
        "Sashimi ":{"calories":80 },
        "Bento Box ":{"calories":600 },
        "Miso Soup ":{"calories":50 },
        "Kimchi ":{"calories":50 },
        "Bibimbap ":{"calories":330 },
        "Japchae ":{"calories":250 },
        "Bulgogi ":{"calories":250 },
        "Tteokbokki ":{"calories":150 },
        "Jajangmyeon ":{"calories":500 },
        "Galbi ":{"calories":200 },
        "Gimbap ":{"calories":300 },
        "Samgyeopsal ":{"calories":200 },
        "Mandu ":{"calories":100 },
        "Haemul Pajeon ":{"calories":300 },
        "Nakji Bokkeum ":{"calories":150 },
        "Jeon ":{"calories":150 },
        "Naengmyeon ":{"calories":150 },
        "Sundubu Jjigae ":{"calories":300 },
        "Ddukbokki ":{"calories":150 },
        "Pyeonyuk ":{"calories":200 },
        "Gamjatang ":{"calories":400 },
        "Seolleongtang ":{"calories":300 },
        "Soondae ":{"calories":250 },
        "Margherita Pizza ":{"calories":250},
        "Spaghetti Bolognese ":{"calories":400},
        "Lasagna ":{"calories":600},
        "Fettuccine Alfredo ":{"calories":600},
        "Risotto ":{"calories":400},
        "Caprese Salad ":{"calories":200},
        "Osso Buco ":{"calories":500},
        "Chicken Parmesan ":{"calories":600},
        "Beef Braciole ":{"calories":400},
        "Veal Marsala ":{"calories":400},
        "Eggplant Parmesan ":{"calories":400},
        "Minestrone Soup ":{"calories":150},
        "Minestrone alla Genovese ":{"calories":200},
        "Grilled Vegetables ":{"calories":150},
        "Gnocchi ":{"calories":400},
        "Polenta ":{"calories":350},
        "Calamari Fritti ":{"calories":400},
        "Beef Carpaccio ":{"calories":200},
        "Gnocchi alla Sorrentina ":{"calories":600},
        "Tiramisu ":{"calories":400}
        }

    

    
        
        const [calories, setCalories] = useState(0);
        var ingredientsArray = [];
        
        const [currentIngredients, setCurrentIngredients] = useState([]);

        const buttonGroupPressed = e => {
            console.log(e.target);
            console.log(e.target.id);
        
            if (ingredients[e.target.id] != undefined) {
                
                
                let divText = document.getElementById('div_text');

                if (divText.innerHTML == "") {
                    setCalories(0);
                    setCurrentIngredients([]);
                    divText.innerHTML = `<div class="flex justify-between items-center border-b-2 border-gray-200 py-2 mb-4 ml-4"> <p class="text-xl"><strong>Ingredients</strong></p> <p class="text-xl mr-4"><strong>Calories</strong> (100 gms)</p> </div>`;
                }

            
                setCurrentIngredients([...currentIngredients, e.target.id]);

                // console.log(setCurrentIngredients([]))

                divText.innerHTML += `<div class="flex justify-between items-center border-b-2 border-gray-200 py-2 ml-4"> <p class="text-xl">${e.target.id}</p> <p class="text-xl mr-4">${ingredients[e.target.id].calories}</p> </div>`;
                setCalories(calories + ingredients[e.target.id].calories);
                let li = divText.getElementsByTagName('div');
                for(let i=0; i<li.length; i++) {
                    ingredientsArray.push(li[i].innerText);
                }
                console.log(ingredientsArray);
            }


        }

        
        



    return (
    <>

    <div className="flex justify-center mt-10">
        <h1 className='text-4xl'>Search Recipies</h1>
    </div>

        <div className="flex justify-center content-center flex-col mt-10">
        
            <div className="flex justify-between content-left mt-10">

            <div className="flex flex-col content-center w-1/2 mx-20">
            
                <h1 className='text-2xl mb-5'>Add ingredients to your perfect meal: </h1>
                <div className='border rounded-md h-full mb-5 overflow-y-scroll' style={{ height: "300px"}} id='div_text'></div>

                <div>
                    <p className='text-lg'>Your total meal is <strong>{calories}</strong> calories. It is <strong>{(calories/2250)*100}% </strong>   of your daily calorie intake</p> 

                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5' onClick={() => {
                        // console.log(ingredientsArray);
                        // console.log(currentIngredients);
                        // console.log(calories);
                        // console.log(ingredientsArray.length);
                        let mealSize = "";
                        let topMeal = ingredientsArray[0];


                        if (calories < 1000) {
                            mealSize = "UNDER";
                        }
                        else{
                            mealSize = "OVER";
                        }

                        for (let i=0; i<ingredientsArray.length; i++) {
                            console.log(ingredients[topMeal].calories)
                            if (ingredients[topMeal].calories < ingredients[ingredientsArray[i]].calories) {
                                topMeal = ingredientsArray[i];
                            }

                        }

                        alert("Your meal is "+ mealSize+ " usally meal sizes. The top meal is " + topMeal +". You can substitute it with Chicken Tikka instead to reduce 200 calories.")

                    }}>Search</button>
                </div>

            </div>

            <div className="flex flex-col w-1/2 ">
                <div className="mb-3 xl:w-96">
                    {/* <label for="exampleSearch2" className="form-label inline-block mb-2 text-gray-700">Search</label> */}
                    <input
                    onKeyUp={(e) => {
                        console.log(e.target.value)
                        let filter = e.target.value.toUpperCase();
                        let ul = document.getElementById("myUL");
                        let li = ul.getElementsByTagName('li');
                        
                        // Loop through all list items, and hide those who don't match the search query
                        for (let i = 0; i < li.length; i++) {
                            let a = li[i].getElementsByTagName("a")[0];
                            let txtValue = a.textContent || a.innerText;
                            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            li[i].style.display = "";
                            } else {
                            li[i].style.display = "none";
                            }
                        }
                    }}
                    type="search"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="ingredients_input"
                    placeholder="Type query"
                    />
                    

                    <ul className="w-full text-sm mb-5 font-medium overflow-y-scroll text-gray-900 bg-white border border-gray-200 rounded-lg light:bg-gray-700 light:border-gray-600 light:text-white mt-2" id='myUL' style={{ height: "400px" }} onClick={
                        buttonGroupPressed
                    }>
                    
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Apple">Apple</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Banana">Banana</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Broccoli">Broccoli</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Brown rice">Brown rice</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Chicken breast">Chicken breast</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Egg">Egg</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Greek yogurt">Greek yogurt</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Ground beef">Ground beef</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Oatmeal">Oatmeal</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Orange">Orange</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Salmon">Salmon</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Spinach">Spinach</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Sweet potato">Sweet potato</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Tuna">Tuna</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Whole wheat bread">Whole wheat bread</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Avocado">Avocado</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Blueberries">Blueberries</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Carrots">Carrots</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Cheddar cheese">Cheddar cheese</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Eggs">Eggs</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Green beans">Green beans</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Ground turkey">Ground turkey</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Peanut butter">Peanut butter</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Quinoa">Quinoa</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Strawberries">Strawberries</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Turkey breast">Turkey breast</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Whole wheat pasta">Whole wheat pasta</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Almonds">Almonds</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="chicken">chicken</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Samosas">Samosas</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Aloo gobi">Aloo gobi</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Tandoori chicken">Tandoori chicken</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Chana masala">Chana masala</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Palak paneer">Palak paneer</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Biryani">Biryani</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Dosa">Dosa</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Butter chicken">Butter chicken</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Dhokla">Dhokla</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Mutter paneer">Mutter paneer</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Pulao">Pulao</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Kulfi">Kulfi</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Idli">Idli</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Chicken tikka">Chicken tikka</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Vada pav">Vada pav</a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Sushi ">Sushi </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Ramen ">Ramen </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Udon ">Udon </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Tempura ">Tempura </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Takoyaki ">Takoyaki </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Teriyaki ">Teriyaki </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Yakitori ">Yakitori </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Sashimi ">Sashimi </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Bento Box ">Bento Box </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Miso Soup ">Miso Soup </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Kimchi ">Kimchi </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Bibimbap ">Bibimbap </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Japchae ">Japchae </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Bulgogi ">Bulgogi </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Tteokbokki ">Tteokbokki </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Jajangmyeon ">Jajangmyeon </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Galbi ">Galbi </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Gimbap ">Gimbap </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Samgyeopsal ">Samgyeopsal </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Mandu ">Mandu </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Haemul Pajeon ">Haemul Pajeon </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Nakji Bokkeum ">Nakji Bokkeum </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Jeon ">Jeon </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Naengmyeon ">Naengmyeon </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Sundubu Jjigae ">Sundubu Jjigae </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Ddukbokki ">Ddukbokki </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Pyeonyuk ">Pyeonyuk </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Gamjatang ">Gamjatang </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Seolleongtang ">Seolleongtang </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Soondae ">Soondae </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Margherita Pizza ">Margherita Pizza </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Spaghetti Bolognese ">Spaghetti Bolognese </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Lasagna ">Lasagna </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Fettuccine Alfredo ">Fettuccine Alfredo </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Risotto ">Risotto </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Caprese Salad ">Caprese Salad </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Osso Buco ">Osso Buco </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Chicken Parmesan ">Chicken Parmesan </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Beef Braciole ">Beef Braciole </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Veal Marsala ">Veal Marsala </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Eggplant Parmesan ">Eggplant Parmesan </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Minestrone Soup ">Minestrone Soup </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Minestrone alla Genovese ">Minestrone alla Genovese </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Grilled Vegetables ">Grilled Vegetables </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Gnocchi ">Gnocchi </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Polenta ">Polenta </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Calamari Fritti ">Calamari Fritti </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Beef Carpaccio ">Beef Carpaccio </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Gnocchi alla Sorrentina ">Gnocchi alla Sorrentina </a></li>
                        <li><a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:text-blue-700 light:border-gray-600 light:hover:bg-gray-600 light:hover:text-white light:focus:ring-gray-500 light:focus:text-white" id="Tiramisu ">Tiramisu </a></li>
                    
                    </ul>
                </div>
            </div>

            </div>

            
            {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 mt-2 mx-auto w-1/6" >
            Submit
            </button> */}
        </div>
      
        
    </>
  )
}