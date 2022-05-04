# Backend

Endpoints:

- GET "/api/get-items" - returns an array of all the items in the database

- GET "/api/get-item/:id" - requires the item id in params, returns an object with all the item data

- GET "/api/get-items/:cat" - requires the category name in params, returns an array of all items in that category. Categories are: "Fitness, Medical, Lifestyle, Entertainment, Gaming, Industrial, Pets and Animals". CASE SENSITIVE! Pets and Animals can be formated either ("/api/get-items/Pets and Animals") or ("/api/get-items/Pets%20and%20Animals").

- GET "/api/get-items/:location" - requires the body location in params, returns an array of all items for that location. Locations include: "Wrist, Arms, Head, Chest, Waist, Neck". CASE SENSITIVE! Must capitalize first letters.

- GET "/api/get-company/:id" - requires the company id in params, returns an object with the company data.

- POST "/api/place-order" - expects a json body with the customer information, as well as the item id and quantity for each item purchased.
  Ex: { customerInfo: [], order: [{_id: 6980, qnt: 2}, {_id: 6629, qnt: 1}]}

//=====Post=====

1. first way:

orders = [
{
"id": 1001,
"customerInfo":
{
"firstName":"John",
"lastName":"Doe",
"address":"Montreal"
},
orderInfo:
[
{_id: 6980, qnt: 2},
{_id: 6629, qnt: 1}
]

}
]

2. second way:

{
"id": 1001,
"customerInfo":
{
"firstName":"John",
"lastName":"Doe",
"address":"Montreal"
},
orderInfo:
{

"6980":{ qnt: 2},
"6629":{ qnt: 1}
}

}
]
