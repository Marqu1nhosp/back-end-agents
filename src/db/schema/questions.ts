// biome-ignore assist/source/organizeImports: node
import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core"
import { rooms } from "./rooms.ts"

export const questions = pgTable('questions', {
    id: uuid().primaryKey().defaultRandom(),
    roomId: uuid().references(() => rooms.id),
    question: text().notNull(),
    answer:text(),
    creadtedAt: timestamp().defaultNow().notNull()
})