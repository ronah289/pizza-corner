//initialize values
//prices
var crustPrice = new Array(250,200,350);
var sizePrice = new Array(350,500,700);
var toppingsPrice = new Array(140,180,220);
// function customerPrices(crustIndex,sizeIndex){
//     this.crustIndex = crustPrice[crustIndex];
//     this.sizeIndex = sizePrice[sizeIndex];
//     let sum = crustIndex+sizeIndex;
//     alert("sum");
// }

$(document).ready(function(){
$("form#order-form").submit(function(event){
    //flavor
    var selectedFlavor = document.getElementsByName("flavors");
    for(i=0;i<selectedFlavor.length;i++){
        if(selectedFlavor[i].checked){
            // alert(selectedFlavor[i].value);
            let flavorName = selectedFlavor[i].value;
            // alert(flavorName);
        }
    }
    //crust
    var selectedCrust = document.getElementsByName("crust");
    for(i=0;i<selectedCrust.length;i++){
        if(selectedCrust[i].checked){
            let crustIndex = i;
            let crustName = selectedCrust[i].value;
            //  alert(crustIndex +"..."+crustName);
            // return(crustIndex,crustName);
        }
    }
    //size
    var selectedSize = document.getElementsByName("pizza-size");
    for(i=0;i<selectedSize.length;i++){
        if(selectedSize[i].checked){
            let sizeIndex = i;
            let sizeName = selectedSize[i].value;
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
    toppingIndex.push(i);
    toppingString.push(($(this).val()));
    // topping.push(new topping(i,($(this).val())));
});
alert(toppingIndex.length+"...\t"+toppingString.toString(','));

    // alert(toppingNames.toString());

//    var customer = new  customerPrices(crustIndex,sizeIndex,newTopping);
//    alert(customer);
});
});