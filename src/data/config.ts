// Replace with the real WhatsApp number (international format, no + or spaces).
export const WHATSAPP_NUMBER = "595981000000";

export const SOCIAL = {
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  email: "mailto:contacto@castellanos.com",
};

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;