import { Client, Account, Databases, Query } from "appwrite";

export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject(import.meta.env.VITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const query = new Query(client);
