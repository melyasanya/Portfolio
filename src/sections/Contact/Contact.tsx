import { Socials } from "../../components/Socials/Socials";
import { Contacts } from "../../components/Contacts/Contacts";
import { Form } from "../../components/Form/Form";

export const Contact = () => {
  return (
    <section>
      <div>
        <div className="pb-[48px] border-b">
          <h2 className="text-[36px] font-bold mb-[12px] text-black">
            Let's Connect!
          </h2>
          <p className="max-w-[400px] text-text font-light text-[14px]">
            Feel free to reach out with your project, questions or to connect.
            I'll respond promptly and we can explore opportunities together
          </p>
        </div>
        <div className="pt-[48px] pb-[24px] flex flex-col gap-[48px] border-b">
          <Contacts />
          <Socials section="contact" />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </section>
  );
};
