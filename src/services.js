import axios from "axios";

const url = process.env.MONGODB_URI;

const getAuthToken = async () => {

console.log("Retrieving auth token")

  const response = await axios.post(
    "https://api.petfinder.com/v2/oauth2/token",
    {
      grant_type: "client_credentials",
     /*client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,*/
      client_id: 'T2XrTYs6AE8Tdw1ld7Vitu6uZk47BWvMT0pbu8zplrdSJ0tFHs',
      client_secret: `pYm2SqdkgbC1LVuQFmkTpWJrHNqhRvhMEeOpkq5o`
    }
  ).then(function(response) {
    console.log(response.data)
    return response.data
  })
};

/*
const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  }*/

export { getAuthToken };
