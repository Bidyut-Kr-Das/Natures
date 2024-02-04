# Natours Website

- developed by [Bidyut Kr. Das](https://github.com/Bidyut-Kr-Das)

- developed using
  <br>
  <br>
  ![hu](https://skillicons.dev/icons?i=js,ts,nodejs,nextjs,expressjs,mongodb,tailwind)

> Frontend under development

> Backend Api guide

- database is hosted on mongoDB
- api features

  - > http method - GET

    - `returns all tours`

      ```
      /api/v1/tours
      ```

    - `returns searched field that matches with the value `

      ```
      /api/v1/tours?field=value
      ```

    - `returns searched field that is greater than the value`
      available options <br>
      `gt` = greater than <br>
      `lt` = less than <br>
      `gte` = greater than equal to <br>
      `lte` = less than equal to <br>
      works in all number fields

      ```
      /api/v1/tours?field[gt]=value
      ```

  - > http method - POST

    - `Creates a new tour(validation applied)`

      ```
      /api/v1/tours
      ```
