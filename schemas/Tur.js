export default {
  name: "tur",
  type: "document",
  title: "Gå",
  fields: [
    { type: "string", name: "turnavn", title: "Tittelen til turen" },
    { type: "string", name: "info", title: "Beskrivelse" },
    { type: "string", name: "omrade", title: "Område" },
    { type: "number", name: "km", title: "Lengde i km" },
    {
      type: "image",
      name: "bilde",
      title: "Bilde",
    },
    {
      type: "image",
      name: "kart",
      title: "Kart",
    },
  ],
};
