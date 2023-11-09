






** Five project features **

* In my project, I have implemented mongodb crud operation anf json web token. Verify the token if requested user is valid user or not.
* The show all button is funtional. In the home page , I have shown only six items. When user clicked on show all button they will redirected to available food page where all items are shown.
* Any user can add foods for donation in Add Fodd page. It will store in database.
* Every food item cards have a details button.Through this button the valid user (if verified by token) redirected to the detailes page. In that page the user can request for that food by clicking request button. On click the button , a modal will open , take the information and send the request item to database in requested collection.
* If a user mistakenly requested for his own food then a warning alert will open. In manage my food section , user can show his added food and also update,delete or manage the food. In manage food section, user can see all his added food which are requested by other people. And he can delivered the food to one requested person. After delivered , the food item is deleted from requested foos as wel as all food collection of database.