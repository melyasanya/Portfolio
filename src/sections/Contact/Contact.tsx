import { Socials } from "../../components/Socials/Socials";
import { Contacts } from "../../components/Contacts/Contacts";
import { Form } from "../../components/Form/Form";

export const Contact = () => {
  return (
    <section>
      <div>
        <div className="pb-medium border-b">
          <h2 className="text-extraLarge font-bold mb-small text-black">
            Let's Connect!
          </h2>
          <p className="max-w-[400px] text-text font-light text-base">
            Feel free to reach out with your project, questions or to connect.
            I'll respond promptly and we can explore opportunities together
          </p>
        </div>
        <div className="pt-medium pb-base flex flex-col gap-medium border-b">
          <Contacts />
          <Socials section="contact" />
        </div>
        <Form />
      </div>
    </section>
  );
};
