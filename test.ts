import dotenv from 'dotenv'
dotenv.config()

import App from '@safidea_/engine'
import { app as config } from './app'

const app = new App()
const errors = await app.test(config)

if (errors.length > 0) {
  console.error(errors)
  process.exit(1)
} else {
  console.log('All tests passed')
  process.exit(0)
}
