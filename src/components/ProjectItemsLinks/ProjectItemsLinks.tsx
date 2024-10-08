import { Link } from "react-router-dom";

import { Icon } from "../Icons";

interface ProjectItemsLinksProps {
  links: {
    linkDescr: string;
    link: string;
  }[];
}

export const ProjectItemsLinks: React.FC<ProjectItemsLinksProps> = ({
  links,
}) => {
  return (
    <ul className="flex gap-small">
      {links.map((el, id) => {
        return (
          <li key={id} className="bg-activeLink rounded-full border p-thin">
            <Link
              to={el.link}
              target="_blank"
              className="flex items-center gap-thin text-text text-base font-light"
            >
              <p>{`View ${el.linkDescr}`}</p>
              <Icon.Arrow />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
