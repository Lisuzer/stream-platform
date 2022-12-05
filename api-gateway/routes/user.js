/**
*@swagger
*components:
*  schemas:
*    User:
*      type: object
*      required:
*           - name
*           - surname
*           - email
*           - password
*           - role
*           - active
*      properties:
*           id:
*             type: integer
*             description: The auto-generated id of the user.
*           name:
*             type: string
*             description: The user name.
*           surname:
*             type: string
*             description: User surname
*           email:
*             type: string
*             description: User email
*           password:
*             type: string
*             description: User password
*           subscribeId:
*              type: integer
*              description: User subscription id
*           role:
*              type: string
*              description: User role
*           active:
*              type: boolean
*              description: User active status
*      example:
*            id: 1
*            name: John
*            surname: Doe
*            email: "random@example.com"
*            password: password
*            subscribeId: 1
*            role: user
*            active: true
*/

/**
 * @swagger
 * /user/index:
 *  get:
 *    tags:
 *      - user
 *    summary: Returns the list of all the users
 *    responses:
 *      200:
 *        description: The list of the users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */

/** 
* @swagger
* /user/{id}:
*  get:
*    tags:
*      - user
*    summary: Get the user by id
*    parameters:
*      - name: id
*        in: path
*        description: id of the user
*        required: true
*        schema:
*          type: integer
*          format: int64
*    responses:
*      200:
*        description: The user description by id
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/User'
*      400:
*        description: Invalid ID supplied
*      404:
*        description: User not found
*  put:
*    tags:
*      - user
*    summary: Update the user by the id
*    parameters:
*      - name: id
*        in: path
*        description: id of the user
*        required: true
*        schema:
*          type: integer
*          format: int64
*    requestBody:
*      description: Update the user
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/User'
*    responses:
*      200:
*        description: The user was updated successfully
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/User'
*      400:
*        description: Invalid ID supplied
*      404:
*        description: User not found
*  delete:
*    tags:
*      - user
*    summary: Delete the user by id
*    parameters:
*      - name: id
*        in: path
*        description: id of the user
*        required: true
*        schema:
*          type: integer
*          format: int64
*    responses:
*      200:
*        description: The user was deleted successfully
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/User'
*      400:
*        description: Invalid ID supplied
*      404:
*        description: User not found
*/

/**
* @swagger
* /user/save:
*  post:
*    tags:
*      - user
*    summary: Create a new user
*    requestBody:
*      description: Create a new user
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/User'
*    responses:
*      200:
*        description: The user was created successfully
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/User'
*      400:
*        description: Invalid input
*/

/**
* @swagger
* /user/set-subscribe/{id}:
*  put:
*    tags:
*      - user
*    summary: Update the user subscription
*    parameters:
*      - name: id
*        in: path
*        description: id of the user
*        required: true
*        schema:
*          type: integer
*          format: int64
*    requestBody:
*      description: Update the user subscription
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/User'
*    responses:
*      200:
*        description: The user subscription was updated successfully
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/User'
*      400:
*        description: Invalid input
*/