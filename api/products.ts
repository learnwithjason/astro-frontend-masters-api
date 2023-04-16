import { builder, Handler } from '@netlify/functions';

const products = [
	{
		id: 1,
		title: 'Beef Frank Hoagie Sandwich Kit',
		description:
			'The sandwich that started it all. Notable for its unique shape, this sandwich is sure to be a conversation starter.',
		image: {
			src: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80&crop=entropy',
			alt: 'a hot dog in a bun',
		},
		price: 19.0,
	},
	{
		id: 2,
		title: 'Colorful Sugar Sandwich Kit',
		description:
			'Leave it to the French to create the perfect dessert sandwich. Sweet and ranging from fruity to caramelly.',
		image: {
			src: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80&crop=entropy',
			alt: 'several macarons in a stack',
		},
		price: 29.0,
	},
	{
		id: 3,
		title: 'Open-Faced Cold Cuts & Cheese Sandwich Kit',
		description:
			'A unique twist on the traditional Italian sub! Sliced pepperoni, mozzarella cheese, and tomato on sourdough.',
		image: {
			src: 'https://images.unsplash.com/photo-1677174471071-6a26aa1ff216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80&crop=entropy',
			alt: 'pepperoni pizza',
		},
		price: 24.0,
	},
	{
		id: 4,
		title: 'Crispy Pork Tortilla Sandwich Kit',
		description:
			'You’ll definitely want more than one of these street sandwiches. Squeeze a lime over the top for best results!',
		image: {
			src: 'https://images.unsplash.com/photo-1574782090889-7567420ce7e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80&crop=entropy',
			alt: 'carnitas tacos',
		},
		price: 24.0,
	},
	{
		id: 5,
		title: 'Molecular Gastronomy Sandwich Kit',
		description:
			'Want to impress your friends? This deconstructed sandwich kit is sure to show them how cultured you are!',
		image: {
			src: 'https://images.unsplash.com/photo-1478998674531-cb7d22e769df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80&crop=entropy',
			alt: 'charcuterie board',
		},
		price: 29.0,
	},
	{
		id: 6,
		title: 'Savory Beef & Cheese Sandwich Kit',
		description:
			'Take your sandwich game up a notch by flame broiling your sandwich fillings. Ground beef and melty cheese!',
		image: {
			src: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&h=600&q=80&crop=entropy',
			alt: 'a cheeseburger close-up',
		},
		price: 24.0,
	},
];

const getAllProducts: Handler = async () => {
	return {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Content-Type': 'application/json; charset=utf8',
		},
		body: JSON.stringify(products),
	};
};

export const handler = builder(getAllProducts);
