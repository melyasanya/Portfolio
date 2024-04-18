import axios from "axios";

export const sendMessage = (name: string, email: string, message: string) => {
  const url = `https://api.telegram.org/bot6592581516:AAFr2e78-NUfpwSwudmIpzEQKJp_aliQHPw/sendMessage?chat_id=399217561`;
  const data = axios.post(url, {
    parse_mode: "html",
    text: `You got a message from ${email}, name is ${name} with a following text: ${message}`,
  });
  return data;
};
