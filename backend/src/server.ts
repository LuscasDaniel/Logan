import { join } from 'path'
import { glob } from 'glob'
import { startup } from './startup'

const path = join(__dirname, 'controllers')

glob(`${path}/**/*Controller.{ts,js}`, (err, files) => {
  if (!err) {
    Promise
      .all(files.map(file => import(file)))
      .then(startup)
      .catch(console.error)
  } else {
    console.error(err)
  }
})
