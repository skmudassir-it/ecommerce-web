import { db } from './index';
import { products } from './schema';
import { sql } from 'drizzle-orm';

const main = async () => {
    try {
        // Clear existing products
        console.log('Clearing existing products...');
        await db.execute(sql`TRUNCATE TABLE products RESTART IDENTITY CASCADE`);

        const data = [
            {
                name: 'Nike Air Max 90',
                description: 'Iconic sneaker with classic style and comfort.',
                price: '120.00',
                image: '/nike-air-max-90.png',
            },
            {
                name: 'Nike Air Force 1 \'07',
                description: 'The radiator of the sneaker world.',
                price: '110.00',
                image: '/nike-air-force-1.png',
            },
            {
                name: 'Nike Dunk Low Retro',
                description: 'Created for the hardwood but taken to the streets.',
                price: '115.00',
                image: '/nike-dunk-low.png',
            },
        ];

        console.log('Seeding products...');
        await db.insert(products).values(data);
        console.log('Seeding complete!');
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};

main();
