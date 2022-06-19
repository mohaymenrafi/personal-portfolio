export interface IFeaturedProjects {
  name: string;
  overview: string;
  techs: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  left: boolean;
}

const featuredProjects: IFeaturedProjects[] = [
  {
    name: "Amazon Clone",
    overview:
      "The website represents a similar layout and design like amazon with some core e-commerce functionalities such as: Cart, Payment gateway etc.",
    techs: [
      "React",
      "Nextjs",
      "Firestore",
      "Axios",
      "Redux-toolkit",
      "Stripe Checkout",
      "Next Auth",
    ],
    image: "/project-images/amazon-clone.png",
    githubUrl: "https://github.com/mohaymenrafi/amazon-clone",
    liveUrl: "https://amzn-2.vercel.app/",
    left: false,
  },
  {
    name: "Blog Website",
    overview:
      "This website contains core functionalities of a blogging website such as: showing posts by category, related posts with same author, showing user comment. Content is managed with Headless CMS.",
    techs: [
      "React",
      "Nextjs",
      "GraphQL",
      "GraphCMS",
      "Scss",
      "Axios",
      "Tailwind CSS",
    ],
    image: "/project-images/blog-banner.png",
    githubUrl: "https://github.com/mohaymenrafi/cactus-blog",
    liveUrl: "https://cactus-blog.vercel.app/",
    left: true,
  },
  {
    name: "E-commerce shop",
    overview:
      "This is a compelte e-commerce created with MERN stack. Rest api's are created in Express js and MongoDb used for storing database.",
    techs: [
      "React",
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
  },
];

export default featuredProjects;
