import { pgTable, text, numeric, integer, serial } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description').notNull(),
    price: numeric('price').notNull(),
    image: text('image').notNull(),
});
