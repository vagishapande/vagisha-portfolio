import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

import profilePhoto from "../images/profilephoto.png";
import nutriBalanceCover from "../images/nutribalance1.png";
import nutriBalanceDetail1 from "../images/nutribalance2.png";
import nutriBalanceDetail2 from "../images/nutribalance3.png";
import nutriBalanceDetail3 from "../images/nutribalance4.png";
import nutriBalanceDetail4 from "../images/nutribalance5.png";
import movieCover from "../images/movie1.jpeg";
import movieDetail from "../images/movie 2.jpeg";
import movieDetail2 from "../images/movie3.jpeg";
import rtoCover from "../images/rto1.png";
import resumeCover from "../images/resumescr1.png";
import resumeDetail1 from "../images/resumescr2.png";
import resumeDetail2 from "../images/resumescr3.png";
import customerChurnMockup from "../images/cust1.png";
import customerChurnDetail1 from "../images/cust2.png";
import customerChurnDetail2 from "../images/cust3.png";
import codeBuddyCover from "../images/code1.png";
import codeBuddyDetail1 from "../images/code2.png";
import codeBuddyDetail2 from "../images/code3.png";
import codeBuddyDetail3 from "../images/code4.png";
import curlyellow from "../images/curlyellow.png";
import halfcircle from "../images/halfcircle.png";
import heart from "../images/heart.png";

const sunomaThumb = "/images/teaser-sunoma.png";
const kremThumb = "/images/teaser-krem.png";

const projects = [
  {
    id: "project-nutribalance",
    name: "NutriBalance",
    cardName: "NutriBalance",
    cardTools: "HTML · CSS · JavaScript",
    category: "Frontend Web Application / Nutrition Recommendation",
    tools: ["HTML5", "CSS3", "JavaScript", "Figma"],
    repo: "https://github.com/vagishapande/NutriBalanceFigma",
    image: nutriBalanceCover,
    gallery: [
      nutriBalanceDetail1,
      nutriBalanceDetail2,
      nutriBalanceDetail3,
      nutriBalanceDetail4,
    ],
    description:
      "NutriBalance is a nutrition-focused web application designed to help users explore food choices based on nutritional requirements such as iron, vitamins, and fats. It presents nutrition-related information through a clean and accessible interface to make food discovery easier.",
    features: [
      "Nutrient-focused food recommendations.",
      "Food discovery based on nutritional requirements.",
      "User-friendly interface.",
      "Responsive layout.",
      "Interactive frontend elements.",
    ],
  },
  {
    id: "project-movie-recommendation-system",
    name: "Movie Recommendation System",
    cardName: "Movie Recommendations",
    cardTools: "Python · Scikit-learn · Streamlit",
    category: "Machine Learning Web Application",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
    repo: "https://github.com/vagishapande/movierecommendationsystem",
    image: movieCover,
    gallery: [movieDetail, movieDetail2],
    description:
      "A content-based movie recommendation application that helps users discover films similar to a selected movie. It processes movie metadata and applies similarity-based recommendations to suggest films with related characteristics.",
    features: [
      "Movie selection and recommendation.",
      "Content-based filtering.",
      "Movie metadata processing.",
      "Similarity-based matching.",
      "Interactive web interface.",
    ],
  },
  {
    id: "project-rto-shield",
    name: "RTO Shield",
    cardName: "RTO Shield",
    cardTools: "HTML · JavaScript · AWS",
    category: "Serverless Cloud Application / E-commerce Risk Assessment",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "AWS Lambda",
      "Amazon DynamoDB",
      "AWS Lambda Function URL",
      "AWS IAM",
      "Amazon CloudWatch",
    ],
    repo: "https://github.com/vagishapande/RTO-Shield",
    image: rtoCover,
    gallery: [],
    description:
      "RTO Shield analyzes Cash-on-Delivery orders to identify potential Return-to-Origin risk using historical customer and delivery-pincode information. It calculates an explainable risk score to help identify potentially risky orders before shipment. Risk scoring is rule-based and uses synthetic demonstration data.",
    features: [
      "Customer and order information input.",
      "Historical customer-data lookup.",
      "Pincode-based fallback assessment.",
      "Risk score from 0 to 100.",
      "LOW, MEDIUM, HIGH, and UNKNOWN risk classifications.",
      "Explanation of factors contributing to risk.",
    ],
  },
  {
    id: "project-resume-screening",
    name: "Resume Screening & Candidate Recommendation System",
    cardName: "Resume Screening",
    cardTools: "Python · Streamlit · Scikit-learn",
    category: "NLP Web Application / Recruitment Technology",
    tools: [
      "Python",
      "Streamlit",
      "Pandas",
      "Scikit-learn",
      "PyPDF",
      "python-docx",
    ],
    repo: "https://github.com/vagishapande/resume-screening-candidate-recommendation",
    demo: "https://resume-screening-candidate-recommendation-cds5ucxhqlwpvftxggc5.streamlit.app/",
    image: resumeCover,
    gallery: [resumeDetail1, resumeDetail2],
    description:
      "An NLP-powered application that analyzes resumes against a job description, extracts relevant skills, calculates text similarity, and ranks candidates according to their relevance to a role.",
    features: [
      "Resume parsing from supported document formats.",
      "Job-description-based resume screening.",
      "TF-IDF text representation.",
      "Cosine similarity.",
      "Skill extraction and matching.",
      "Candidate ranking.",
      "CSV export of screening results.",
    ],
  },
  {
    id: "project-customer-churn-predictor",
    name: "Customer Churn Prediction",
    cardName: "Customer Churn",
    cardTools: "Python · XGBoost · SHAP",
    category: "Machine Learning / Predictive Analytics",
    tools: [
      "Python",
      "XGBoost",
      "SHAP",
      "Scikit-learn",
      "Pandas",
      "Streamlit",
      "SQLite",
    ],
    repo: "https://github.com/vagishapande/customer-churn-predictor",
    demo: "https://customer-churn-predictor-88p6jw7tvombqovkab4qyb.streamlit.app/",
    image: customerChurnMockup,
    gallery: [customerChurnDetail1, customerChurnDetail2],
    description:
      "A machine-learning application that predicts customer churn using customer and historical business data. It uses XGBoost to estimate churn risk, SHAP to explain predictions, and drift monitoring to help identify changes in the underlying data.",
    features: [
      "Customer churn prediction.",
      "Churn-risk assessment.",
      "Model evaluation and comparison.",
      "SHAP-based prediction explanations.",
      "Model drift monitoring.",
      "Prediction logging.",
      "Interactive analytics interface.",
    ],
  },
  {
    id: "project-code-buddy",
    name: "Code Buddy",
    cardName: "Code Buddy",
    cardTools: "Python · Streamlit · LangChain",
    category: "AI Developer Assistant / Retrieval-Augmented Generation",
    tools: [
      "Python",
      "Streamlit",
      "LangChain",
      "ChromaDB",
      "GitPython",
      "Gemini API",
    ],
    repo: "https://github.com/Khushirajput123/CodeBuddy",
    demo: "https://codebuddyai.streamlit.app/",
    image: codeBuddyCover,
    gallery: [codeBuddyDetail1, codeBuddyDetail2, codeBuddyDetail3],
    description:
      "Code Buddy is an AI-powered codebase assistant that allows users to connect a public GitHub repository and ask questions about its source code in natural language. It indexes repository files, retrieves relevant code sections, and generates answers with references to the source files.",
    features: [
      "Public GitHub repository ingestion.",
      "Source-code indexing and chunking.",
      "Semantic code retrieval.",
      "Repository question answering.",
      "Source-referenced responses.",
      "Interactive conversational interface.",
      "Index statistics and configurable retrieval settings.",
    ],
  },
];

const capabilities = [
  {
    title: "Software Development",
    description:
      "Building structured applications, writing maintainable code, and solving programming problems.",
    color: "pink",
    icon: "▣",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Developing predictive models and data-driven applications using machine learning techniques.",
    color: "blue",
    icon: "⌁",
  },
  {
    title: "NLP & Intelligent Tools",
    description:
      "Creating text-processing applications, resume analysis tools, and practical language-based solutions.",
    color: "yellow",
    icon: "⬡",
  },
  {
    title: "Frontend Development & UI Prototyping",
    description:
      "Building responsive web interfaces and creating user-friendly designs using HTML, CSS, JavaScript, and Figma.",
    color: "green",
    icon: "⚑",
  },
];

const interestCards = [
  {
    eyebrow: "Frontend & Design",
    label: "Development Interest",
    heading: "Thoughtful interfaces for useful software.",
    description:
      "HTML, CSS, JavaScript, and Figma help me explore responsive interfaces and user-friendly prototypes.",
    className: "interest-card--frontend",
  },
  {
    eyebrow: "AI & Machine Learning",
    label: "Project Focus",
    heading: "Understand data. Build useful models.",
    description:
      "Machine Learning, NLP, Scikit-learn, XGBoost, SHAP, and Streamlit help me build predictive and text-processing applications.",
    className: "interest-card--ai",
  },
  {
    eyebrow: "Software Development",
    label: "Technical Interest",
    heading: "Structured code. Practical solutions.",
    description:
      "C++, Python, JavaScript, data structures and algorithms, Git, and GitHub support my approach to solving programming problems.",
    className: "interest-card--software",
  },
];

const questions = [
  {
    question: "What technologies do I work with?",
    answer:
      "I work with Python, C++, JavaScript, HTML, and CSS, along with tools such as Scikit-learn, XGBoost, SHAP, Streamlit, Git, and Figma.",
    color: "pink",
  },
  {
    question: "What kinds of projects do I build?",
    answer:
      "I build practical software, predictive machine learning applications, resume analysis tools, and recommendation systems.",
    color: "lime",
  },
  {
    question: "Where can you find my projects?",
    answer:
      "My projects are available on GitHub, including the Customer Churn Predictor.",
    color: "blue",
  },
  {
    question: "What are my interests in AI and software?",
    answer:
      "I am interested in machine learning, natural language processing, software development, and thoughtful frontend design.",
    color: "yellow",
  },
  {
    question: "What is my academic background?",
    answer:
      "I am a final-year B.Tech student in Computer Science.",
    color: "mint",
  },
];

function Sticker({ children, className = "" }) {
  return (
    <div className={`sticker ${className}`} aria-hidden="true">
      <span className="sticker__badge">✳</span>
      <span className="sticker__clip">↗</span>
      <span className="sticker__text">{children}</span>
    </div>
  );
}

function GridDoodles() {
  return (
    <div className="doodles" aria-hidden="true">
      <span className="doodle doodle--dot" />
      <span className="doodle doodle--cloud">☁</span>
      <span className="doodle doodle--loop">〰</span>
      <span className="doodle doodle--eyes">● ●</span>
      <span className="doodle doodle--arrow">➤</span>
      <span className="doodle doodle--spark">✳</span>
      <span className="doodle doodle--confetti">▪ · ◆</span>
      <span className="doodle doodle--smile">⌄⌄⌄</span>
    </div>
  );
}

function SectionHeading({ title, sticker, className = "" }) {
  return (
    <div className={`section-heading ${className}`}>
      <Sticker>{sticker}</Sticker>
      <h2>{title}</h2>
    </div>
  );
}

function scrollToCustomerChurn(e) {
  if (e && e.preventDefault) e.preventDefault();
  const target = document.getElementById("project-customer-churn-predictor");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.classList.add("project-card--highlighted");
    setTimeout(() => {
      target.classList.remove("project-card--highlighted");
    }, 2400);
  }
}

function HeroIntroCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`hero__intro-card ${isExpanded ? "is-expanded" : ""}`}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label="Toggle profile information card"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      <div className="hero__intro-top">
        <div className="hero__intro-avatar-wrapper">
          <img
            src={profilePhoto}
            alt="Vagisha Pande"
            className="hero__intro-avatar"
          />
        </div>
        <div className="hero__intro-meta">
          <p className="hero__intro-status">
            <span className="status-dot" aria-hidden="true" />
            Available for work
          </p>
          <strong className="hero__intro-name">
            VAGISHA PANDE — SOFTWARE<br />ENGINEER &amp; AI/ML DEVELOPER
          </strong>
        </div>
      </div>

      <div className="hero__intro-drawer">
        <p className="hero__intro-bio">
          I design clean websites, landing pages, and practical software
          applications that look sharper, feel clearer, and solve real-world problems.
        </p>
        <div className="hero__intro-tags">
          <span>Software Engineering</span>
          <span>AI / ML</span>
          <span>Web Design</span>
        </div>
      </div>
    </div>
  );
}

function ProjectTeaserStack({ onNavigate }) {
  return (
    <div className="hero__teaser-stack-container">
      {/* Peek card 1 - Sunoma */}
      <div className="teaser-card-peek teaser-card-peek--1" aria-hidden="true">
        <div className="teaser-card-peek__thumb-box">
          <img src={sunomaThumb} alt="" className="teaser-card-peek__thumb" />
        </div>
        <div className="teaser-card-peek__body">
          <div className="teaser-card-peek__row">
            <span>FIGMA</span>
            <span>2026</span>
          </div>
          <strong>SUNOMA</strong>
          <small>VIEW CASE STUDY →</small>
        </div>
      </div>

      {/* Peek card 2 - Krem */}
      <div className="teaser-card-peek teaser-card-peek--2" aria-hidden="true">
        <div className="teaser-card-peek__thumb-box">
          <img src={kremThumb} alt="" className="teaser-card-peek__thumb" />
        </div>
        <div className="teaser-card-peek__body">
          <div className="teaser-card-peek__row">
            <span>FIGMA</span>
            <span>2026</span>
          </div>
          <strong>KREM</strong>
          <small>VIEW CASE STUDY →</small>
        </div>
      </div>

      {/* Active front card - Customer Churn Prediction */}
      <a
        className="hero__project-teaser hero__project-teaser--interactive"
        href="#project-customer-churn-predictor"
        onClick={onNavigate}
        aria-label="Navigate to Customer Churn Prediction case study"
      >
        <div className="hero__teaser-thumb-box">
          <img
            src={customerChurnMockup}
            alt="Customer Churn Predictor thumbnail"
            className="hero__teaser-thumb"
          />
        </div>
        <div className="hero__teaser-content">
          <span className="hero__teaser-tags">PYTHON · XGBOOST · SHAP · STREAMLIT</span>
          <strong className="hero__teaser-title">CUSTOMER CHURN<br />PREDICTION</strong>
          <span className="hero__teaser-link">VIEW CASE STUDY</span>
        </div>
        <div className="teaser-circle-arrow" aria-hidden="true">
          →
        </div>
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <header className="hero__header">
        <a className="hero__name" href="#home">
          VAGISHA PANDE
        </a>
      </header>

      <HeroIntroCard />

      <div className="hero__content">
        <p className="hero__eyebrow">SOFTWARE ENGINEERING · AI/ML · PROBLEM SOLVING</p>
        <div className="hero__title-wrap">
          <h1>I BUILD<br />SOFTWARE<br />THAT SOLVES<br />REAL<br />PROBLEMS</h1>
          <Sticker className="sticker--hero-problem">Problem<br />Solving</Sticker>
          <Sticker className="sticker--hero-ai">AI/ML</Sticker>
          <Sticker className="sticker--hero-software">Software</Sticker>
        </div>
        <p className="hero__description">
          I’m a Computer Science student who enjoys building practical software and AI-powered
          applications. I turn ideas into useful products using Python, C++, machine learning,
          and web technologies.
        </p>
        <div className="hero__actions">
          <a className="pill-button" href="#projects">Explore My Work</a>
          <a className="pill-button" href="#contact">View Resume</a>
          <a
            className="pill-button"
            href="https://github.com/vagishapande"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <p className="hero__side-note">— SOFTWARE ENGINEERING · AI/ML<br />&nbsp;&nbsp;PROBLEM SOLVING</p>
      <ProjectTeaserStack onNavigate={scrollToCustomerChurn} />
    </section>
  );
}

function About() {
  const cards = [
    {
      title: "B.Tech",
      subtitle: "Computer Science & Design",
      text: "Academic background — final-year Computer Science student.",
      className: "about-card--degree",
    },
    {
      title: "AI/ML",
      subtitle: "AI/ML & Software",
      text: "Project focus — practical software and data-driven applications.",
      className: "about-card--ai",
    },
    {
      title: "Learn",
      subtitle: "Hackathons & Technical Learning",
      text: "Experience through participation, personal projects, and continued learning.",
      className: "about-card--learn",
    },
    {
      title: "Build",
      subtitle: "Practical Problem Solving",
      text: "Development approach — analytical thinking and user-friendly applications.",
      className: "about-card--build",
    },
  ];

  return (
    <section className="paper-section about" id="about">
      <GridDoodles />
      <SectionHeading title="ABOUT ME" sticker="About" />
      <p className="about__copy">
        I'm a final-year Computer Science and Engineering student passionate about 
        building technology that makes a difference. With an interest in software
         development, artificial intelligence, and machine learning, I enjoy turning 
         ideas into practical, intuitive, and impactful applications.
        <br />
        I love exploring how technology works, experimenting with new tools, and 
        solving problems through code. From developing AI-powered applications to 
        creating user-focused web experiences, I aim to combine logical thinking, 
        creativity, and thoughtful design in everything I build.
        <br/>
        Beyond academics, I actively work on personal projects and participate in
        hackathons, constantly challenging myself to learn, grow, and become a better 
        developer. I'm driven by curiosity, continuous learning, and the excitement 
        of creating something meaningful.
      </p>
      <a className="pill-button about__button" href="#projects">Explore My Work</a>
      <div className="about__cards">
        {cards.map((card) => (
          <article className={`about-card ${card.className}`} key={card.title}>
            <span className="pin" />
            <span className="about-card__corner" />
            <h3>{card.title}</h3>
            <strong>{card.subtitle}</strong>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectDecorations() {
  return (
    <div className="projects-doodles" aria-hidden="true">
      <img className="projects-doodle projects-doodle--curl" src={curlyellow} alt="" />
      <img className="projects-doodle projects-doodle--half" src={halfcircle} alt="" />
      <img className="projects-doodle projects-doodle--heart" src={heart} alt="" />
      <img className="projects-doodle projects-doodle--curl-secondary" src={curlyellow} alt="" />
      <img className="projects-doodle projects-doodle--heart-secondary" src={heart} alt="" />
    </div>
  );
}

function ProjectDialog({ project, onClose, closeButtonRef }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled])',
        );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [closeButtonRef, onClose]);

  return createPortal(
    <div
      className="project-dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.id}-title`}
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="project-dialog__browser-bar">
          <span className="browser-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="project-dialog__address">Portfolio / Case Study</span>
          <button
            ref={closeButtonRef}
            className="project-dialog__close"
            type="button"
            onClick={onClose}
            aria-label="Close project details"
          >
            ×
          </button>
        </div>

        <div className="project-dialog__scroll">
          <img
            className="project-dialog__cover"
            src={project.image}
            alt={`${project.name} project preview`}
          />
          <div className="project-dialog__body">
            <div className="project-dialog__title-row">
              <h2 id={`${project.id}-title`}>{project.name}</h2>
              <div className="project-dialog__links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>
                )}
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  GitHub Repository <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <p className="project-dialog__description">{project.description}</p>

            <div className="project-dialog__metadata">
              <div>
                <span>Project Type</span>
                <strong>{project.category}</strong>
              </div>
              <div>
                <span>Tools Used</span>
                <strong>{project.tools.join(" · ")}</strong>
              </div>
            </div>

            <h3>Project Highlights</h3>
            <ul className="project-dialog__features">
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>

            {project.gallery.length > 0 && (
              <div className="project-dialog__gallery">
                <h3>More Screens</h3>
                {project.gallery.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${project.name} project screen ${index + 2}`}
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>,
    document.body,
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeButtonRef = useRef(null);

  return (
    <section className="projects-section" id="projects">
      <ProjectDecorations />
      <SectionHeading title={<>PROJECTS THAT<br />TELL STORIES</>} sticker="Projects" />

      <div className="project-list">
        {projects.map((project, index) => (
          <article
            className={`project-card project-card--${index + 1}`}
            id={project.id}
            key={project.id}
          >
            <button
              className="project-card__open"
              type="button"
              onClick={() => setSelectedProject(project)}
              aria-haspopup="dialog"
              aria-label={`Open ${project.name} project details`}
            >
              <div className="project-card__browser">
                <div className="project-card__browser-bar">
                  <span className="browser-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="project-card__browser-label">PROJECT / CASE STUDY</span>
                </div>
                <span className="paperclip" aria-hidden="true" />
                <div className="project-card__preview">
                  <img
                    src={project.image}
                    alt=""
                    className="project-card__image-element"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="project-card__details">
                <h3>{project.cardName}</h3>
                <p className="project-card__category">{project.category.split(" / ")[0]}</p>
                <div className="project-card__footer">
                  <span className="project-card__cta">View Project <span aria-hidden="true">↗</span></span>
                  <p className="project-card__tools">{project.cardTools}</p>
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          closeButtonRef={closeButtonRef}
        />
      )}
    </section>
  );
}

function Capabilities() {
  return (
    <section className="paper-section capabilities" id="capabilities">
      <GridDoodles />
      <SectionHeading title="WHAT I BUILD" sticker="Capabilities" />
      <div className="capability-list">
        {capabilities.map((item) => (
          <article className={`capability capability--${item.color}`} key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <span className="capability__icon" aria-hidden="true">{item.icon}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Interests() {
  return (
    <section className="paper-section interests" id="interests">
      <GridDoodles />
      <SectionHeading title="TECHNICAL INTERESTS" sticker="Interests" />
      <div className="interest-cards">
        {interestCards.map((card) => (
          <article className={`interest-card ${card.className}`} key={card.eyebrow}>
            <span className="pin" />
            <p className="interest-card__eyebrow">{card.eyebrow}</p>
            <p className="interest-card__label">{card.label}</p>
            <h3>{card.heading}</h3>
            <p className="interest-card__description">{card.description}</p>
            <span className="interest-card__corner" />
          </article>
        ))}
      </div>
    </section>
  );
}

function Faqs() {
  const [openQuestion, setOpenQuestion] = useState(1);

  return (
    <section className="paper-section faqs" id="faqs">
      <GridDoodles />
      <SectionHeading title="FAQS" sticker="FAQs" />
      <div className="faq-list">
        {questions.map((item, index) => {
          const isOpen = openQuestion === index;
          const answerId = `faq-answer-${index}`;
          return (
            <article
              className={`faq-card faq-card--${item.color} faq-card--${index + 1}${isOpen ? " is-open" : ""}`}
              key={item.question}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenQuestion(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true">{isOpen ? "×" : "+"}</span>
              </button>
              {isOpen && <p id={answerId}>{item.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a className="social-icon" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  );
}

function ContactDialog({ onClose, closeButtonRef }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus({ preventScroll: true });

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])',
        );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [closeButtonRef, onClose]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const subject = String(formData.get("subject"));
    const message = String(formData.get("message"));
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:vagishapande002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.assign(mailto);
  }

  return createPortal(
    <div
      className="project-dialog-backdrop contact-dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="contact-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
        aria-describedby="contact-dialog-description"
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="contact-dialog__header">
          <div>
            <p className="contact-dialog__eyebrow">LET’S CONNECT</p>
            <h2 id="contact-dialog-title">Send me a message</h2>
          </div>
          <button
            ref={closeButtonRef}
            className="project-dialog__close"
            type="button"
            onClick={onClose}
            aria-label="Close contact form"
          >
            ×
          </button>
        </div>
        <p className="contact-dialog__description" id="contact-dialog-description">
          Fill in the form and your email app will open with the message addressed to me.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input name="name" type="text" autoComplete="name" maxLength={100} required />
          </label>
          <label>
            Your email
            <input name="email" type="email" autoComplete="email" maxLength={254} required />
          </label>
          <label>
            What would you like to ask?
            <input name="subject" type="text" maxLength={120} required />
          </label>
          <label>
            Your message
            <textarea name="message" rows={5} maxLength={5000} required />
          </label>
          <button className="pill-button contact-form__submit" type="submit">
            Open email draft <span aria-hidden="true">↗</span>
          </button>
        </form>
        <div className="contact-dialog__links" aria-label="Contact links">
          <a href="https://github.com/vagishapande" target="_blank" rel="noopener noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/vagisha-pande/" target="_blank" rel="noopener noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href="mailto:vagishapande002@gmail.com">
            vagishapande002@gmail.com
          </a>
        </div>
      </section>
    </div>,
    document.body,
  );
}

function Contact() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const closeContact = useCallback(() => setIsContactOpen(false), []);

  return (
    <>
      <section className="contact" id="contact">
        <div className="contact__panel">
          <div className="contact__socials">
            <SocialIcon href="https://github.com/vagishapande" label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.67.08-.67 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.2 3.26.92.1-.72.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.07-1.15 3.07-1.15.62 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.24-5.12 5.51.4.35.76 1.03.76 2.08v3.06c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .9Z" /></svg>
            </SocialIcon>
            <a
              className="social-icon social-icon--linkedin"
              href="https://www.linkedin.com/in/vagisha-pande/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              className="social-icon social-icon--portfolio"
              href="mailto:vagishapande002@gmail.com"
              aria-label="Email Vagisha"
            >
              @
            </a>
          </div>
          <p className="contact__message">
            — Let’s collaborate
            <br />
            I’m interested in building practical software, exploring AI/ML applications, and
            collaborating on meaningful technical projects.
          </p>
          <div className="contact__callout">
            <Sticker className="contact__sticker">Software</Sticker>
            <h2>HAVE AN IDEA?<br />LET’S BUILD IT.</h2>
            <Sticker className="contact__sticker contact__sticker--second">AI/ML</Sticker>
            <Sticker className="contact__sticker contact__sticker--third">Problem<br />Solving</Sticker>
          </div>
          <button
            className="pill-button contact__button"
            type="button"
            onClick={() => setIsContactOpen(true)}
            aria-haspopup="dialog"
          >
            Let&apos;s chat
          </button>
        </div>
      </section>
      <footer className="site-footer">
        <a href="#home">VAGISHA PANDE</a>
        <nav aria-label="Footer navigation">
          <a href="#about">ABOUT</a>
          <a href="#capabilities">CAPABILITIES</a>
          <a href="#projects">PROJECTS</a>
          <a href="#interests">INTERESTS</a>
          <a href="#faqs">FAQS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </footer>
      {isContactOpen && (
        <ContactDialog onClose={closeContact} closeButtonRef={closeButtonRef} />
      )}
    </>
  );
}

function App() {
  return (
    <main className="portfolio">
      <Hero />
      <About />
      <Projects />
      <Capabilities />
      <Interests />
      <Faqs />
      <Contact />
    </main>
  );
}

export default App;
