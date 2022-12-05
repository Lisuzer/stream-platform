/**
*@swagger
*components:
*  schemas:
*    Series:
*      type: object
*      required:
*           - name
*      properties:
*           id:
*             type: integer
*             description: The auto-generated id of the series
*             example: 1
*           name:
*             type: string
*             description: Series name
*             example: "The Office"
*           episodes:
*             type: array
*             items:
*               $ref: '#/components/schemas/Episode'
*    Episode:
*      type: object
*      required:
*           - name
*           - season
*           - episode
*           - description
*           - rating
*      properties:
*           id:
*             type: integer
*             description: The auto-generated id of the episode.
*           name:
*             type: string
*             description: Episode name
*           season:
*             type: integer
*             description: Episode season
*           episode:
*             type: integer
*             description: Episode number
*           description:
*             type: string
*             description: Episode description
*           rating:
*              type: float
*              description: Episode rating
*      example:
*            id: 1
*            name: Pilot
*            season: 1
*            episode: 1
*            description: The series follows the everyday lives of office employees in the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company
*            rating: 8.8
*/

/**
 * @swagger
 * /series/catalog:
 *  get:
 *    tags:
 *      - series
 *    summary: Returns the list of all series
 *    responses:
 *      200:
 *        description: The list of the series
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Series'
 */

/** 
* @swagger
* /series/{id}:
*  get:
*    tags:
*      - series
*    summary: Get the series by id
*    parameters:
*      - name: id
*        in: path
*        description: series id
*        required: true
*        schema:
*          type: integer
*          format: int64
*    responses:
*      200:
*        description: The series description by id
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Series'
*      400:
*        description: Invalid ID supplied
*      404:
*        description: Series not found
*  put:
*    tags:
*      - series
*    summary: Update the series by the id
*    parameters:
*      - name: id
*        in: path
*        description: id of the series
*        required: true
*        schema:
*          type: integer
*          format: int64
*    requestBody:
*      description: Update the series
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/Series'
*    responses:
*      200:
*        description: The series was updated successfully
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Series'
*      400:
*        description: Invalid ID supplied
*      404:
*        description: Series not found
*  delete:
*    tags:
*      - series
*    summary: Delete the series by id
*    parameters:
*      - name: id
*        in: path
*        description: id of the series
*        required: true
*        schema:
*          type: integer
*          format: int64
*    responses:
*      200:
*        description: The series was deleted successfully
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Series'
*      400:
*        description: Invalid ID supplied
*      404:
*        description: Series not found
*/

/**
* @swagger
* /series/save:
*  post:
*    tags:
*      - series
*    summary: Create a new series
*    requestBody:
*      description: Create a new series
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/Series'
*    responses:
*      200:
*        description: The series was created successfully
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Series'
*      400:
*        description: Invalid input
*/

/**
* @swagger
* /series/add-episode/{id}:
*  put:
*    tags:
*      - series
*    summary: Add a new episode to the series
*    parameters:
*      - name: id
*        in: path
*        description: id of the series
*        required: true
*        schema:
*          type: integer
*          format: int64
*    requestBody:
*      description: Add a new episode to the series
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/Episode'
*    responses:
*      200:
*        description: The episode was added successfully
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Series'
*      400:
*        description: Invalid input
*/