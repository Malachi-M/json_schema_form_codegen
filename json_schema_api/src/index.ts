import { Elysia, t } from 'elysia'
import { cors } from '@elysiajs/cors'

const app = new Elysia()
              .use(cors())
    
app.onRequest(() => {
        console.log('On request')
    })
    .on('beforeHandle', () => {
        console.log('Before handle')
    })
    .get('/address_form', () => ({
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
    }))
    .post('/mirror', ({ body }) => body, {
        body: t.Object({
            firstName: t.String(),
            lastName: t.String(),
            age: t.Integer(),
            bio: t.String(),
            password: t.String({
              minLength: 3,
            }),
            telephone: t.String({
              minLength: 10
            })
        }),
        afterHandle: () => {
            console.log("After handle")
        }
    })
    .listen(8080)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
