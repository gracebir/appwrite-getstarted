import { Client, Account, Databases} from 'appwrite'

const client = new Client()

client.setEndpoint("http://localhost/v1").setProject('646c95eab8335f327aa5')

const account = new Account(client)
const database = new Databases(client, "646c965f9aab5dbc918f")

export { account, database }