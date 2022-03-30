# Backend

Endpoints:

- GET "/api/get-items" - returns an array of all the items in the database

- GET "/api/get-item/:id" - requires the item id in params, returns an object with all the item data

- GET "/api/get-items/:cat" - requires the category name in params, returns an array of all items in that category. Categories include: "fitness, medical, lifestyle, entertainment".

- GET "/api/get-items/:location" - requires the body location in params, returns an array of all items for that location. Locations include: "wrist, arms, head, chest, waist, neck".

- POST "/api/place-order" - expects a json body with the customer information, as well as the item id and quantity for each item purchased. 
Ex: { customerInfo: [], order: [{_id: 6980, qnt: 2}, {_id: 6629, qnt: 1}]}