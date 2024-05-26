export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My technologies",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Full-Stack Rust Program",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Saas PDF",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/pdf_saas.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/pinecone.png","/aws.png","/stripe.png","/openai.png"],
    link: "https://saas-pdf.vercel.app",
    urlName: "Saas PDF",
    github:"https://github.com/Raul-A-Flores/saas_pdf"
  },
  {
    id: 2,
    title: "AiLearn",
    des: "Saas AI course generator built with Next14 implementing OpenAI Api and Stripe.",
    img: "/ai_learn.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/supabase.png","/stripe.png","/openai.png"],
    link: "https://ailearn-iota.vercel.app",
    urlName: "AiLearn", 
    github: "https://github.com/Raul-A-Flores/course_saas"

  },
  {
    id: 3,
    title: "Raven",
    des: "Threads influenced social media application built with Next13 in TypeScript",
    img: "/raven.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg","/monogodb_logo.png",],
    link: "https://raven-social-media.vercel.app",
    urlName: "Raven",
    github: "https://github.com/Raul-A-Flores/Raven_social_media"

  },
  {
    id: 4,
    title: "CryptoFlo",
    des: "Web3 NFT Marketplace built on Ethereum test network using Solidity and JavaScript.",
    img: "/crypto.png",
    iconLists: ["/re.svg",, "/tail.svg","/javascript.png","/solidity.svg", "/eth.png"],
    link: "https://cryptoflo-app.vercel.app",
    urlName: "CryptoFlo",
    github: "https://github.com/Raul-A-Flores/crypto-flo"

  },
    {
    id: 5,
    title: "Gericht",
    des: "Frontend restaurant static page influenced by Figma design",
    img: "/gericht.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://restaurant-eight-lemon.vercel.app",
    urlName: "Gericht",
    github: "https://github.com/Raul-A-Flores/gericht"

  },
    {
    id: 6,
    title: "Flor",
    des: "Movie Database Built with React with voice integration.",
    img: "/flor.png",
    iconLists: [ "/tail.svg", "/ts.svg", "/re.svg","/alan.png"],
    link: "https://flor-three.vercel.app",
    urlName: "Flor",
    github: "https://vercel.com/raulaflores-projects/flor"

  },
    {
    id: 7,
    title: "Solana Movie Review",
    des: "Backend for movie review application built in Rust on the Solana Web3 Network",
    img: "/solana.png",
    iconLists: ["/solana_logo.png","/image.png"],
    link: "https://github.com/Raul-A-Flores/rust_movie_review_app",
    urlName: "Solana Movie Review",
    github: "https://github.com/Raul-A-Flores/solana_cpi/tree/main/solana-movie-program"

  },
      {
    id: 8,
    title: "Personal Portfolio",
    des: "Personal portfolio displaying current work built with Next14, TypeScript and Sanity",
    img: "/profile.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg",],
    link: "https://portfolio-1wr7.vercel.app",
    urlName: "Personal Portfolio",
    github: "https://github.com/Raul-A-Flores/portfolio"

  },
   {
    id: 9,
    title: "BrandPal",
    des: "AI Generated Branding Assistant utilizing OpenAI and AWS technologies to create branding snippets and tags",
    img: "/Brandpal.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg","/lambda.svg","/python.png","/aws.png","/openai.png"],
    link: "https://portfolio-1wr7.vercel.app",
    urlName: "BrandPal",
    github: "https://github.com/Raul-A-Flores/BrandPal"

  },
     {
    id: 10,
    title: "Tennis Analysis System",
    des: "Tennis Analysis System using machine learning and deep learning",
    img: "/Tennis.png",
    iconLists: ["/python.png","ultra.png","/pytorch.png","/numpy.svg"],
    link: "https://github.com/Raul-A-Flores/tennis",
    urlName: "Tennis Analysis System",
    github: "https://github.com/Raul-A-Flores/tennis"

  },
    {
    id: 11,
    title: "Fullstack Next.js 14 Rust Backend Application",
    des: "Fullstack Next.js Frontend and Backend Rust",
    img: "/rust_next.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg","/image.png" ],
    link: "",
    urlName: "Rust Next.js 14",
    github: ""

  },


];



export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Fullstack Developer",
    desc: "Freelance developer specializing in full stack web development.",
    className: "md:col-span-2",
    thumbnail: "",
  },
  {
    id: 2,
    title: "Flores Collectibles",
    desc: "Ecommerce Store Founder specializing in collectible products",
    className: "md:col-span-2",
    thumbnail: "",
  },
  {
    id: 3,
    title: "Emergency Medical Dispatcher",
    desc: "EMD for Care Ambulance (current known as Falck Ambulance",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "",
  },
  {
    id: 4,
    title: "Emergency Medical Technician",
    desc: "EMT for McCormick Ambulance servicing Los Angeles County.",
    className: "md:col-span-2",
    thumbnail: "",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Raul-A-Flores"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/Raul__Floress"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/raul-floress"
  },
];
