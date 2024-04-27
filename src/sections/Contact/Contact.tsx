import { Socials } from "../../components/Socials/Socials";
import { Contacts } from "../../components/Contacts/Contacts";
import { Form } from "../../components/Form/Form";
import { Reveal } from "../../components/Reveal/Reaveal";

export const Contact = () => {
  return (
    <section>
      <div>
        <Reveal>
          <div className="pb-medium border-b">
            <h1 className="mb-small">Let's Connect!</h1>
            <p className="max-w-[400px] text-text font-light text-base md:text-middle">
              Feel free to reach out with your project, questions or to connect.
              I'll respond promptly and we can explore opportunities together
            </p>
          </div>
        </Reveal>
        <div className="xl:flex xl:flex-row-reverse xl:gap-medium">
          <Reveal>
            <div className="pt-medium pb-base flex flex-col gap-medium border-b md:grid md:grid-cols-2 md:gap-small xl:flex xl:flex-col xl:gap-medium xl:pb-0 xl:border-b-0">
              <Contacts />
              <Socials section="contact" />
            </div>
          </Reveal>
          <Reveal>
            <Form />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
