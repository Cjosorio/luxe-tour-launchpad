// Número corporativo de Transporte Castellanos para cotizaciones.
export const WHATSAPP_NUMBER = "50499601944";

export const SOCIAL = {
  instagram: "https://www.instagram.com/castellanostranstur?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExV0hJVTBBNUhZRHQzbnNOb3NydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4zp339akVdb1noD8X4BymhLT44TMzPFhCUImCaEhxiJClI3oMoF9bZpAz8VQ_aem_YiXnja1WUZ-loX7bdQ5hbQ",
  facebook: "https://www.facebook.com/transturistico.castellanos",
  email: "mailto:contacto@castellanos.com",
};

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;