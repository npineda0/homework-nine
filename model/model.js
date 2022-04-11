//this info stimulates getting data from
//a database
var menuContent = `<div class="menuContent">

<nav class="menuNav">
    <a href="#">All products</a>
    <a href="#">Featured</a>
    <a href="#">Previous Orders</a>
    <a href="#">Favorite Products</a>
</nav>

<p class="menuHeader">Menu</p>

<div class="drinksMenu">
<p class="drinksHeader">Drinks</p>
<hr>

<div class="drinksRow">
    <div class="hotCoffee">
        <div class="hotCoffeeImg"></div>
        <p class="hotCoffeeTxt">Hot Coffees</p>
    </div>

    <div class="hotTea">
        <div class="hotTeaImg"></div>
        <p class="hotTeaTxt">Hot Teas</p>
    </div>
</div>

<div class="drinksRow"> 
    <div class="hotDrinks">
        <div class="hotDrinksImg"></div>
        <p class="hotDrinksTxt">Hot Drinks</p>
    </div>

    <div class="Frappuccino"> 
        <div class="FrappuccinoImg"></div>
        <p class="FrappuccinoTxt">Frappuccino <br /> Beverages</p>
    </div>
</div>

<div class="drinksRow">
    <div class="coldCoffee">
        <div class="coldCoffeeImg"></div>
        <p class="coldCoffeeTxt">Cold Coffees</p>
    </div>

    <div class="icedTea"> 
        <div class="icedTeaImg"></div>
        <p class="icedTeaTxt">Iced Teas</p>
    </div>
</div>

<div class="drinksRow">
    <div class="coldDrinks">
        <div class="coldDrinksImg"></div>
        <p class="coldDrinksTxt">Cold Drinks</p>
    </div>
</div>
</div>

<div class="foodMenu">
    <p class="foodHeader">Food</p>
    <hr>

<div class="foodRow"> 
    <div class="hotBreakfast">
        <div class="hotBreakfastImg"></div>
        <p class="hotBreakfastTxt">Hot Breakfast</p>
    </div>

    <div class="bakery"> 
        <div class="bakeryImg"></div>
        <p class="bakeryTxt">Bakery</p>
    </div>
</div>

<div class="foodRow">
    <div class="lunch">
        <div class="lunchImg"></div>
        <p class="lunchTxt">Lunch</p>
    </div>

    <div class="snacksSweets"> 
        <div class="snacksSweetsImg"></div>
        <p class="snacksSweetsTxt">Snacks & <br /> Sweets</p>
    </div>
</div>

<div class="foodRow">
    <div class="oatmealYogurt">
        <div class="oatmealYogurtImg"></div>
        <p class="oatmealYogurtTxt">Oatmeal & <br /> Yogurt</p>
    </div>
</div>
</div>

<div class="atHomeCoffeeMenu">
    <p class="atHomeCoffeeHeader">At Home Coffee</p>
    <hr>

<div class="atHomeRow"> 
    <div class="wholeBean">
        <div class="wholeBeanImg"></div>
        <p class="wholeBeanTxt">Whole Bean</p>
    </div>

    <div class="instant"> 
        <div class="instantImg"></div>
        <p class="instantTxt">Bakery</p>
    </div>
</div>
</div>

</div>`;
var rewardsContent = `<div class="rewardsContent">
            <div class="rewardsHeader">
                <p>SOLID GROUND COFFEE HOUSE REWARDS</p>
            </div>
            
            <div class="hero">
                <p class="bigHeader">FREE COFFEE <BR /> IS A TAP AWAY</p>
                <P class="smallHeader">Join now to start earning Rewards.</P>
                <span><p class="btnTxt">Join now</p></span>
            </div>

            <div class="startHeader">Getting started is easy</div>
            <div class="startSubHeading">Earn Stars and get rewarded in a few easy steps.</div>

            <div class="startStepsRow">
                <div class="startSteps">
                    <div class="stepsNum">
                        <p>1</p>
                    </div>
                    <p class="startStepsHeader">Create an account</p>
                    <p class="startStepsTxt">To get started, join now. You can also join in the app to get access to the full range of Solid Ground Coffee House® Rewards benefits.</p>
                </div>

                <div class="startSteps">
                    <div class="stepsNum"><p>2</p></div>
                    <p class="startStepsHeader">Order and pay how you’d like</p>
                    <p class="startStepsTxt">Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how</p>
                </div>

                <div class="startSteps">
                    <div class="stepsNum"><p>3</p></div>
                    <p class="startStepsHeader">Earn Stars, get Rewards</p>
                    <p class="startStepsTxt">As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
                </div>
            </div>

</div>`;
var giftCardsContent = `<div class="giftCardsContent">
<div class="giftHeader">
    <p>FEATURED</p>
    <p class="color">See all</p>
</div>

<div class="giftCardRow">
    <div class="giftCards1"></div>
    <div class="giftCards2"></div>
    <div class="giftCards3"></div>
</div>

<div class="giftHeader">
    <p>BIRTHDAY</p>
    <p class="color">See all</p>
</div>

<div class="giftCardRow">
    <div class="giftCards1"></div>
    <div class="giftCards2"></div>
    <div class="giftCards3"></div>
</div>

<div class="giftHeader">
    <p>THANK YOU</p>
    <p class="color">See all</p>
</div>

<div class="giftCardRow">
    <div class="giftCards1"></div>
    <div class="giftCards2"></div>
    <div class="giftCards3"></div>
</div>
</div>`;
var findContent = `<div class="findStoreContent">
<div class="findStoreBox">
    <p>Find a store</p>
    <span class="searchBtn"><p>Filter</p></span>
</div>
<hr>

<div class="findStoreMap"></div>

<div class="storeLocations">
    <p>Lorem ipsum dolor <br /> Lorem ipsum dolor sit amet <br /> lorem  <br /> Optio laborum </p>
    <p class="directions">Directions</p>
</div>

<div class="storeLocations">
    <p>Lorem ipsum dolor <br /> Lorem ipsum dolor sit amet <br /> lorem  <br /> Optio laborum </p>
    <p class="directions">Directions</p>
</div>

<div class="storeLocations">
    <p>Lorem ipsum dolor <br /> Lorem ipsum dolor sit amet <br /> lorem  <br /> Optio laborum </p>
    <p class="directions">Directions</p>
</div>

<div class="storeLocations">
    <p>Lorem ipsum dolor <br /> Lorem ipsum dolor sit amet <br /> lorem  <br /> Optio laborum </p>
    <p class="directions">Directions</p>
</div>
</div>`;

//this function is being called from the app.js
//and it has the page name
export function modelPageName(pgName) {
    console.log(pgName);

    $("#app").html(eval(pgName));
}