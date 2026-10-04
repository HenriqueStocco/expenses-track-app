import * as SQLite from 'expo-sqlite'
import { drizzle } from 'drizzle-orm/expo-sqlite'

const expo = SQLite.openDatabaseSync('payvo.db')
const db = drizzle(expo)

export { db }
