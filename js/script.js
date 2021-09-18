//initialize values
//prices
var crustPrice = new Array(250,200,350);
var sizePrice = new Array(350,500,700);
var toppingsPrice = new Array(140,180,220);
class Customer {
    constructor(flavor, crust, size, toppings) {
        this.flavor = flavor;
        this.crust = crust;
        this.size = size;
        this.toppings = toppings;
    }
}

$(document).ready(function(){
$("form#order-form").submit(function(event){
    //flavor
    var selectedFlavor = document.getElementsByName("flavors");
    for(i=0;i<selectedFlavor.length;i++){
        if(selectedFlavor[i].checked){
            // alert(selectedFlavor[i].value);
            alert(i);
        }
    }
});
});