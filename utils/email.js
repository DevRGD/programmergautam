import emailjs from "emailjs-com";

export default function email(data) {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_USER_ID;

  if (!serviceId || !templateId || !userId) {
    return Promise.reject("Missing environment variables.");
  }

  return emailjs.send(serviceId, templateId, data, userId);
}
