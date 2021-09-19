var crustPrice = new Array(250,200,350);
var sizePrice = new Array(350,500,700);
var toppingsPrice = new Array(140,180,220);
toppingOptions = new Array("garlic-butter","pepperoni","proscuitto");
// Business Logic
function processPizza(flavor,size,crust,topping){
    this.flavor=flavor;
    this.size=size;
    this.crust=crust;
    this.topping=topping;
}
// user 
$(document).ready(function(){
    $("form#order-form").submit(function(){
        event.preventDefault();
        let flavor = $('input[name="flavors"]:checked').val();
        let crust = $('input[name="crust"]:checked').val();
        let size = $('input[name="pizza-size"]:checked').val();
        let toppingSelected = [];
        $.each($("input[name='offers']:checked"), function() {
            toppingSelected.push($(this).val());
        });
    });
});
