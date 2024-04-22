import { AboutBtn } from "../AboutBtn/AboutBtn";

export const AboutStack = () => {
  return (
    <div className="flex flex-col gap-base">
      <h2 className="text-black text-large font-bold">Stack</h2>
      <p className="text-justify text-base font-light text-text">
        My toolkit features React for dynamic interfaces, Node.js and Express.js
        for server-side robustness, MongoDB for flexible data management, and
        TypeScript for enhanced JavaScript coding. This stack enables me to
        build efficient, modern full-stack web applications with ease, ensuring
        seamless functionality across devices.
      </p>
      <AboutBtn navLink="stack" content="View Stack" />
    </div>
  );
};
