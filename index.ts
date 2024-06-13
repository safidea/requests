import dotenv from 'dotenv'
dotenv.config()

import App from '@safidea_/engine'
import { app as config } from './app'

const app = new App()
const url = await app.start(config)

console.log(`Requests server started at ${url}`)
