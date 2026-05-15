import MarqueeImage1 from "../assets/bbc-logo.svg";
import MarqueeImage2 from "../assets/business-insider-logo.svg";
import MarqueeImage3 from "../assets/forbes-logo.svg";
import MarqueeImage4 from "../assets/rolling-stone-logo.svg";
import MarqueeImage5 from "../assets/the-guardian-logo-black.svg";
import MarqueeImage6 from "../assets/yahoo-news-logo.svg";

// ===========PRICING=========
import PricingImage1 from "../assets/free-shipping.png";
import PricingImage2 from "../assets/delivery.png";
import PricingImage3 from "../assets/premium-badge.png";

// ==========benefits=========
import BenefitsImage1 from "../assets/Benefits/icons8-artificial-intelligence-50.png";
import BenefitsImage2 from "../assets/Benefits/icons8-create-document-50.png";
import BenefitsImage3 from "../assets/Benefits/icons8-brain-64.png";
import BenefitsImage4 from "../assets/Benefits/icons8-business-people-80.png";
import BenefitsImage5 from "../assets/Benefits/icons8-business-report-50.png";

// ==========for ai detection data============
import { GiArchiveResearch } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";

// ==============for woking data============
import WorkingVideo from "../assets/aiAuditsVideos.mp4";
import WorkingImage1 from "../assets/upload-file-screenshot.png";
import WorkingImage2 from "../assets/Winston-ChatGPT-Results-.png";

// ==========for woking plagiarism data==========
import WokingPlagiriasmImage1 from "../assets/aiScreenShot.png";
import WokingPlagiriasmImage2 from "../assets/aiAuditsChecking.png";
import WokingPlagiriasmImage3 from "../assets/winston-datacenter.webp";

// =========for contact section=============
import { BsFillChatRightTextFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";

export const marqueeData = [
  {
    id: 1,
    path: MarqueeImage1,
  },
  {
    id: 2,
    path: MarqueeImage2,
  },
  {
    id: 3,
    path: MarqueeImage3,
  },
  {
    id: 4,
    path: MarqueeImage4,
  },
  {
    id: 5,
    path: MarqueeImage5,
  },
  {
    id: 6,
    path: MarqueeImage6,
  },
];

export const PriceData = [
  {
    id: 1,
    img: PricingImage1,
    text: "Free",
    price: 0,
    updatePrice: 0,
    features: [
      { feature: "Up to 2,000 Words Scan", available: true },
      { feature: "Advanced AI detection", available: true },
      { feature: "Email and Chat support", available: true },
      { feature: "Scan documents", available: true },
      { feature: "Scan pictures and handwriting (OCR)", available: true },
      { feature: "Generate shareable PDF reports", available: false },
      { feature: "Advanced plagiarism detection", available: false },
      { feature: "Invite team members", available: false },
      { feature: "Top-up Credits", available: false },
    ],
  },
  {
    id: 2,
    img: PricingImage2,
    text: "Essential",
    price: 39,
    updatePrice: 34,
    features: [
      { feature: "Up to 80,000 Words Scan", available: true },
      { feature: "Advanced AI detection", available: true },
      { feature: "Email and Chat support", available: true },
      { feature: "Scan documents", available: true },
      { feature: "Scan pictures and handwriting (OCR)", available: true },
      { feature: "Generate shareable PDF reports", available: true },
      { feature: "Advanced plagiarism detection", available: true },
      { feature: "Invite team members", available: false },
      { feature: "Top-up Credits", available: false },
    ],
  },
  {
    id: 3,
    img: PricingImage3,
    text: "Advanced",
    price: 99,
    updatePrice: 89,
    features: [
      { feature: "Up to 200,000 Word Scan", available: true },
      { feature: "Advanced AI detection", available: true },
      { feature: "Advanced plagiarism detection", available: true },
      { feature: "Advanced plagiarism detection", available: true },
      { feature: "Scan documents", available: true },
      { feature: "Scan pictures and handwriting (OCR)", available: true },
      { feature: "Generate shareable PDF reports", available: true },
      { feature: "Unlimited team members", available: true },
      { feature: "Top-up Credits", available: true },
    ],
  },
];

export const BenefitData = [
  {
    id: 1,
    img: BenefitsImage1,
    title: "Accurate AI Detection",
    des: "The most accurate AI detection tool including 99% accuracy on GPT-4, 83% on ChatGPT (GPT-4 powered) and ~2% false positives.",
  },
  {
    id: 2,
    img: BenefitsImage2,
    title: "Plagiarism Checking",
    des: "With best-in-class plagiarism checks, you can easily identify if content was copied from another source. Originality.AI is the only AI Content Detector or Plagiarism Checker that is accurate at identifying Paraphrase Plagiarism (when a paraphrasing tool is used on either human or AI text)",
    path: "/AI-audits/plagiarism-checking",
  },
  {
    id: 3,
    img: BenefitsImage3,
    title: "Team Management",
    des: "You can add and remove unlimited team members, manage their access level, and see a complete record of all their activity including AI written content vs Human written content scan scores.",
  },
  {
    id: 4,
    img: BenefitsImage4,
    title: "Shareable Reports",
    des: "With the Share Scan link you can easily show anyone that your content meets your AI, Plagiarism, and Readability requirements.",
  },
];

export const faqData = [
  {
    id: 1,
    question: "What is an AI content detector?",
    answer:
      "An AI content detector is a software built to provide clarity on the originality of a text, and determine whether a given text was written by an AI text generation tool such as ChatGPT or if it was written by a human. AI content detections use large datasets and a number of other factors to provide this assessment.",
  },
  {
    id: 2,
    question: "How do AI detectors work?",
    answer:
      "AI content detection utilizes natural language processing, machine learning, and deep learning to analyze text and determine whether it was written by a human or an AI. The AI learns the nuances of human language, identifies patterns that differentiate human and AI writing, makes predictions about new text, assigns a score indicating the likelihood of human or AI authorship, and continuously improves through updated training data.",
  },
  {
    id: 3,
    question:
      "What's the difference between Plagiarism Detection and AI detection?",
    answer:
      "Plagiarism detection refers to the process of identifying instances of plagiarism, which is the act of using someone else’s work or ideas without giving them proper credit. This can include text, images, or other forms of media. AI detection, on the other hand, refers to the use of artificial intelligence tools such as ChatGPT to generate copy.",
  },
  {
    id: 4,
    question:
      "Can teachers detect if you used an AI assistant like ChatGPT for schoolwork?",
    answer:
      "Teachers have ways to detect AI involvement in student assignments. They  may notice unnatural language, lack of depth, inconsistency, or use AI detection software. Students should avoid relying on AI for their work since it could be seen as academic dishonesty.",
  },
  {
    id: 5,
    question: "Are AI detection tools accurate?",
    answer:
      "AI detectors have been developed to determine if online content is human or machine-generated, though their effectiveness currently varies. AI Audits has by far the best percentage rate(99%) of detecting AI generated content from ChatGPT, GPT-4, Bard, and other popular text generation tools. As the technology improves, AI content detectors are expected to become more accurate and help ensure the authenticity of online information.",
  },
  {
    id: 6,
    question: "Does Google detect AI content?",
    answer:
      "AI text generators have raised concerns about the impact of AI-generated content on SEO(search engine optimization). While AI-generated content threatens to produce low-quality spam, search engines like Google are improving algorithms to detect such content.",
  },
  {
    id: 7,
    question: "What does AI Audits do exactly?",
    answer:
      "AI Audits is the leading AI generated text detection tool. Our software is able to detect AI generated copy with a 99.6% accuracy including content generated by ChatGPT. Our software also includes a best in class plagiarism detection tool.",
  },
  {
    id: 8,
    question: "Which languages does AI Audits work with?",
    answer:
      "We currently only support Ai detection for English, French, Spanish and German content. Detection for more languages is coming soon.",
  },
];

export const faqPlagiarismData = [
  {
    id: 1,
    question: "How does Audits AI’s plagiarism detection solution work?",
    answer:
      "AI Audits utilizes advanced natural language processing technology, also known as NLP, and machine learning algorithms to perform extensive searches across the Internet and various databases. With our software, you can scan documents and raw texts in any language, complete with a detailed report on the findings of each scan.",
  },
  {
    id: 2,
    question: "Will my content be saved in any database by Audits AI?",
    answer:
      "Our policy is clear on this: Audits AI does not save your content and use it to improve its detection rates, and does not share your information and scans with anyone. When you scan content, the assessment is privately saved for your convenience and your user account, however it is not accessible by anyone other than yourself, and it is not shared with any other organization. You can delete your scans at any time.",
  },
  {
    id: 3,
    question: "What are the supported languages?",
    answer:
      "Our plagiarism detection solution supports every language, however our AI content detector currently supports English, French, Spanish and German, with more to come.",
  },
  {
    id: 4,
    question: "What is the word limit to check plagiarism?",
    answer:
      "Our free trial allows you to check plagiarism for up to 1,000 words, however you can upgrade anytime to scan more content.",
  },
  {
    id: 5,
    question: "Can Audits AI check for AI generated content?",
    answer:
      "Absolutely! Audits AI is known to be the best AI detection software by most independent sources.",
  },
  {
    id: 6,
    question:
      "Does Audits AI provide sources for plagiarized content for citations?",
    answer:
      "Yes, our detailed results page will give you every source of plagiarized content so you can use them for your citations.",
  },
];

export const AiDetectionData = [
  {
    id: 1,
    imgPath: <GiArchiveResearch />,
    title: "For Writers",
    description:
      "In an era where search engines like Google have sharpened their ability to spot AI-generated content, it's paramount to maintain the human touch in your writings. With AI Audits, writers can confidently craft content, knowing it resonates with originality and escapes penalties.",
  },
  {
    id: 2,
    imgPath: <FaBookOpen />,
    title: "For Educators",
    description:
      "In the realm of academia, authenticity is non-negotiable. AI Audits provide educators with the assurance that the content under scrutiny is genuinely human-crafted, aligning with academic standards and integrity.",
  },
  {
    id: 3,
    imgPath: <RiComputerFill />,
    title: "For Web Publishers",
    description:
      "In the digital publishing world, the authenticity of content is the cornerstone of credibility. AI Audits empower publishers to validate the human origin of articles and collaborations, ensuring each piece is genuine and original before it graces the web.",
  },
];

export const AiPlagiarismData = [
  {
    id: 1,
    imgPath: <GiArchiveResearch />,
    title: "For Writers",
    description:
      "Check if your content is plagiarized and used by others to avoid being penalized by search engines like Google. Get the exact sources of the duplicate content.",
  },
  {
    id: 2,
    imgPath: <FaBookOpen />,
    title: "For Educators",
    description:
      "Our plagiarism checker will search for occurrences of plagiarism and provide the complete sources. You can also scan any text to see if it was generated using AI Chatbots such as ChatGPT.",
  },
  {
    id: 3,
    imgPath: <RiComputerFill />,
    title: "For Web Publishers",
    description:
      "Ensure integrity with your copywriters. Your content’s originality, relevancy and uniqueness will retain the attention of your audience and search engines!",
  },
];

export const workingHomeData = [
  {
    id: 1,
    imgPath: WorkingVideo,
    title: "1. Start with Your Free AI Detection Account",
    des: `Embark on your AI content verification journey at no cost. Our user-centric platform facilitates effortless organization and labeling of your documents, ensuring swift access based on title, author, or type.`,
    activate: "[Activate Your Free Account]",
    video: true,
  },
  {
    id: 2,
    imgPath: WorkingImage1,
    title: "2. Effortless AI Content Submission",
    des: `Choose to paste text for an immediate review or upload diverse file formats like .docx, .png, or .jpg. Our state-of-the-art OCR technology adeptly extracts text from scans and images, even deciphering handwritten nuances.`,
    activate: "[Begin Detection]",
    video: false,
  },
  {
    id: 3,
    imgPath: WorkingImage2,
    title: "3. Instant Analysis with Precision",
    des: `AI Audits delivers a comprehensive score between 0-100, pinpointing the origin of your content—be it AI-generated or human-crafted. Dive deeper with our AI prediction map that offers sentence-by-sentence evaluations. And for added assurance, employ our plagiarism checker to validate content originality, coupled with the option to generate concise reports.`,

    video: false,
  },
];

export const workingPlagiarismData = [
  {
    id: 1,
    imgPath: WokingPlagiriasmImage1,
    title:
      "1. Complete solution to detect originality, authorship and use of AI",
    des: `Ensure the originality of your content with our cutting-edge plagiarism detection technology. Our software scans the web and compares your text against billions of sources and databases to identify any matches.`,
    video: false,
  },
  {
    id: 2,
    imgPath: WokingPlagiriasmImage2,
    title: "2. Comprehensive Report Generation",
    des: `Get a clear and accurate assessment report on the sources used for any occurence plagiarism found.`,
    video: false,
  },
  {
    id: 3,
    imgPath: WokingPlagiriasmImage3,
    title: "3. Confidential & Safe",
    des: `You have the option to completely delete your documents from your account`,

    video: false,
  },
];

export const contactData = [
  {
    id: 1,
    icon: <BsFillChatRightTextFill />,
    title: "chat now",
    desData: [
      {
        id: 1,
        des: "Monday - Sunday",
        des2: "24 Hours / 7 Days a Week",
      },
    ],
  },
  {
    id: 2,
    icon: <SiMinutemailer />,
    title: "email us",
    desData: [
      {
        id: 1,
        des: "Our team here in Waco will get back to",
        des2: "you in no time",
      },
    ],
  },
  {
    id: 3,
    icon: <FiPhoneCall />,
    title: "(880) 0123 - 5678",
    desData: [
      {
        id: 1,
        des: "Monday - Sunday",
        des2: "8.00AM - 8.00PM ET",
      },
    ],
  },
];
