import { test, expect } from '@playwright/test'

test('creando una orden', async ({request})=>{

 const OrderPayload = {
      "customerDetails": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "address": "1234 Main St.",
        "city": "Rhyolite",
        "zipCode": "89003",
        "country": "United States"
    },
    "items": [
        {
            "productId": "504",
            "quantity": 1
        }
    ]


 };

const orderResponse = await request.post('/orders' , {
    
    data: OrderPayload


});
   
expect(orderResponse.status()).toBe(201);

const orderBody = await orderResponse.json();
console.log(orderBody);
});



