import { ForwardBtn } from "../ForwardBtn/ForwardBtn";

export const AboutStack = () => {
  return (
    <div className="flex flex-col gap-base">
      <h2 className="aboutHeader">Stack</h2>
      <p className="text-justify text-base font-light text-text md:text-middle">
        My toolkit features React for dynamic interfaces, Node.js and Express.js
        for server-side robustness, MongoDB for flexible data management, and
        TypeScript for enhanced JavaScript coding. This stack enables me to
        build efficient, modern full-stack web applications with ease, ensuring
        seamless functionality across devices.
      </p>
      <ForwardBtn
        navLink="stack"
        content="View Stack"
        className="md:mt-auto md:w-fit md:px-small xl:px-base"
      />
    </div>
  );
};
