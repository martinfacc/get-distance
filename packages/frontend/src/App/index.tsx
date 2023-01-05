import React from 'react'
import { useLazyQuery, gql } from '@apollo/client'
import { Container, Form, SubmitButton, Code } from './styles'
import { useSpinner } from '../Spinner/context'

const GET_DISTANCE = gql`
  query GetDistance($from: String!, $to: String!, $apiKey: String!) {
    getDistance(from: $from, to: $to, apiKey: $apiKey) {
      distance
      text
      start {
        latitude
        longitude
      }
      end {
        latitude
        longitude
      }
    }
  }
`

const App = () => {
  const [getDistance, { data, loading, error }] = useLazyQuery(GET_DISTANCE)
  const spinner = useSpinner()

  React.useEffect(() => {
    if (loading) {
      spinner.open()
    } else {
      spinner.close()
    }
    return spinner.close
  }, [loading, spinner])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const from = formData.get('from') as string
    const to = formData.get('to') as string
    const apiKey = formData.get('apiKey') as string
    getDistance({ variables: { from, to, apiKey } })
  }

  // remove __typename from data
  const formattedData = JSON.parse(JSON.stringify(data?.getDistance || {}))
  formattedData?.__typename && delete formattedData.__typename
  formattedData?.end?.__typename && delete formattedData.end.__typename
  formattedData?.start?.__typename && delete formattedData.start.__typename

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="from" placeholder="Direction from" />
        <input type="text" name="to" placeholder="Direction to" />
        <input type="text" name="apiKey" placeholder="API Key" />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
      {error && (
        <Code>{JSON.stringify({ message: error.message }, null, 2)}</Code>
      )}
      {data && <Code>{JSON.stringify(formattedData, null, 2)}</Code>}
    </Container>
  )
}

export default App
