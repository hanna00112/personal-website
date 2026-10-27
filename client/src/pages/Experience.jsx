import ExperienceList from "../components/ExperienceList";

export const work = [
  {
    title: "Software Engineer",
    company: "Salesforce",
    location: "San Francisco, California",
    start: "Sept 2026",
    end: "Present",
    logoImage: "/logos/salesforce.svg",
    logoText: "OR",
    logoBg: "#ffffff",
    logoColor: "#f6f1ea",
    website: "https://www.salesforce.com/data/",
    summary: "Current Associate Member of Technical Staff (AMTS) on the Data Cloud",
  },
  {
    title: "Software Engineer Intern",
    company: "Salesforce",
    location: "San Francisco, California",
    start: "May 2025",
    end: "Aug 2025",
    logoImage: "/logos/salesforce.svg",
    logoText: "OR",
    logoBg: "#ffffff",
    logoColor: "#3d2b1f",
    website: "https://www.salesforce.com/data/",
    summary:
      "Worked on Data Cloud Frameworks (DCF) team where I simplified the setup workflow for customers to securely connect their external data sources to their Salesforce Data Cloud",
  },
  {
    title: "FutureForce Tech Launchpad",
    company: "Salesforce",
    location: "San Francisco, California",
    start: "June 2024",
    end: "Aug 2024",
    logoImage: "/logos/salesforce.svg",
    logoText: "OR",
    logoBg: "#ffffff",
    logoColor: "#f6f1ea",
    website: "https://info.codepath.org/futureforce-tech-launchpad",
    summary:
      "Created 4 full-stack projects in 10 weeks using React, Node.js, Express.js and PostgreSQL (PERN stack)",
  },
  {
    title: "Lab Monitor",
    company: "Department of Computer Science, Haverford College",
    location: "Haverford, Pennsylvania",
    start: "Sep 2023",
    end: "May 2024",
    logoImage: "/logos/haverford.png",
    logoText: "HC",
    logoBg: "#ffffff",
    logoColor: "#f6f1ea",
    website: "https://www.haverford.edu/computer-science",
    summary:
      "Held weekly office hours, providing individualize Python support and debugging assistance to students in the Computer Science department.",
  },
];

export const education = [
  {
    title: "B.S. Computer Science",
    company: "Haverford College",
    location: "Haverford, Pennsylvania",
    start: "Aug 2022",
    end: "May 2026",
    logoImage: "/logos/haverford.png",
    logoText: "HC",
    logoBg: "#ffffff",
    logoColor: "#f6f1ea",
    website: "https://www.haverford.edu/computer-science",
  },
  {
    title: "Exchange Student",
    company: "Al Akhawayn University",
    location: "Ifrane, Morocco",
    start: "Sept 2024",
    end: "Dec 2024",
    logoImage: "/logos/AUI.png",
    logoText: "AUI",
    logoBg: "#ffffff",
    logoColor: "#f6f1ea",
    website: "https://aui.ma/bachelor-of-science-in-computer-science",
  },
];

export default function Experience() {
  return (
    <>
      <h1 className="display page-title">Experience</h1>
      <section className="subsection" aria-labelledby="work-heading">
        <h2 id="work-heading" className="display subsection-title">
          Work
        </h2>
        <ExperienceList items={work} detailed />
      </section>
      <section className="subsection" aria-labelledby="education-heading">
        <h2 id="education-heading" className="display subsection-title">
          Education
        </h2>
        <ExperienceList items={education} detailed />
      </section>
    </>
  );
}
