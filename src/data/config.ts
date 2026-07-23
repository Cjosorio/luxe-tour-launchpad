// Número corporativo de Transporte Castellanos para cotizaciones.
export const WHATSAPP_NUMBER = "50499601944";

export const SOCIAL = {
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  email: "mailto:contacto@castellanos.com",
};

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;