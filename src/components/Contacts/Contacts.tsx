import { Link } from "react-router-dom";

import { Icon } from "../Icons";

const contactLinks = [
  {
    icon: <Icon.Mail />,
    value: "mailto:werbolom@gmail.com",
    label: "werbolom@gmail.com",
    link: "/",
  },
  {
    icon: <Icon.Phone />,
    value: "tel:+380507556918",
    label: "+380507556918",
    link: "/",
  },
];

export const Contacts = () => {
  return (
    <div className="contactsContainer">
      <h3 className="contactsHeader">Contact</h3>
      <ul className="contactsList">
        {contactLinks.map((el, id) => {
          return (
            <li key={id} className="contactsItem">
              <Link
                className="contactsLink"
                to="#"
                target="_blank"
                onClick={(e) => {
                  window.location.href = el.value;
                  e.preventDefault();
                }}
              >
                {el.icon}
                <p>{el.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
