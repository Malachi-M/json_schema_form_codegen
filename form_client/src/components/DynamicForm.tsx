"use client"

import React from 'react';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/mui';


function DynamicForm () {
  const [formSchema, setFormSchema] = React.useState(null)

  React.useEffect(() => {

    async function fetchFormSchema () {
      try {
        const response = await fetch('http://localhost:8080/address_form')
        const schema: RJSFSchema = await response.json()
        setFormSchema(schema)
      } catch (e) {
        console.error(e)
      }
    }

    fetchFormSchema()
  }, [])

  if(!formSchema) {
    return null;
  }

  return (
    <section>
      <Form schema={formSchema} validator={validator} />
    </section>
  )  
}

export { DynamicForm };