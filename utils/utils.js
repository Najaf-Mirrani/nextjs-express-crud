/**
 * executeQueryAndMutation is used to execute query or mutation
 * on 'http://localhost:9000/graphql' where the node graphql
 * server is running
 * 
 * @param {String} queryString - query or mutation string 
 * @returns it will return parsed data
 */
export async function executeQueryAndMutation(queryString) {
  const response = await fetch('http://localhost:9000/graphql', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query: queryString })
  })
  const rsponseBody = await response.json();
  return rsponseBody.data;
}