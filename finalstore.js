if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var myRemoveButtons = document.getElementsByClassName('btn-danger')  /*remove buttons combined */
    var itemcartname = document.getElementsByClassName("cart-item-title");
    var myAddingButtons = document.getElementsByClassName('button1'); /*adding chart buttons combined */
    var CartShopContainer = document.getElementsByClassName("cart-items")[0];// console.log(CartShopContainer)
    var CartShopContainerList = document.getElementsByClassName("cart-row");// console.log(CartShopContainerList)
    var CartShopTotalContainer = document.getElementsByClassName("cart-total")[0];//console.log(CartShopTotalContainer)
    var heartbuttonList = document.getElementsByClassName("cart-item cart-column");//console.log(heartbuttonList)
    var heartbuttonList = document.querySelectorAll("#heart");// console.log(heartbuttonList)
    var addbutton = document.getElementsByClassName("button1");





    function removebutton(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove()
        updateTotal()
    }



    function quantityChanged(event) {
        var deletation = event.target
        if (deletation = NaN) {
            deletation.value == 1


        }
        updateTotal();
    }

    for (let i = 0; i < myRemoveButtons.length; i++) {
        var rvbutton = myRemoveButtons[i]
        rvbutton.addEventListener('click', removebutton)
    }
    for (let b = 0, i = 0; b, i < myAddingButtons.length; b++, i++) {

        myAddingButtons[i].addEventListener('click', function addNewItem2() {


            itemcartname[b].parentElement.parentElement.style.display = "flex"

        })

    }
    for (let i = 1; i < (CartShopContainerList.length); i++) {
        var quantityElement = CartShopContainerList[i].getElementsByClassName("cart-quantity-input")[0];// console.log(quantityElement)
        quantityElement.addEventListener('change', quantityChanged)
    }


    function updateTotal() {
        var total = 0;
        for (let i = 1; i < (CartShopContainerList.length); i++) {// console.log(i)

            var priceElement = CartShopContainerList[i].getElementsByClassName("cart-price")[0]//console.log(priceElement)

            var quantityElement = CartShopContainerList[i].getElementsByClassName("cart-quantity-input")[0]; //console.log(quantityElement)

            // var totalElement=CartShopTotalContainer.getElementsByClassName("cart-total-price")[0]; console.log(totalElement)

            var price = parseFloat(priceElement.innerText.replace("$", ""));//console.log(price)

            var quantity = quantityElement.value; //console.log(quantity)
            total = total + (price * quantity); //console.log(total)

        }
        CartShopTotalContainer.getElementsByClassName("cart-total-price")[0].innerHTML = `$${total}`;
    }


    for (let i = 0; i < heartbuttonList.length; i++) {
        var eventheart = heartbuttonList[i]
        eventheart.addEventListener("click", function (e) {
            e.target.classList.toggle("red")
            //alert("its working but")
            console.log(eventheart)


        })
        function createChart(e) {
            let eventEl = e.currentTarget; console.log(eventEl)
            let pic = eventEl.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute("src");
            var price = eventEl.parentElement.firstElementChild.innerText
            let Title = eventEl.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute("name")

                ; console.log(eventEl)

            let item = document.createElement("div")
            let itemContent = 
            `<div class="cart-row">
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src=${pic} width="100" height="100">
                    <span class="cart-item-title">${Title}</span>
                </div>
                <span class="cart-price cart-column">${price}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" value="1" min="1">
                    <button class="btn btn-danger" type="button">REMOVE</button>&nbsp&nbsp&nbsp&nbsp
                    <span id="heartx" class='bi bi-suit-heart-fill'></span>
                </div>
            </div>`
            item.innerHTML = itemContent
            let removebutton = item.getElementsByClassName("btn btn-danger")[0]; removebutton.addEventListener("click", (e) =>{ e.target.parentElement.parentElement.remove(),updateTotal()});
            let newtotal=removebutton.parentElement.firstElementChild;newtotal.addEventListener("change",(e)=>{updateTotal()})
            let toggleheart=item.getElementsByClassName("bi bi-suit-heart-fill")[0];console.log(toggleheart);toggleheart.addEventListener("click",(e)=>{
                
                e.target.classList.toggle("red")})
            CartShopContainer.appendChild(item);updateTotal()
        }


    }
    for (let i = 0; i < addbutton.length; i++) {
        var element = addbutton[i];
        element.addEventListener("click", createChart)
        
    }

}








