# json_schema_form_codegen

## Overview
This project is an implementation of [react-json-schema-form](https://rjsf-team.github.io/react-jsonschema-form/) to dynamically generate a form based on an API response.

---
API JSON payload
```json
{
   "title": "A registration form",
   "description": "A simple form example.",
   "type": "object",
   "required": [
     "firstName",
     "lastName"
   ],
   "properties": {
     "firstName": {
       "type": "string",
       "title": "First name",
       "default": "Chuck"
     },
     "lastName": {
       "type": "string",
       "title": "Last name"
     },
     "age": {
       "type": "integer",
       "title": "Age"
     },
     "bio": {
       "type": "string",
       "title": "Bio"
     },
     "password": {
       "type": "string",
       "title": "Password",
       "minLength": 3
     },
     "telephone": {
       "type": "string",
       "title": "Telephone",
       "minLength": 10
     }
}
```

---

<img width="1484" alt="Screenshot 2023-10-20 at 8 17 11 AM" src="https://github.com/Malachi-M/json_schema_form_codegen/assets/4195581/a0b20cbd-a683-400c-b66a-81d2671681cb">





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
#### Note: the [Bun runtime](https://bun.sh/docs/installation) is required to run the [Elysiajs](https://elysiajs.com/) server

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
