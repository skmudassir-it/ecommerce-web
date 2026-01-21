import { db } from './index';
import { products } from './schema';

const main = async () => {
    try {
        const data = [
            {
                name: 'Nike Air Max 90',
                description: 'Iconic sneaker with classic style and comfort.',
                price: '120.00',
                image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx9xu5fzZv/air-max-90-mens-shoes-6n3vKB.png',
            },
            {
                name: 'Nike Air Force 1 \'07',
                description: 'The radiator of the sneaker world.',
                price: '110.00',
                image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
            },
            {
                name: 'Nike Dunk Low Retro',
                description: 'Created for the hardwood but taken to the streets.',
                price: '115.00',
                image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/536da054-93e1-4244-a14a-55447477038e/dunk-low-retro-mens-shoes-5FQWGR.png',
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
