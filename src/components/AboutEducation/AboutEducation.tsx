import { ForwardBtn } from "../ForwardBtn/ForwardBtn";

export const AboutEducation = () => {
  return (
    <div className="flex flex-col gap-base">
      <h2>Education</h2>
      <p className="text-justify text-base font-light text-text md:text-middle">
        I underwent intensive training as a Full-stack Developer at GOIT, where
        I acquired comprehensive skills in web development, covering both
        front-end and back-end technologies. Prior to this, I completed my
        Bachelor's degree in History and Archeology at the National University
        of Kyiv-Mohyla Academy, honing my research, critical thinking, and
        analytical abilities. Subsequently, I pursued dual Master's degrees in
        Public Relations and Management in Healthcare, further broadening my
        communication and management skills.
      </p>
      <ForwardBtn
        navLink="projects"
        content="View Projects"
        className="md:mt-auto md:w-fit md:px-small xl:px-base"
      />
    </div>
  );
};
