import { Link } from "react-router-dom";
import ExperienceList from "../components/ExperienceList";
import Hero from "../components/Hero";
import { education, work } from "./Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="experience" aria-labelledby="experience-heading">
        <div className="section-head">
          <h2 id="experience-heading" className="display section-title">
            Experience
          </h2>
          <Link to="/experience" className="view-all">
            View all →
          </Link>
        </div>
        <section className="subsection" aria-labelledby="work-heading">
          <h3 id="work-heading" className="display subsection-title">
            Work
          </h3>
          <ExperienceList items={work} />
        </section>
        <section className="subsection" aria-labelledby="education-heading">
          <h3 id="education-heading" className="display subsection-title">
            Education
          </h3>
          <ExperienceList items={education} />
        </section>
      </section>
    </>
  );
}
