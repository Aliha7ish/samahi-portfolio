import { useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import otune from "./images/work/otune.png";
import bookademia from "./images/work/bookademia.png";
import posters from "./images/work/poster.png";
import bespoke from "./images/work/bespoke.png";
import aboutPhoto from "./images/user/user-about.png";
import realmOfTheDragons from "./images/work/realm-of-the-dragons.png";
import sprite from "./icons/sprite.svg";
import { motion, useTransform, useMotionValue, useInView } from "framer-motion";
const work = [
  {
    id: "otune",
    title: "Otune",
    image: otune,
    col: "-12",
  },
  {
    id: "bookademia",
    title: "Bookademia",
    image: bookademia,
    col: "md-5",
  },
  {
    id: "rof",
    title: "Realm of the dragnos",
    image: realmOfTheDragons,
    col: "md-6",
  },
];

const graphicDesign = [
  {
    id: "poster123",
    title: "Posters",
    image: posters,
    col: "md-5",
  },
  {
    id: "branding234",
    title: "Branding",
    image: bespoke,
    col: "md-6",
  },
];

export default function App() {
  return (
    <>
      <Header />
      <MainContent />
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="padding-x"
      >
        <Contact />
      </motion.footer>
    </>
  );
}

function Header() {
  return (
    <div className="header padding-x">
      <LogoHeader />
      <LinksContainer display="flex" gap="8">
        <LinkComp to="about">
          <span className="header-link">About</span>
        </LinkComp>
        <LinkComp to="contact">
          <span className="header-link">contact</span>
        </LinkComp>
      </LinksContainer>
    </div>
  );
}
function LinkComp({ children, to }) {
  return (
    <Link to={to} smooth={true} duration={400} isDynamic={true}>
      {children}
    </Link>
  );
}
function LogoHeader() {
  const style = {
    userSelect: "none",
  };
  return <p style={style}>Omer Alsamahi</p>;
}
function LinksContainer({ children, gap = 0, display = "block" }) {
  const style = {
    display: display,
    gap: `${gap}vw`,
  };
  return (
    <div className="links-container" style={style}>
      {children}
    </div>
  );
}

//Main content
function MainContent() {
  const briefRef = useRef(null);
  const briefRefIsInView = useInView(briefRef);
  const aboutRef = useRef(null);
  const aboutRefIsInView = useInView(aboutRef);
  return (
    <main>
      <LandingPage />
      <Brief />
      <Work />
      <About />
    </main>
  );
}

//landing page
function LandingPage() {
  const style = {
    fontFamily: "made_okine_sans_personal_usBd",
    fontSize: `2.8rem`,
    fontWeight: "500",
    wordSpacing: "10px",
    textTransform: "uppercase",
    color: "#e7d0b1",
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="landing-page padding-x"
      id="landing-page"
    >
      <LandingPageBackground top={0} left={0} transform={10}>
        ui
      </LandingPageBackground>
      <LandingPageBackground bottom={0} right={0} transform={10}>
        ux
      </LandingPageBackground>
      <CenterContent gap={2} horMove={7}>
        <div className="circle-bg"></div>
        <h1 className="heading-1">
          <span>Hello there, this is</span>
          <span>alsamahi</span>
          <span>omar</span>
        </h1>
        <p className="designer">
          junior <span style={style}>ui ux</span> designer
        </p>
        <LinkComp to="about">
          <Button>About me</Button>
        </LinkComp>
      </CenterContent>
      <LinkComp to="brief">
        <ScrollingDown>Scroll to discover</ScrollingDown>
      </LinkComp>
    </motion.section>
  );
}

function CenterContent({ children, gap = 0, horMove = 0 }) {
  const style = {
    gap: `${gap}rem`,
    transform: `translateY(${horMove}vw)`,
  };
  return (
    <div className="center" style={style}>
      {children}
    </div>
  );
}

function LandingPageBackground({
  children,
  top = "auto",
  bottom = "auto",
  left = "auto",
  right = "auto",
  transform = 0,
}) {
  const style = {
    top: top,
    bottom: bottom,
    right: right,
    left: left,
    transform: `translateY(${-transform}%)`,
  };
  return (
    <p className="landing-page-bg" style={style}>
      {children}
    </p>
  );
}

function ScrollingDown({
  children,
  spacing = 8.5,
  opacity = 1,
  visibility = "visible",
}) {
  const style = {
    display: "flex",
    justifyContent: "center",
    marginTop: `${spacing}vw`,
    opacity: opacity,
    visibility: visibility,
  };
  return (
    <div style={style}>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="btn btn-down"
      >
        {children} <span>&darr;</span>
      </motion.button>
    </div>
  );
}

function Button({
  children,
  className = "",
  link = "",
  role = "",
  download = "",
}) {
  return (
    <a href={link} role={role}>
      <button className={`btn ${className}`}>
        {children} <span>&rarr;</span>
      </button>
    </a>
  );
}

//personal brief
function Brief() {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1vw",
  };
  return (
    <div className="full-screen-height" id="brief">
      <CenterContent>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          style={style}
        >
          <span className="work-text-line"></span>
          <p className="work-text">
            &ldquo;Hi, I'm Omar - a junior UI UX designer with a graphic design
            background. My passion is to create stunning designs that deliver a
            seamless user experience. Let's collaborate and create something
            amazing!&rdquo;
          </p>
          <span className="work-text-line"></span>
        </motion.div>
      </CenterContent>
    </div>
  );
}

function Work() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="padding-x"
      style={{ position: "relative" }}
    >
      <motion.div className="bg-gradient"></motion.div>
      <div className="container-fluid overflow-hidden">
        <div className="row g-3">
          <div className="col-12">
            <SecondaryHeading line="right">my work</SecondaryHeading>
          </div>
          {work.map((work, i) => (
            <WorkItem
              category="work"
              i={i}
              key={work.id}
              col={work.col}
              img={work.image}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {work.title}
            </WorkItem>
          ))}
        </div>
      </div>

      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="d-grid designs"
        >
          <div className="design-heading">
            <SecondaryHeading line="left">graphic design</SecondaryHeading>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="design-item design-item-1"
            style={{ backgroundImage: `url(${posters})` }}
          >
            <Button>Posters</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="design-item design-item-2"
            style={{ backgroundImage: `url(${bespoke})` }}
          >
            <Button>branding</Button>
          </motion.div>
        </motion.div>
      </div>
      <LinkComp to="about">
        <ScrollingDown>learn more about me</ScrollingDown>
      </LinkComp>
    </motion.section>
  );
}

function WorkItem({
  col = "",
  children,
  img,
  i,
  category,
  initial,
  whileInView,
  transition,
  viewport,
}) {
  const style = {
    backgroundImage: `url(${img})`,
  };
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      className={`col-${col} ${category === "work" ? "work" : "design"}-item ${
        category === "work" ? "work" : "design"
      }-item-${i + 1}`}
      style={style}
    >
      <Button>{children}</Button>
    </motion.div>
  );
}

function SecondaryHeading({ children, line, marginVal = "" }) {
  const style = {
    marginBottom: `${marginVal}vw`,
  };
  return (
    <h2 className="heading-2" style={style}>
      {line === "left" && <span className="line"></span>}
      {children}
      {line === "right" && <span className="line"></span>}
    </h2>
  );
}

//About
function About() {
  return (
    <section id="about" className="padding-x about">
      <div className="container-fluid overflow-hidden">
        <div className="row">
          <div className="col-12">
            <SecondaryHeading marginVal={2} line="left">
              about me
            </SecondaryHeading>
          </div>
        </div>
        <div className="row">
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-md-7"
          >
            <p>
              Welcome to my portfolio! My name is <span>Omar Alsamahi</span>,
              and I'm a junior UI/UX designer born and raised in{" "}
              <span>Saudi Arabia</span> originally from Egypt , I've always had
              a passion for graphic design and all things creative. aside from
              my studies in computer science at <span>Tanta University</span>, I
              decided to pursue my dream of becoming a designer.
            </p>
            <p>
              With a strong foundation in graphic design since <span>2015</span>{" "}
              when I was 13 Years old, I've since expanded my skillset to
              include user interface and experience design. I have experience in
              creating intuitive and visually appealing designs for websites,
              mobile apps, and software interfaces. I believe that great design
              should not only look beautiful, but also provide an excellent{" "}
              <span>user experience</span>.
            </p>

            <p>
              As a designer, I am always eager to learn and grow. I keep myself
              updated with the latest design trends and technologies, and I am
              constantly looking for new ways to improve my skills. I enjoy
              collaborating with clients and stakeholders to understand their
              needs and create designs that exceed their expectations. In my
              free time, I enjoy reading, Gaming , and exploring new design
              tools and techniques. Thank you for taking the time to visit my
              portfolio, and
              <span>I look forward to connecting with you</span>.
            </p>
          </motion.article>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="col-md-4 about-photo-container"
          >
            <img src={aboutPhoto} alt="Taken photo by omar alsamahi" />
          </motion.div>
        </div>
      </div>
      <LinkComp to="contact">
        <ScrollingDown spacing={0.5}>contact me now!</ScrollingDown>
      </LinkComp>
    </section>
  );
}

function Contact() {
  return (
    <div id="contact">
      <h3 className="heading-3">
        are you ready to take your product to the next level?
      </h3>
      <div className="footer-designers">
        <p>
          <span className="designer-title">Portfolio designer</span>
          <span className="designer-name">omar alsamahi</span>
        </p>
        <span className="designer-seperation"></span>
        <p>
          <span className="designer-title">portfolio designer</span>
          <span className="designer-name">ali hashish</span>
        </p>
      </div>
      <p className="get-contact-text">get in contact</p>

      <div className="container-fluid overflow-hidden contact-links-container">
        <div className="row row-cols-md-3 justify-content-center gy-5">
          <div className="col-md-12 center">
            <Button role="button" link="./test.pdf" download="test">
              Download my resume
            </Button>
          </div>
          <div className="col-md-4 col-6 center">
            <Button link="#">
              <svg className="icon">
                <use xlinkHref={`${sprite}#icon-behance`} />
              </svg>
              Behance
            </Button>
          </div>
          <div className="col-md-4 col-6 center">
            <Button link="#">
              <svg className="icon">
                <use xlinkHref={`${sprite}#icon-whatsapp`} />
              </svg>
              Whatsapp
            </Button>
          </div>
          <div className="col-md-4  center">
            <Button link="#">
              <svg className="icon">
                <use xlinkHref={`${sprite}#icon-linkedin2`} />
              </svg>
              Linked In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
