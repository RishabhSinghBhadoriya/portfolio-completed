import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "MERN ecommerce",
    img: "/Screenshot (44).png",
    desc: "A MERN stack-based fashion website with role-based login and newsletter functionality  Technology Stack: Frontend - HTML, CSS, JavaScript, React.js for dynamic and interactive user interfaces. Backend: Node.js with Express.js for server-side logic and API development (RESTful).",
  },
  {
    id: 2,
    title: "Movie Ticket Booking Website",
    img: "/Screenshot 2023-11-13 212541.png",
    desc: "Designed and develop a dynamic and user-friendly website which features a video slider an image gallery as well as seat selection facility.",
  },
  {
    id: 3,
    title: "Food Menu App",
    img: "/Screenshot (58).png",
    desc: "Built a foodmenu app using ASP.NET MVC with form validation as well as MYSQL connectivity to store dishes information and image links",
  },
  {
    id: 4,
    title: "Contact",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "RISHABH SINGH",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
