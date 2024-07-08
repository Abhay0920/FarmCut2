import { foodItem } from "./foodItem.js";

console.log(foodItem);

function displayItems(){
    var biryani = document.getElementById('Biryani');
    var chicken = document.getElementById('Chicken');
    var paneer = document.getElementById('Paneer');
    var vegetable = document.getElementById('Vegetable');
    var chinese = document.getElementById('Chinese');
    var southIndian = document.getElementById('South-indian');

    const biryaniData = foodItem.filter(item=> item.category == 'Biryani');
    console.log(biryaniData);

    const chickenData = foodItem.filter(item=> item.category == 'Chicken');
    console.log(chickenData);

    const paneerData = foodItem.filter(item=> item.category == 'Paneer');
    console.log(paneerData);

    const vegetableData = foodItem.filter(item=> item.category == 'Vegetable');
    console.log(vegetableData);

    const chineseData = foodItem.filter(item=> item.category == 'Chinese');
    console.log(chineseData);

    const southIndianData = foodItem.filter(item=> item.category == 'South-indian');
    console.log(southIndianData);

    biryaniData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star=document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' ' + item.rating;

        var heart=document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','iteam-name');
        itemName.innerText=  item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText='Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        biryani.appendChild(itemCard);   
    })

    chickenData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star=document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' ' + item.rating;

        var heart=document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','iteam-name');
        itemName.innerText=  item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText='Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chicken.appendChild(itemCard);   
    })


    paneerData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star=document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' ' + item.rating;

        var heart=document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','iteam-name');
        itemName.innerText=  item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText='Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        paneer.appendChild(itemCard);   
    })

    vegetableData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star=document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' ' + item.rating;

        var heart=document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','iteam-name');
        itemName.innerText=  item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText='Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        vegetable.appendChild(itemCard);   
    })

    chineseData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star=document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' ' + item.rating;

        var heart=document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','iteam-name');
        itemName.innerText=  item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText='Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chinese.appendChild(itemCard);   
    })

    southIndianData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star=document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' ' + item.rating;

        var heart=document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','iteam-name');
        itemName.innerText=  item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText='Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard);   
    })
}
displayItems();

const categoryListData = [...new Map(foodItem.map(item=>[item['category'],item])).values()];
console.log(categoryListData);

function categoryLists(){
    var categoryList = document.getElementById('category-list');

    categoryListData.map(item =>{
        var listCard = document.createElement('div');
        listCard.setAttribute('class','list-card');

        var listImg = document.createElement('img');
        listImg.src= item.img;

        var listName = document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#' +item.category);

        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard = listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard);
    })
   
}
categoryLists();

document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click' ,addToCart);
})

var cartData = [];
function addToCart(){
      console.log(this.parentNode.nextSibling.nextSibling);
      var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
      var itemobj = foodItem.find(element=>element.name==itemToAdd);
      console.log(itemobj);

      var index = cartData.indexOf(itemobj);
      if(index === -1){
        document.getElementById(itemobj.id).classList.add('toggle-heart');
        cartData= [...cartData,itemobj];
        console.log(cartData);
      }
      else if(index > -1){
        alert('Adding to card');
      }

      document.getElementById('cart-plus').innerText = ' ' +cartData.length + 'Items';

      document.getElementById('m-cart-plus').innerText = ' ' +cartData.length ;
    totalAmount();
    cartItems();
}

function cartItems(){
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML=' ';

    cartData.map(item=>{
        var tableRow = document.createElement('tr');

        var RowData1 = document.createElement('td');
        var img =document.createElement('img');
        img.src= item.img;
        RowData1.appendChild(img);

        var RowData2 = document.createElement('td');
        RowData2.innerText=item.name;

        var RowData3 = document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerHTML = '-' ;
        var span = document.createElement('span');
        span.innerText=item.quantity;
       
        var btn2= document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerHTML = '+';

        RowData3.appendChild(btn1);
        RowData3.appendChild(span);
        RowData3.appendChild(btn2);


        var RowData4 = document.createElement('td');
        RowData4.innerText= item.price;

        tableRow.appendChild(RowData1);
        tableRow.appendChild(RowData2);
        tableRow.appendChild(RowData3);
        tableRow.appendChild(RowData4);

         tableBody.appendChild(tableRow);
    })

    document.querySelectorAll('.increase-item').forEach(item=> {
        item.addEventListener('click', incrementItem);
    })

    document.querySelectorAll('.decrease-item').forEach(item=> {
        item.addEventListener('click', decrementItem);
    })   
}

var currPrice =0;
function incrementItem(){
    let itemToInc = this.parentNode.previousSibling.innerText;
    console.log(itemToInc);

    var incobj = cartData.find(element=>element.name ==itemToInc);
    incobj.quantity +=1;

    currPrice=(incobj.price*incobj.quantity - incobj.price*(incobj.quantity-1))/(incobj.quantity-1);

    incobj.price = currPrice*incobj.quantity;
    totalAmount();
    cartItems();
}

var flag = false;
function decrementItem(){
    let itemToDec= this.parentNode.previousSibling.innerText;
    let decobj = cartData.find(element=>element.name==itemToDec);
    let ind= cartData.indexOf(decobj);

    if(decobj.quantity > 1){
        currPrice= (decobj.price*decobj.quantity - decobj.price*(decobj.quantity - 1))/(decobj.quantity);
        decobj.quantity-= 1;
        decobj.price= currPrice*decobj.quantity;
    }
    else{
        if (decobj.id) { // Check if id exists
            document.getElementById(decobj.id).classList.remove('toggle-heart');
        }
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerHTML=' ' + cartData.length + 'Items';

        document.getElementById('m-cart-plus').innerHTML=' ' + cartData.length ;

        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');

            document.getElementById('category-list').classList.toggle('food-items');
             document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
            
            document.getElementById('cart-page').classList.toggle('cart-toggle');

             document.getElementById('category-header').classList.toggle('toggle-category');

            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag = false;
            alert("Currently no item i cart");

        }
    }
    totalAmount();
    cartItems();
}

function totalAmount(){
    var sum =0;
    cartData.map(item=>{
        sum +=item.price;
    })
    document.getElementById('total-item').innerText= 'Total Item :' +cartData.length ;

    document.getElementById('total-price').innerText= 'Total Price : $' +sum ;
    document.getElementById('m-total-amount').innerText= 'Total Price : $' +sum ;
}

document.getElementById('cart-plus').addEventListener('click',cartToggle );
document.getElementById('m-cart-plus').addEventListener('click',cartToggle);
 
function cartToggle(){
      if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');

        document.getElementById('category-list').classList.toggle('food-items');
         document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
        
        document.getElementById('cart-page').classList.toggle('cart-toggle');

        document.getElementById('category-header').classList.toggle('toggle-category');

        document.getElementById('checkout').classList.toggle('cart-toggle');

        flag = true;
      }
      else{
        alert("Currently no items in the cart");
      }
}

document.getElementById('add-address').addEventListener('click', addAddress);

document.getElementById('m-add-address').addEventListener('click', addAddress);
function addAddress(){
    var address = prompt('Enter Your Address');
    if(address){
        document.getElementById('add-address').innerText = ' ' + address;

         document.getElementById('m-add-address').innerText = ' ' + address;       
    }
    else{
         document.getElementById('add-address').innerText = 'Your Address';
        alert("Address not Added");
    }
}


window.onresize = window.onload = function(){
    var size = window.innerWidth;
    console.log(size);
    if(size < 800){
        var cloneFoodItems = document.getElementById('food-items').cloneNode(true);
        var cloneCartPage = document.getElementById('cart-page').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('food-items').after(cloneCartPage);
        addEvents();
    }

    if(size > 800){
        var cloneFoodItems = document.getElementById('food-items').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('header').after(cloneFoodItems);

        var cloneCartPage = document.getElementById('cart-page').cloneNode(true);
        document.getElementById('cart-page').remove();
        document.getElementById('food-items').after(cloneCartPage);
        addEvents();
    }
}

function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click',addToCart);
    });

    document.querySelectorAll('.increase-item').forEach(item=> {
        item.addEventListener('click', incrementItem);
    })

    document.querySelectorAll('.decrease-item').forEach(item=> {
        item.addEventListener('click', decrementItem);
    }) 
}

