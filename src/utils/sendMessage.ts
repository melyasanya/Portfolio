import axios from "axios";

const telegramApiKey = import.meta.env.VITE_TELEGRAM_API_KEY;
const telegramChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export const sendMessage = (name: string, email: string, message: string) => {
  const url = `https://api.telegram.org/bot${telegramApiKey}/sendMessage?chat_id=${telegramChatId}`;
  const data = axios.post(url, {
    parse_mode: "html",
    text: `You got a message from ${email}, name is ${name} with a following text: ${message}`,
  });
  return data;
};
