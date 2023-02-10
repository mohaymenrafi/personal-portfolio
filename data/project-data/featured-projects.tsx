export interface IFeaturedProjects {
	name: string;
	overview: string;
	techs: string[];
	image: string;
	githubUrl: string;
	gitBackend?: string;
	liveUrl: string;
	left: boolean;
	features: string[];
	url: string;
}

const featuredProjects: IFeaturedProjects[] = [
	{
		name: "Niche E-commerce site",
		overview:
			"This is a full-stack e-commerce application with all zero priority functions of e-commerce.",
		techs: [
			"React",
			"Redux-toolkit",
			"Redux Thunk",
			"Styled Components",
			"React Router",
			"Axios",
			"Express js",
			"Mongoose",
		],
		image: "/project-images/rey-cover.png",
		githubUrl: "https://github.com/mohaymenrafi/rey-client",
		liveUrl: "https://reyfurnisher.vercel.app/",
		left: true,
		features: ["full-stack e-commerce"],
		url: "rey",
	},
	{
		name: "Amazon Clone",
		overview:
			"The website represents a similar layout and design like amazon with some core e-commerce functionalities such as: Cart, Payment gateway etc.",
		techs: [
			"Reactjs",
			"Nexts",
			"Redux-toolkit",
			"Stripe Checkout",
			"Next Auth",
			"Firestore",
			"Axios",
			"Tailwind CSS",
			"Momentjs",
		],
		image: "/project-images/amazon-clone.png",
		githubUrl: "https://github.com/mohaymenrafi/amazon-clone",
		liveUrl: "https://amzn-2.vercel.app/",
		left: false,
		features: [
			"The website is mainly represents the design of amazon.",
			"Add to cart functions and then checkout with Stripe checkouts",
			"Login with Google using NextAuth",
			"All the orders are stored into firestore database",
			"My Account / Orders page shows previous orders, fetching from database",
			"States are managed with Redux toolkit and cart state is persisted with redux.",
			"Only logged in users can checkout",
		],
		url: "amazon-clone",
	},
	{
		name: "Blog Website",
		overview:
			"This website contains core functionalities of a blogging website such as: showing posts by category, related posts with same catogory, showing user comment. Content is managed with Headless CMS.",
		techs: [
			"Reactjs",
			"Nextjs",
			"GraphQL",
			"GraphCMS",
			"Scss",
			"Axios",
			"Tailwind CSS",
			"Momentjs",
		],
		image: "/project-images/blog-banner.png",
		githubUrl: "https://github.com/mohaymenrafi/cactus-blog",
		liveUrl: "https://cactus-blog.vercel.app/",
		left: true,
		features: [
			"Posts and comments are fetched from GraphCMS with GraphQL query",
			"Contents are pre-rendeder both for static and dynamic routes",
			"User can comment on a post. User can save their info (name, email) for future comments using local storage",
			"Comments will be saved as draft. Admin approval needed before publishing",
			"Related Posts based on the category on post details page",
		],
		url: "cactus-blog",
	},
	{
		name: "E-commerce shop",
		overview:
			"This is a compelte e-commerce created with MERN stack. Rest api's are created in Express js and MongoDb used for storing database.",
		techs: [
			"Reactjs",
			"Redux Toolkit",
			"Styled Components",
			"Express JS",
			"Mongoose",
			"Stripe",
		],
		image: "/project-images/shopr-banner.png",
		githubUrl: "https://github.com/mohaymenrafi/shopr-client",
		liveUrl: "https://shopr-client.netlify.app/",
		left: false,
		features: [
			"User can create account and log in to their accout",
			"User passwords are encryted while saving to database",
			"API end to end secured using JWT",
			"Stripe Payment gateway is added",
			"User can filter products by Size & Color, Sort by pricing and can see products by category",
			"User can select product variations by color and size",
			"Logged in user can not view register or login page",
			"All state management is done using Redux Toolkit",
			"All the products are loaded from mongodb database",
			"All product images are hosted on Firebase",
		],
		url: "shopr",
		gitBackend: "https://github.com/mohaymenrafi/shopr-server",
	},
	{
		name: "Coffee Shop Finder",
		overview:
			"This is a simple app however it shows data using multiple thirdparty API's. It shows nearby coffee stores using user's current location.",
		techs: [
			"Reactjs",
			"Nextjs",
			"Four-square api",
			"Unsplash api",
			"Airtable",
			"SWR",
			"Axios",
			"Geolocation api",
		],
		image: "/project-images/coffe-shop-banner.png",
		githubUrl: "https://github.com/mohaymenrafi/coffee-shop-finder",
		liveUrl: "https://coffee-shop-finder.vercel.app/",
		left: true,
		features: [
			"Initially user will see coffee shop near toronto(default location)",
			"Tracking userlocaiton using Geolocation api",
			"By getting user location access, it will show coffee stores nearby from Foursquare api",
			"All the initial data's are pre-rendered for fast loading",
			"Showing details of coffee stores using dynamic routing and all the information are static site generated",
			"Airtable is for storing coffee stores data",
			"SWR for live updates on upvoting a specific store",
			"All the coffee store images are loaded randomly from Unsplash api",
		],
		url: "coffee-store",
	},
];

export default featuredProjects;
