import gql from 'graphql-tag'

/*
 *
 * HELLO
 *
 */

export const getHello = variables => ({
  query: gql`
    query getHello {
      hello
    }
  `,
  variables
})
