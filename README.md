************* Backend-Application for ShoppyGloby *************

extract files from zip folder or clone the project from git hub.

git clone : https://github.com/prudhvi-marada/backend-shoppyGlobe.git 

install the dependecies : npm install 

run the applications    : npm start 


MongoDb Atlas:


💾  This project uses MongoDB Atlas, a cloud-hosted NoSQL database service, to store and manage product data, user information, and cart items.

Routes are Tested with Thunder Client: 

screenshots of testing api's are given below:

1) Post method:To add new product  (http://localhost:3000/products/newproduct) -> 

![Post](screenshots/Screenshot_1.png) 

2) Get method:To fetch all products (http://localhost:3000/products/) ->

![Get](screenshots/Screenshot_2.png) 

3) Get method : To fetch particular product by id (http://localhost:3000/products/:id) 

![Get](screenshots/Screenshot_3.png)

4) Post method : To register (http://localhost:3000/register)

![Post](screenshots/Screenshot_4.png)

5) Post method : To login (http://localhost:3000/login)

![Post](screenshots/Screenshot_5.png)

6) Delete method : To delete item from cart (http://localhost:3000/cart/:id)

![Delete](screenshots/Screenshot_6.png)

Mongo db collections :

7) users :

![users](screenshots/Screenshot_7.png)

8) carts :

![carts](screenshots/Screenshot_8.png)

9) products :

![products](screenshots/Screenshot_9.png) 

10) Put method : To update items in the cart (http://localhost:3000/cart/:id) 

![Put](screenshots/Screenshot_10.png) 

11) Post method : To add items to the cart (http://localhost:3000/cart/) 

![Post](screenshots/Screenshot_11.png) 

12) Error Handling : fetching invalid product id 

![Get](screenshots/Screenshot_12.png) 

