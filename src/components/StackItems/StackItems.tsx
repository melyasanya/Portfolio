import HtmlLogo from "../../assets/images/HTML_Logo.png";
import CssLogo from "../../assets/images/CSS_Logo.png";
import JsLogo from "../../assets/images/JS_Logo.png";
import ReactLogo from "../../assets/images/React_Logo.png";
import ReduxLogo from "../../assets/images/Redux_Logo.png";
import NextLogo from "../../assets/images/Next_Logo.png";
import TailwindLogo from "../../assets/images/Tailwind_Logo.png";
import NodeLogo from "../../assets/images/Node_Logo.png";
import ExpressLogo from "../../assets/images/Express_Logo.png";
import MongoLogo from "../../assets/images/MongoDB_Logo.png";

const stackItems = [
  {
    name: "HTML",
    logo: HtmlLogo,
    shortDescr: "Structure and Content",
    longDescr:
      "I use HTML in web development to provide the backbone for organizing and presenting content in a web page. It ensures that websites are semantically meaningful and accessible, forming the foundation upon which I build the visual elements of a site.",
  },
  {
    name: "CSS",
    logo: CssLogo,
    shortDescr: "Styling and Layout ",
    longDescr:
      "I use CSS to style and layout the visual elements of a web page. It allows me to control the presentation, formatting, and design aspects, ensuring a cohesive and attractive user interface.",
  },
  {
    name: "Javascript",
    logo: JsLogo,
    shortDescr: "Interactivity and Functionality",
    longDescr:
      "I use JavaScript to add interactivity and functionality to web pages. It enables me to create dynamic user experiences, handle user input, and manipulate content on the client side, enhancing the overall usability of the application.",
  },
  {
    name: "React",
    logo: ReactLogo,
    shortDescr: "Component-Based UI",
    longDescr:
      "I use React to build interactive user interfaces using reusable components. It simplifies the process of creating complex UIs, enhances code organization, and improves development efficiency through its declarative and component-based approach.",
  },
  {
    name: "Redux",
    logo: ReduxLogo,
    shortDescr: "State Management",
    longDescr:
      "I use Redux to manage the state of my application in a predictable and centralized manner. It helps me maintain a single source of truth for the application's data, making it easier to debug, test, and reason about the state changes throughout the application.",
  },
  {
    name: "Next.js",
    logo: NextLogo,
    shortDescr: "Server-Side Rendering",
    longDescr:
      "I use Next.js to build React applications with server-side rendering capabilities. It enables me to create fast and SEO-friendly web applications by rendering pages on the server side, improving performance and search engine optimization.",
  },
  {
    name: "Tailwind CSS",
    logo: TailwindLogo,
    shortDescr: "Utility-First CSS Framework",
    longDescr:
      "I use Tailwind to rapidly build custom user interfaces by applying pre-defined utility classes. It streamlines the styling process, promotes consistency, and offers flexibility in designing responsive layouts without writing custom CSS.",
  },
  {
    name: "Node.js",
    logo: NodeLogo,
    shortDescr: "JavaScript Runtime",
    longDescr:
      "I use Node.js to build scalable and efficient server-side applications using JavaScript. It allows me to leverage JavaScript for both client-side and server-side development, enabling seamless communication and sharing of code between the front end and back end of my applications.",
  },
  {
    name: "Express",
    logo: ExpressLogo,
    shortDescr: "Web Application Framework",
    longDescr:
      "I use Express.js to build web applications and APIs quickly and efficiently. It provides a minimalist framework for handling HTTP requests and routing, making it easy to create robust server-side applications in Node.js.",
  },
  {
    name: "MongoDB",
    logo: MongoLogo,
    shortDescr: "NoSQL Database",
    longDescr:
      "I use MongoDB to store and manage data in a flexible, document-based format. It allows for easy scalability, schema flexibility, and high performance, particularly suitable for applications with rapidly changing or unstructured data requirements.",
  },
];

export const StackItems = () => {
  return (
    <ul className="flex flex-col gap-[24px]">
      {stackItems.map((el) => {
        return (
          <div className="bg-bgColor rounded p-[24px] flex flex-col gap-[24px]">
            <div className="flex gap-[12px] items-center">
              <img src={el.logo} alt="logo" className="w-[44px] h-[44px]" />
              <div>
                <p className="text-[18px] font-semibold text-black">
                  {el.name}
                </p>
                <p className="text-[14px] font-light text-text">
                  {el.shortDescr}
                </p>
              </div>
            </div>
            <p className="text-justify text-[14px] font-light text-text">
              {el.longDescr}
            </p>
          </div>
        );
      })}
    </ul>
  );
};
