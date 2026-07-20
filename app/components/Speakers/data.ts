export type Speaker = {
  name: string;
  role: string;
  image: string;
};

// Щоб додати спікера — додай новий об'єкт у масив і поклади фото
// за шляхом public/images/speakers/<image>.
export const SPEAKERS: Speaker[] = [
  { name: "Даша Квіткова", role: "Спікер", image: "/images/speakers/speaker.jpg" },
  { name: "Даша Квіткова", role: "Спікер", image: "/images/speakers/speaker.jpg" },
  { name: "Даша Квіткова", role: "Спікер", image: "/images/speakers/speaker.jpg" },
  { name: "Даша Квіткова", role: "Спікер", image: "/images/speakers/speaker.jpg" },
  { name: "Даша Квіткова", role: "Спікер", image: "/images/speakers/speaker.jpg" },
  { name: "Даша Квіткова", role: "Спікер", image: "/images/speakers/speaker.jpg" },
];
