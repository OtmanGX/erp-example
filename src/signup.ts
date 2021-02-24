const fetch = require("node-fetch")

const SIGNUP_PAGE = process.env.SIGNUP_PAGE;


const HASURA_OPERATION = `
mutation SignUp($id: String!, $email: String!, $role: management_user_role_enum!, $username: String,
          $CIN: String, $active: Boolean = true, $SalesPointsid: uuid, $firstname: String, $lastname: String, $phone: String
) {
  insert_management_userProfile_one(object: {id: $id, CIN: $CIN, active: $active,
   SalesPointsid: $SalesPointsid, email: $email, firstname: $firstname,
    lastname: $lastname, phone: $phone, username: $username, role: $role}) {
    id
  }
}
`;


// execute the parent operation in Hasura
const execute = async (variables, reqHeaders) => {
  const admin_secret = process.env.ADMIN_SECRET;

  const fetchResponse = await fetch(
    "https://tanglass.hasura.app/v1/graphql",
    {
      method: 'POST',
      headers: {'content-type' : 'application/json', 'x-hasura-admin-secret': admin_secret},
      body: JSON.stringify({
        query: HASURA_OPERATION,
        variables
      })
    }
  );
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};

const signUp = async (variables, headers) => {
  const user = {
    client_id: process.env.CLIENT_ID,
    connection: 'Username-Password-Authentication',
    email: variables.email,
    password: variables.password,
    username: variables.username
  };
  const fetchResponse = await fetch(
    SIGNUP_PAGE,
    {
      method: 'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(user)
    }
  );
  let data = await fetchResponse.json();
  console.log(data);
  if(!data.error) {
    variables.id = 'auth0|'+data._id;
    variables.role += '';
    delete variables.password;
    data = await execute(variables, headers);
    console.log('DEBUG: ', data);
    return data
  }
  console.log('DEBUG: ', data);
  return data;
};


// Request Handler
export const handler  =  async (req, res) => {

  // get request input
  let params = req.body.input;
  const { data, errors } = await signUp(params, req.headers);

  // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0])
  }

  // success
  return res.json({
    ...data.insert_management_userProfile_one
  })

};
