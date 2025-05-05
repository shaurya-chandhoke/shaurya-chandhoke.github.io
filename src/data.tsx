import {BlogData, CardData, InfoCardData} from "./interfaces/global-interfaces.ts";

export const COPYRIGHT: number = 2025;

export const CONTEXT_DATA = {
    "github": "https://github.com/shaurya-chandhoke",
    "linkedin": "https://www.linkedin.com/in/shaurya-chandhoke",
    "spotify": "https://open.spotify.com/user/98_diesel?si=492796f1d0a64660",
}

export const SKILLS: string[] = [
    "Machine Learning",
    "Software Engineering",
    "Quantitative Finance",
    "Algorithmic Trading",
    "Data Science",
    "Artificial Intelligence",
    "Natural Language Processing",
    "Computer Vision",
    "Large Language Models",
    "Deep Learning",
    "Data Governance",
    "API Architecture",
    "Systems Engineering",
    "REST",
    "GraphQL",
    "Spring Boot",
    "RabbitMQ",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Spark",
    "Splunk",
    "NLTK",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Elasticsearch",
    "Redis",
    "Oracle DB",
    "KDB+",
    "C++",
    "Python",
    "Java",
    "Rust",
    "JavaScript",
    "TypeScript",
    "R",
    "Julia"
];

export const EDUCATION_DATA: InfoCardData[] = [
    {
        heading: "Machine Learning",
        subheading: "Stevens Institute of Technology",
        dates: "Sept 2020 - May 2023"
    },
    {
        heading: "Computer Science",
        subheading: "New Jersey Institute of Technology",
        dates: "Sept 2016 - May 2020"
    }
]

export const WORK_EXPERIENCE: InfoCardData[] = [
    {
        heading: "Senior Software Engineer",
        subheading: "JPMorgan Chase & Co.",
        dates: "Dec 2023 - Present"
    },
    {
        heading: "Senior Software Engineer",
        subheading: "ADP",
        dates: "Sept 2023 - Dec 2023"
    },
    {
        heading: "Software Engineer",
        subheading: "ADP",
        dates: "Aug 2020 - Sept 2023"
    },
    {
        heading: "Software Engineering Intern",
        subheading: "ADP",
        dates: "May 2019 - Aug 2019"
    },
    {
        heading: "Embedded Computing Research Assistant",
        subheading: "New Jersey Institute of Technology",
        dates: "Jan 2018 - Dec 2018"
    }
];

export const CARD_DATA: CardData[] = [
    {
        description: "Machine Learning",
        title: "Computer Vision Toolkit",
        src: "/projects/edge-detector.mp4",
        ctaText: "Visit",
        ctaLink: "https://github.com/users/shaurya-chandhoke/projects/9?pane=issue&itemId=17186532",
        content: () => {
            return (
                <p>
                    A collection of stereo computer vision tools ranging from edge tracing using non-maximum suppression
                    to sky detection using K-Means clustering. Written in Python using NumPy, OpenCV, Scikit-learn, and
                    other popular libraries.
                </p>
            );
        },
    },
    {
        description: "Financial Engineering",
        title: "Black Scholes Merton Calculator",
        src: "/projects/black-scholes-merton.mp4",
        ctaText: "Visit",
        ctaLink: "https://shaurya-chandhoke.github.io/black-scholes-merton-calculator",
        content: () => {
            return (
                <p>
                    A simple web application tool allowing users to quickly calculate option contracts using the famous
                    Black Scholes Merton partial differential equation.
                </p>
            );
        },
    }
];

export const BLOG_DATA: BlogData[] = [
    {
        title: "Building An Engine To Perform Autonomous Trades During The 2008 Financial Crisis",
        description: "medium.com",
        imgSrc: "/blogs/blog-background.jpg",
        imgAlt: "Computer monitor showcasing stock graph",
        href: "https://medium.com/@chandhoke.shaurya/the-ffaengine-and-autonomous-trading-b92a8a09c911"
    }
]