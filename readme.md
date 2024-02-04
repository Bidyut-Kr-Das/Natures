# Natours Website

- developed by [Bidyut Kr. Das](https://github.com/Bidyut-Kr-Das)

> Frontend under development

> Backend Api guide

- database is hosted on mongoDB
- api features

  - > http method - GET

    - `returns all tours`

      ```bash
      /api/v1/tours
      ```

    - `returns searched field that matches with the value `

      ```bash
      /api/v1/tours?field=value
      ```

    - `returns searched field that is greater than the value`
      available options
      `gt` = greater than
      `lt` = less than
      `gte` = greater than equal to
      `lte` = less than equal to
      works in all number fields

      ```bash
      /api/v1/tours?field[gt]=value
      ```

  - > http method - POST

    - `Creates a new tour(validation applied)`

      ```bash
      /api/v1/tours
      ```
