//initialize values
//prices
var total = 0;
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
    $("button#submit").text("Add Pizza");
    //flavor
    event.preventDefault();
    var selectedFlavor = document.getElementsByName("flavors");
    for(i=0;i<selectedFlavor.length;i++){
        if(selectedFlavor[i].checked){
            var flavorName = selectedFlavor[i].value;
        }
    }
    //crust
    var selectedCrust = document.getElementsByName("crust");
    for(i=0;i<selectedCrust.length;i++){
        if(selectedCrust[i].checked){
            var crustIndex = i;
            var crustName = selectedCrust[i].value;
        }
    }
    //size
    var selectedSize = document.getElementsByName("pizza-size");
    for(i=0;i<selectedSize.length;i++){
        if(selectedSize[i].checked){
            var sizeIndex = i;
            var sizeName = selectedSize[i].value;
        }
    }
    //toppings
    var toppingString = new Array();
    var toppingIndex = new Array();
      $("input[name='offers']:checked").each(function (i) { 
    toppingIndex.push(toppingsPrice[i]);
    toppingString.push(($(this).val()));
});
// alert(toppingIndex.length+"...\t"+toppingString.toString(','));
// sum of toppings
var toppingTotal = 0;
for(i=0;i<toppingIndex.length;i++){
    toppingTotal += toppingIndex[i];
}
customerPrices.prototype.order ="<li><b>"+flavorName+"</b>"+crustName+"<i>"+sizeName+"</i>"+toppingString+"</li>";
customerPrices.prototype.rowCost = crustPrice[crustIndex]+sizePrice[sizeIndex]+toppingTotal;
var firstCustomer = new customerPrices(flavorName,crustName,sizeName,toppingString);
$("#customer-order").append('<tr><td id="p-flavor">' + firstCustomer.flavorName + '</td><td id="p-size">' + firstCustomer.sizeName + '</td><td id="p-crust">' + firstCustomer.crustName + '</td><td id="p-topping">' + firstCustomer.toppingString + '</td><td id="totals">' + firstCustomer.rowCost + '</td></tr>');
total += crustPrice[crustIndex]+sizePrice[sizeIndex]+toppingTotal;
$("button#checkout").click(function(){
    event.preventDefault();
    let x = total;
    $("#cost").append('<h1>Bill value is ksh.'+(x+250)+'</h1>')
    $("#order-form").hide();
    $("#cost").show();
    $("button#checkout").hide();
    $("#b1").show();
    $("#b2").show();
    $("#cost").show();
    $("#d-fee").show();
    $("#shown1").hide();
});
$("#b1").click(function(){
    $("#delivery-form").show();
    $("#cost").hide();
    $("#b1").hide();
    $("#b2").hide();
});
$("#p-order").click(function(){
    var customerName = $("#username").val();
    alert(customerName +": your order will be delivered shortly.")
});
$("#b2").click(function(){
    $("#cost").hide();
    $("#output").html("<h1><del>Order Cancelled</del></h1>")
    $("#b1").hide();
    $("#b2").hide();
    $("#order-form").show();
    $("#shown1").show();
});
});
})