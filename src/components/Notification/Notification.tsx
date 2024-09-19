import { Icon } from "../Icons";

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
          <Icon.Checkmark />
          <p className="text-greenStatus text-base w-max">
            Your message has been sent
          </p>
        </>
      ) : (
        <>
          <Icon.Close />
          <p className="text-error text-base w-max">Message hasn't been sent</p>
        </>
      )}
    </div>
  );
};
