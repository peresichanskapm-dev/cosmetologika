// Партнери конгресу за рівнями пакету. Джерело: таблиця замовника (лого сконвертовані
// в public/images/partners/logos/, фон видалено, залишено прозорість).

export type PartnerLogo = {
  src: string;
  alt: string;
};

export type PartnerTier = {
  title: string;
  highlight?: boolean;
  logos: PartnerLogo[];
};

const L = "/images/partners/logos";

export const PARTNER_TIERS: PartnerTier[] = [
  {
    title: "Генеральний партнер",
    highlight: true,
    logos: [{ src: `${L}/priority-beauty-group.png`, alt: "Priority Beauty Group" }],
  },
  {
    title: "Платинум партнери",
    logos: [
      { src: `${L}/jouvence-eternelle.svg`, alt: "Jouvence Eternelle" },
      { src: `${L}/avepharm.png`, alt: "Avepharm" },
      { src: `${L}/ibsa-1.png`, alt: "IBSA — Profhilo Structura" },
      { src: `${L}/ibsa-2.png`, alt: "IBSA — pHformula" },
      { src: `${L}/ibsa-3.png`, alt: "IBSA — Cosmetic Group" },
    ],
  },
  {
    title: "Голд партнери",
    logos: [
      { src: `${L}/lascos.png`, alt: "Lascos — Neauvia" },
      { src: `${L}/feijia.svg`, alt: "Feijia" },
      { src: `${L}/yotsuba-optibac.png`, alt: "Yotsuba/Optibac" },
      { src: `${L}/instytutum.svg`, alt: "Instytutum" },
      { src: `${L}/sothys.svg`, alt: "Sothys" },
      { src: `${L}/medgarant.png`, alt: "Medgarant — Lumenis" },
      { src: `${L}/skinon-1.png`, alt: "SkinOn" },
      { src: `${L}/skinon-2.png`, alt: "SkinOn — Renew" },
      { src: `${L}/skinon-3.png`, alt: "SkinOn — GenIdentity" },
      { src: `${L}/skinon-4.png`, alt: "SkinOn — AlphaScience" },
      { src: `${L}/dr-nk.png`, alt: "Dr. NK. — Trioformula" },
      { src: `${L}/bilobrov.png`, alt: "Bilobrov" },
      { src: `${L}/elegant-group.png`, alt: "Elegant Group — HD Cosmetic Efficiency" },
      { src: `${L}/resens-1.svg`, alt: "ReSens" },
      { src: `${L}/resens-2.svg`, alt: "ReSens" },
    ],
  },
  {
    title: "Експо партнери",
    logos: [
      { src: `${L}/ardelis.png`, alt: "Ardelis (Full Force)" },
      { src: `${L}/up-cosmetology.svg`, alt: "Up Cosmetology" },
      { src: `${L}/babe-1.png`, alt: "Бабе — BABE Laboratorios" },
      { src: `${L}/babe-2.png`, alt: "Бабе — Biotrade" },
      { src: `${L}/radkevych.svg`, alt: "Radkevych" },
      { src: `${L}/vistetix.svg`, alt: "Vistetix" },
      { src: `${L}/monxuan.png`, alt: "Monxuan (Монарет)" },
      { src: `${L}/protea-1.png`, alt: "Protea Anti-aging" },
      { src: `${L}/protea-2.png`, alt: "Protea Anti-aging — Environ" },
      { src: `${L}/oxford-biolabs.png`, alt: "Oxford Biolabs" },
      { src: `${L}/beauty-science-1.png`, alt: "Beauty Science" },
      { src: `${L}/beauty-science-2.png`, alt: "Beauty Science — Melumé" },
      { src: `${L}/digital-beauty.png`, alt: "Digital Beauty" },
      { src: `${L}/vva.svg`, alt: "ВВА" },
      { src: `${L}/elemis-1.png`, alt: "Елеміс (mySkinPro)" },
      { src: `${L}/elemis-2.png`, alt: "Елеміс (mySkinPro) — Dermalogica" },
      { src: `${L}/medavita.png`, alt: "МЕДАВІТА" },
      { src: `${L}/eco-prof-cosm.png`, alt: "eco.prof.cosm" },
    ],
  },
];
