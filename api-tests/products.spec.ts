import {test} from '@playwright/test';


test('muestre todos los productos',async ({request}) => {

    const response = await request.get('/products');
    const responseBody = await response.json();
    console.log(responseBody);
})