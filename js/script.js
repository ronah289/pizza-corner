//initialize values
//prices
var crustPrice = new Array(250,200,350);
var sizePrice = new Array(350,500,700);
var toppingsPrice = new Array(140,180,220);
function customerPrices(flavorName,crustName,sizeName,toppingString){
    this.flavorName = flavorName;
    this.crustName = crustName;
    this.sizeName = sizeName;
    this.toppingString = toppingString.toString(',');
}

$(document).ready(function(){
$("button#submit").click(function(event){
    //flavor
    event.preventDefault();
    var selectedFlavor = document.getElementsByName("flavors");
    for(i=0;i<selectedFlavor.length;i++){
        if(selectedFlavor[i].checked){
            // alert(selectedFlavor[i].value);
            var flavorName = selectedFlavor[i].value;
            // alert(flavorName);
        }
    }
    //crust
    var selectedCrust = document.getElementsByName("crust");
    for(i=0;i<selectedCrust.length;i++){
        if(selectedCrust[i].checked){
            var crustIndex = i;
            var crustName = selectedCrust[i].value;
            //  alert(crustIndex +"..."+crustName);
            // return(crustIndex,crustName);
        }
    }
    //size
    var selectedSize = document.getElementsByName("pizza-size");
    for(i=0;i<selectedSize.length;i++){
        if(selectedSize[i].checked){
            var sizeIndex = i;
            var sizeName = selectedSize[i].value;
            // alert(sizeIndex+"..."+sizeName);
            // return(sizeIndex,sizeName);
        }
    }
    //toppings
    var toppingString = new Array();
    var toppingIndex = new Array();
      $("input[name='offers']:checked").each(function (i) { 
    // Alert your values
    // alert("The index is " + i + " and the value is " + $(this).val());
    // Push the value and index onto the array
    toppingIndex.push(toppingsPrice[i]);
    toppingString.push(($(this).val()));
    // topping.push(new topping(i,($(this).val())));
});
// alert(toppingIndex.length+"...\t"+toppingString.toString(','));
// sum of toppings
var toppingTotal = 0;
// alert(toppingIndex);
for(i=0;i<toppingIndex.length;i++){
    toppingTotal += toppingIndex[i];
}
// alert(toppingTotal);
customerPrices.prototype.order ="<li><b>"+flavorName+"</b>"+crustName+"<i>"+sizeName+"</i>"+toppingString+"</li>";
customerPrices.prototype.rowCost = crustPrice[crustIndex]+sizePrice[sizeIndex]+toppingTotal;
var firstCustomer = new customerPrices(flavorName,crustName,sizeName,toppingString);

$("#customer-order").append('<tr><td id="p-flavor">' + firstCustomer.flavorName + '</td><td id="p-size">' + firstCustomer.sizeName + '</td><td id="p-crust">' + firstCustomer.crustName + '</td><td id="p-topping">' + firstCustomer.toppingString + '</td><td id="totals">' + firstCustomer.rowCost + '</td></tr>');


// $("#cost").append('<h1>Bill is '+totalPrice+'</h1>')
// $("#d-fee").append('<h3>Delivery fee is ksh. 300</h3>');

// var rowCost = crustPrice[crustIndex]+sizePrice[sizeIndex]+toppingTotal;
// alert(firstCustomer.rowCost+"..."+firstCustomer.order);

    // alert(toppingNames.toString());

//    var customer = new  customerPrices(crustIndex,sizeIndex,newTopping);
//    alert(customer);
$("button#checkout").click(function(){
    $("#cost").append('<h1>Bill is value:::</h1>')
    $("shown1").hide();
    $("button#checkout").hide();
    $("#b1").show();
    $("#b2").show();
    $("#cost").show();
    $("#d-fee").show();
});
});
});