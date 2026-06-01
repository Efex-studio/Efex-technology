"use client";

import { JSX } from "react";
import Image from "next/image";
import myimg from '../../assets/myimg.png'
import showcase from '../../assets/showcase.jpg'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faRectangleAd,
  faBullhorn,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface SocialLink {
  href: string;
  label: string;
  icon: JSX.Element;
}

interface ExperienceItem {
  period: string;
  role: string;
  desc: string;
}

interface EducationItem {
  degree: string;
  year: string;
  detail: string;
}

interface Certification {
  title: string;
  subject: string;
  date: string;
  desc: string;
}

interface ContactItem {
  icon: JSX.Element;
  label: string;
  value: string;
  href: string | null;
  sub?: string;
}

// ─── SVG ICONS (Bootstrap Icons inline) ──────────────────────────────────────

const Icons = {
  Telephone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z"/>
    </svg>
  ),
  Facebook: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
    </svg>
  ),
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm.003 1.44c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.282.11-.705.24-1.486.275-.843.039-1.096.047-3.232.047s-2.39-.008-3.232-.047c-.78-.035-1.203-.166-1.485-.275a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.843-.038 1.096-.046 3.232-.046zm0 2.452a4.108 4.108 0 1 0 0 8.215 4.108 4.108 0 0 0 0-8.215zm0 6.775a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334zm5.232-6.937a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
    </svg>
  ),
  Twitter: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
    </svg>
  ),
  GitHub: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
    </svg>
  ),
  WhatsApp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
  ),
  Envelope: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
    </svg>
  ),
  Monitor: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
      <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .5 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.5Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
    </svg>
  ),
  VectorPen: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L6.921 12.93l.831 1.001a.5.5 0 1 1-.768.637l-1.5-1.803a.5.5 0 0 1 .131-.715l2.54-1.594-1.49-1.49-1.593 2.54a.5.5 0 0 1-.715.13L2.04 9.855a.5.5 0 0 1 .637-.768l1 .832 1.569-4.677 1.073-1.024a1.5 1.5 0 0 1 1.073-1.024l3.313-.829zm-3.217 7.051 1.52 1.519 3.114-3.115-.745-2.979-2.979-.744z"/>
    </svg>
  ),
  Chat: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l4 4a1 1 0 0 0 1.414 0l4-4A1 1 0 0 0 13 6.586V2a1 1 0 0 0-1-1z"/>
    </svg>
  ),
  Shop: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
      <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
    </svg>
  ),
  Search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
    </svg>
  ),
  Support: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
      <path d="M6 12.796V13.5C6 14.328 6.672 15 7.5 15h1c.828 0 1.5-.672 1.5-1.5V12.796A5.5 5.5 0 1 0 6 12.796M8 1a4.5 4.5 0 0 1 4.473 4.01l.01.013.014.013A4.5 4.5 0 0 1 8 10a4.5 4.5 0 0 1-4.5-4.5A4.5 4.5 0 0 1 8 1m.5 5.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm0-4a.5.5 0 0 0-1 0V4a.5.5 0 0 0 1 0z"/>
    </svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
    </svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
    </svg>
  ),
  GeoAlt: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
  ),
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SOCIAL_LINKS: SocialLink[] = [
  { href: "tel:+2348169910462",                                          label: "Phone",     icon: <Icons.Telephone /> },
  { href: "https://www.facebook.com/emeka.felix.7927?mibextid=ZbWKwL",  label: "Facebook",  icon: <Icons.Facebook />  },
  { href: "https://instagram.com/efex_studio?igshid=OGY3MTU3OGY1Mw==", label: "Instagram", icon: <Icons.Instagram /> },
  { href: "https://www.linkedin.com/in/aninweze-emeka-felix-6a63a014b", label: "LinkedIn",  icon: <Icons.LinkedIn />  },
  { href: "https://x.com/felixaninweze?t=8jnFPYBIu5nkVpwe8ERRAw&s=09", label: "Twitter",   icon: <Icons.Twitter />   },
  { href: "https://github.com/Efex-studio",                              label: "GitHub",    icon: <Icons.GitHub />    },
  { href: "https://wa.me/+2348169910462",                                label: "WhatsApp",  icon: <Icons.WhatsApp />  },
  { href: "mailto:aninwezeemekafelix@gmail.com",                         label: "Email",     icon: <Icons.Envelope />  },
];

const EXPERIENCE: ExperienceItem[] = [
  {
    period: "February 2020 – Present",
    role: "Freelance Website Designer",
    desc: "Built mobile-friendly and responsive websites for different brands using various front-end technologies, ensuring the brands are visually communicated to represent their ideology.",
  },
  {
    period: "April 2019 – February 2020",
    role: "Freelance Graphics Designer / Digital Marketer",
    desc: "Offered services to various businesses and organisations through idea-oriented designs and a brand-identity mindset, helping many brands build and maintain goal-oriented online presence.",
  },
  {
    period: "August 2017 – April 2019",
    role: "Graphics Designer",
    desc: "Front-desk graphics designer at Claret Technology Printing Press, collaborating with co-workers to deliver quality graphics to different customers.",
  },
  {
    period: "January 2014 – June 2017",
    role: "Graphics Designer Intern",
    desc: "Interned at Chuckzy Computers, Ibusa Delta State. Gained mastery of industry design tools such as Photoshop and CorelDRAW, and exposure to basic principles of design.",
  },
];

const EDUCATION: EducationItem[] = [
  {
    degree: "Higher National Diploma",
    year: "2022",
    detail: "Delta State Polytechnic Ogwashi-Uku — School of Information & Communication Technology, Department of Mass Communication.",
  },
  {
    degree: "National Diploma",
    year: "2016",
    detail: "Delta State Polytechnic Ogwashi-Uku — School of Information & Communication Technology, Department of Mass Communication.",
  },
  {
    degree: "WAEC / SSCE",
    year: "2012",
    detail: "Saint Augustine's College, Ibusa, Delta State.",
  },
];

const CERTIFICATIONS: Certification[] = [
  {
    title: "Certificate of Completion",
    subject: "Web Design Using WordPress",
    date: "June 2024",
    desc: "Received on completion of a website design course using WordPress, organised by the Federal Ministry of Communications & Digital Economy in partnership with Microsoft, facilitated by Wootlab Foundation.",
  },
  {
    title: "Certificate of Participation",
    subject: "Business Fundamentals",
    date: "March 2024",
    desc: "Issued on completion of a Business Fundamentals training by the Kudimata NNPC Foundation in collaboration with the National Youth Service Corps.",
  },
  {
    title: "Certificate of Completion",
    subject: "Basic Financial Education",
    date: "December 2023",
    desc: "Issued on completion of a Basic Financial Literacy training, powered by the Kudimata NNPC Foundation in collaboration with the National Youth Service Corps.",
  },
  {
    title: "Certificate of Completion",
    subject: "Website Design Mastery",
    date: "June 2023",
    desc: "Received on completion of a Website Design Mastery Course, organised by the Anambra State Government in pursuance of the LevelUp Anambra Digital Tribe, facilitated by Wootlab Foundation.",
  },
];

// ─── RESUME / HERO ────────────────────────────────────────────────────────────

export function ResumeSection(): JSX.Element {
  return (
    <section id="resume" className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Photo */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
              <Image
                src={myimg}
                alt="Aninweze Emeka Felix"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left flex-1">
            <p className="text-blue-600 font-semibold text-lg mb-1">Aninweze Emeka Felix</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Website Developer</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-xl">
              Hi, glad to meet you! I am a website developer with over five years of experience in
              HTML, CSS, JavaScript, Bootstrap, WordPress, React JS, Next JS and Express JS. My skill
              set also includes Digital Marketing, Social Media Management and Graphics Design.
              <br /><br />
              Over these years I have offered my services to various brands across Nigeria and beyond,
              helping them build and maintain a viable online presence. Check out some of my recent
              jobs in the Projects section and connect with me on social media.
            </p>

            {/* Social icons */}
            <ul className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 list-none p-0">
              {SOCIAL_LINKS.map((s: SocialLink) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    title={s.label}
                    className="w-11 h-11 rounded-full border border-blue-200 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="/img/Aninweze resume.pdf"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200"
              >
                Download CV
              </a>
              <a
                href="https://wa.me/+2348169910462"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200"
              >
                Hire Me
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────

export function ServicesSection(): JSX.Element {
  return (
    <section id="services" className="py-24">
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 mb-12">
        <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Services
        </div>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
          What We Offer to Grow Your Brand
        </h2>
        <p className="mt-5 text-gray-600 max-w-2xl">
          We offer a range of digital services designed to grow your business
          online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-12 lg:px-24 xl:px-40">
        <div className="bg-blue-50 rounded-3xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faGlobe} className="text-blue-600 text-xl" />
            </div>
            <h4 className="text-md font-bold text-gray-800">Website Development</h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            We build fast, scalable websites with clean architecture and
            responsive layouts so your audience has a seamless experience.
          </p>
        </div>

        <div className="bg-green-50 rounded-3xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faRectangleAd} className="text-green-600 text-xl" />
            </div>
            <h4 className="text-md font-bold text-gray-800">SEO Optimization Expert</h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            We improve organic search performance with on-page SEO, keyword
            research, and technical fixes that boost visibility.
          </p>
        </div>

        <div className="bg-purple-50 rounded-3xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faBullhorn} className="text-purple-600 text-xl" />
            </div>
            <h4 className="text-md font-bold text-gray-800">ONLINE Ads</h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            We launch high-converting online advertising campaigns that increase
            reach, clicks, and qualified lead flow.
          </p>
        </div>

        <div className="bg-violet-50 rounded-3xl p-6 shadow-lg border border-violet-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faPaintBrush} className="text-violet-600 text-xl" />
            </div>
            <h4 className="text-md font-bold text-gray-800">Graphic Design</h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Our design team creates memorable brand identities, digital graphics,
            and marketing assets that make your business stand out.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export function ProjectsSection(): JSX.Element {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
        <p className="text-gray-500 mb-6">Check out some of my recent work.</p>
        <a
          href="/projects"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200"
        >
          View Recent Projects
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </a>
        {/*
          ── Add your project cards here ──
          Create a Project interface: { title: string; image: string; url: string; tags: string[] }
          Then define a PROJECTS array and map over it below.
        */}
      </div>
    </section>
  );
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

export function ExperienceSection(): JSX.Element {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Experience</h1>
        <hr className="border-gray-300 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {EXPERIENCE.slice(0, 2).map((e: ExperienceItem) => (
            <ExperienceCard key={e.role} item={e} />
          ))}
        </div>
        <hr className="border-gray-300 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCE.slice(2).map((e: ExperienceItem) => (
            <ExperienceCard key={e.role} item={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }): JSX.Element {
  return (
    <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
      <span className="text-sm text-gray-400 font-medium">{item.period}</span>
      <h3 className="text-lg font-bold text-blue-600 mt-1 mb-2">{item.role}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
    </div>
  );
}

// ─── EDUCATION ────────────────────────────────────────────────────────────────

export function EducationSection(): JSX.Element {
  return (
    <section id="education" className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Education History</h2>
        <div className="space-y-8">
          {EDUCATION.map((e: EducationItem, i: number) => (
            <div key={e.degree}>
              <h3 className="text-xl font-bold text-blue-400">{e.degree}</h3>
              <span className="text-blue-300 text-sm font-semibold">{e.year}</span>
              <p className="text-gray-300 mt-1 text-sm leading-relaxed">{e.detail}</p>
              {i < EDUCATION.length - 1 && <hr className="mt-6 border-gray-700" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────

export function CertificationsSection(): JSX.Element {
  return (
    <section id="certification" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Certifications</h2>
        <div className="space-y-8">
          {CERTIFICATIONS.map((c: Certification, i: number) => (
            <div key={i}>
              <h3 className="text-lg font-bold text-gray-900">{c.title}</h3>
              <p className="text-gray-700 font-medium">{c.subject}</p>
              <span className="text-blue-600 text-sm font-semibold">{c.date}</span>
              <p className="text-gray-600 mt-1 text-sm leading-relaxed">{c.desc}</p>
              {i < CERTIFICATIONS.length - 1 && <hr className="mt-6 border-gray-200" />}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="https://drive.google.com/drive/folders/1I8J9nbDJtWOs7J0zaOpv-umIcQq1Fvm_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200"
          >
            View Certifications
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── CAREER OBJECTIVES ────────────────────────────────────────────────────────

export function CareerObjectivesSection(): JSX.Element {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <Image
            src={showcase}
            alt="Showcase"
            width={1200}
            height={700}
            className="rounded-2xl w-full object-cover shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Career Objectives</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Aspiring to attain mastery in design concepts and skills with a keen eye for detail to
            create visually appealing and user-friendly websites.
            <br /><br />
            Open to full-time and remote jobs — seeking to contribute to a dynamic team where
            innovative solutions and creativity are valued, while keeping abreast with the latest
            technologies and trends as they unfold.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/+2348169910462"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-400 text-blue-400 hover:bg-blue-900 font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── DEFAULT EXPORT (all sections combined) ───────────────────────────────────

export default function PortfolioSections(): JSX.Element {
  return (
    <main>
      <ResumeSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <CareerObjectivesSection />
    </main>
  );
}
