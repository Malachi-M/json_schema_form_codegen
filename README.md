# json_schema_form_codegen

## Overview
This project is an implementation of [react-json-schema-form](https://rjsf-team.github.io/react-jsonschema-form/) to dynamically generate a form based on an API response.
The API server is an Elysiajs server with two routes. The client renders an address form with an material-ui theme.

```
GET /address_form
POST /mirror
```


## Usage

Clone the project
   ```bash
   git clone git@github.com:Malachi-M/json_schema_form_codegen.git
   ```

### API
The api, `json_schema_api`, an Elysiajs project serving the json-schema payload.

1. Install dependencies
  ```
  npm install
  ```

2. Run the dev server
  ```
  npm run dev
  ```
### Client
The client, `form_client`, is a Nextjs project to render the form.

1. Install dependencies
  ```
  npm install
  ```
2. Run the dev server
  ```
  npm run dev
  ```
