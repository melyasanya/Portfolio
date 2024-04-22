import { AboutBtn } from "../AboutBtn/AboutBtn";

export const AboutEducation = () => {
  return (
    <div className="flex flex-col gap-base">
      <h2 className="aboutHeader">Education</h2>
      <p className="text-justify text-base font-light text-text">
        I underwent intensive training as a Full-stack Developer at GOIT, where
        I acquired comprehensive skills in web development, covering both
        front-end and back-end technologies. This education has been the
        cornerstone of my career, providing me with the expertise and confidence
        to excel in the dynamic field of technology and innovation. Prior to
        this, I completed my Bachelor's degree in History and Archeology at the
        National University of Kyiv-Mohyla Academy, honing my research, critical
        thinking, and analytical abilities. Subsequently, I pursued dual
        Master's degrees in Public Relations and Management in Healthcare,
        further broadening my communication and management skills.
      </p>
      <AboutBtn navLink="projects" content="View Projects" />
    </div>
  );
};
