This API has been made for Task 3 of the GDSC 2023-24 Task Round. 
All CRUD methods have been implemented.

API is live at:- https://gdsc-task3-todoapp.adaptable.app/

API endpoints:-
1. GET /api/v1/todos
    Returns all todos in JSON
2. GET /api/v1/todos/:id
    Returns a single in JSON specified by the 'id' parameter
3. POST /api/v1/todos/
    - Creates a todo and adds it through the     Mongoose Model 'Todo' in the database
    - Returns the created todo in JSON
4. PUT /api/v1/todos/:id
    - Updates a todo in the database
    - Returns the updated todo in JSON
5. DELETE /api/v1/todos/:id
    - Deletes a todo in the database
    - Returns the deleted todo

Some example ids:
6587125688f81c7ce615b2cf, 6587125688f81c7ce615b2d0 , 658716ef42489300e9e734c7,
65872e156e2d2c3f5311ffa6