import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

export default emailjs;
