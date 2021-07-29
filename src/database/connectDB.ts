import {Pool} from 'pg'

const createConnection = async () => {
  const client = new Pool({
    host: "localhost",
    user: "valeriano",
    password: "filipec20",
    database: "user_api"
  })

  await client.connect();
  return {client};
};

export {createConnection}