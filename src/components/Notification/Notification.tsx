import { IoIosCheckmark } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

interface NotificationProps {
  notificationState: string;
}

export const Notification: React.FC<NotificationProps> = ({
  notificationState,
}) => {
  const notificationCheck = notificationState === "Correct";

  return (
    <div className="flex flex-row items-center absolute bottom-[14px] left-[50%] translate-x-[-50%] ">
      {notificationCheck ? (
        <>
          <IoIosCheckmark className="w-[32px] h-[32px] text-greenStatus " />
          <p className="text-greenStatus text-[14px] w-max">
            Your message has been sent
          </p>
        </>
      ) : (
        <>
          <IoIosClose className="w-[32px] h-[32px] text-error" />
          <p className="text-error text-[14px] w-max">
            Message hasn't been sent
          </p>
        </>
      )}
    </div>
  );
};
