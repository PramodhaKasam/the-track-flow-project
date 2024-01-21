import {items} from './products.js'

let dateDelivery;
let nameProduct;
let today = new Date();
let data = today.getDate();
export let deliveryStatus ;
items.forEach((item) =>{
    dateDelivery = item.deliveryDate ;
    nameProduct = item.productName;
})
console.log(dateDelivery);
let dateDelivered = dateDelivery.slice(0, 2);
console.log(dateDelivered);

if(Number(data) > Number(dateDelivered)){
    deliveryStatus ='Delivered';
}
else(Number(data) < Number(dateDelivered))
     deliveryStatus = 'Undelivered';


