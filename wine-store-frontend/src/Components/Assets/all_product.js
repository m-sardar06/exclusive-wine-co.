import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Hundred Acre ARK Cabernet Sauvignon 750ml",
    category: "red wine",
    image: p1_img,
    new_price: 818.99,
    old_price: 900.98,
  },
  {
    id: 2,
    name: "Le Petit Mouton de Mouton Rothschild Pauillac 750ml",
    category: "red wine",
    image: p2_img,
    new_price: 408.99,
    old_price: 415.99,
  },
  {
    id: 3,
    name: "Opus One Napa Valley Red 750ml",
    category: "red wine",
    image: p3_img,
    new_price: 424.99,
    old_price: 430.99,
  },
  {
    id: 4,
    name: "Schrader Cellars Beckstoffer To Kalon Vineyard Cabernet Sauvignon 750ml",
    category: "red wine",
    image: p4_img,
    new_price: 398.99,
    old_price: 401.99,
  },
  {
    id: 5,
    name: "Macallan Distil Your World Mexico Edition",
    category: "whiskey",
    image: p5_img,
    new_price: 8799.99,
    old_price: 8811.99,
  },
  {
    id: 6,
    name: "Macallan M 1824 With Decanter 700ml",
    category: "whiskey",
    image: p6_img,
    new_price: 7559.98,
    old_price: 7699.99,
  },
  {
    id: 7,
    name: "Balvenie Single Malt Scotch Whisky 40 year old 750ml",
    category: "whiskey",
    image: p7_img,
    new_price: 6700.00,
    old_price: 6750.00,
  },
  {
    id: 8,
    name: "Suntory Yamazaki Single Malt Whisky 18 year old 750ml",
    category: "whiskey",
    image: p8_img,
    new_price: 1047.98,
    old_price: 1050.99,
  },
  {
    id: 9,
    name: "Beluga Gold Line Vodka 750ml",
    category: "vodka",
    image: p9_img,
    new_price: 88.99,
    old_price: 90.98,
  },
  {
    id: 10,
    name: "Crystal Head Vodka Gift 750ml",
    category: "vodka",
    image: p10_img,
    new_price: 42.99,
    old_price: 45.98,
  },
  {
    id: 11,
    name: "Grey Goose Vodka 1.75l France",
    category: "vodka",
    image: p11_img,
    new_price: 38.99,
    old_price: 40.98,
  },
  {
    id: 12,
    name: "Grey Goose Vodka 1l France",
    category: "vodka",
    image: p12_img,
    new_price: 29.99,
    old_price: 31.00,
  },
  {
    id: 13,
    name: "Clase Azul Tequila 25 Anniversario Limited Edition 1l Mexico",
    category: "tequila",
    image: p13_img,
    new_price: 2999.99,
    old_price: 3010.99,
  },
  {
    id: 14,
    name: "Clase Azul Añejo Tequila 750ml Mexico",
    category: "tequila",
    image: p14_img,
    new_price: 499.99,
    old_price: 510.99,
  },
  {
    id: 15,
    name: "Clase Azul Ultra Extra Anejo Tequila 750ml Mexico",
    category: "tequila",
    image: p15_img,
    new_price: 2049.97,
    old_price: 1052.98,
  },
  {
    id: 16,
    name: "Grand Marnier Cuvée du Centenaire 750ml France,Cognac",
    category: "liqueurs & cordials",
    image: p16_img,
    new_price: 194.99,
    old_price: 198.98,
  },
  {
    id: 17,
    name: "Tekirdag Raki Gold Series 1l Turkey",
    category: "liqueurs & cordials",
    image: p17_img,
    new_price: 46.99,
    old_price: 48.98,
  },
  {
    id: 18,
    name: "Rum Chata Cream Liqueur 1.75l Spain",
    category: "liqueurs & cordials",
    image: p18_img,
    new_price: 41.99,
    old_price: 45.99,
  },
  {
    id: 19,
    name: "Chambord Liqueur Royale de France 700ml France, Loire Valley",
    category: "liqueurs & cordials",
    image: p19_img,
    new_price: 39.99,
    old_price: 42.97,
  },
  {
    id: 20,
    name: "Ron Zacapa Edicion Negra Rum 750ml Guatemala",
    category: "rum",
    image: p20_img,
    new_price: 64.99,
    old_price: 68.99,
  },
  {
    id: 21,
    name: "Plantation Rum Barbados XO 20th Anniversary 750ml Barbados",
    category: "rum",
    image: p21_img,
    new_price: 58.99,
    old_price: 62.99,
  },
  {
    id: 22,
    name: "Bacardi Reserva Ocho 8 year old 750ml Puerto Rico",
    category: "rum",
    image: p22_img,
    new_price: 31.99,
    old_price: 39.98,
  },
  {
    id: 23,
    name: "Bacardi Superior Light Rum 1.75l Puerto Rico",
    category: "light rum",
    image: p23_img,
    new_price: 19.99,
    old_price: 21.99,
  },
  {
    id: 24,
    name: "Hendrick's Gin 1.75l United Kingdom, Scotland",
    category: "gin",
    image: p24_img,
    new_price: 58.99,
    old_price: 61.99,
  },
  {
    id: 25,
    name: "Bombay Sapphire Distilled London Dry Gin 1.75l United Kingdom",
    category: "gin",
    image: p25_img,
    new_price: 42.49,
    old_price: 45.99,
  },
  {
    id: 26,
    name: "Monkey 47 Schwarzwald Dry Gin 750ml Germany",
    category: "gin",
    image: p26_img,
    new_price: 58.99,
    old_price: 60.00,
  },
  {
    id: 27,
    name: "Beefeater London Dry Gin 1.75l United Kingdom",
    category: "gin",
    image: p27_img,
    new_price: 36.99,
    old_price: 41.00,
  },
  {
    id: 28,
    name: "Brooklyn Gin Small Batch Gin 750ml US New York",
    category: "gin",
    image: p28_img,
    new_price: 36.99,
    old_price: 39.99,
  },
  {
    id: 29,
    name: "Moët & Chandon Dom Perignon Rosé 750ml France",
    category: "sparkling wine",
    image: p29_img,
    new_price: 370.99,
    old_price: 375.99,
  },
  {
    id: 30,
    name: "Louis Roederer Cristal Brut 750ml France",
    category: "sparkling wine",
    image: p30_img,
    new_price: 369.99,
    old_price: 373.98,
  },
  {
    id: 31,
    name: "Armand de Brignac Ace of Spades Brut Gold 750ml France",
    category: "sparkling wine",
    image: p31_img,
    new_price: 279.97,
    old_price: 281.99,
  },
  {
    id: 32,
    name: "Krug Grande Cuvée Brut 750ml France",
    category: "sparkling wine",
    image: p32_img,
    new_price: 209.99,
    old_price: 213.97,
  },
  {
    id: 33,
    name: "Ruinart Blanc de Blancs Cotes Du Rhône 750ml France",
    category: "sparkling wine",
    image: p33_img,
    new_price: 88.99,
    old_price: 90.99,
  },
  {
    id: 34,
    name: "Gran Duque d'Alba Brandy de Jerez Solera Gran Reserva 750ml Spain",
    category: "brandy",
    image: p34_img,
    new_price: 39.99,
    old_price: 42.98,
  },
  {
    id: 35,
    name: "St. Remy VSOP Brandy 1.75l France",
    category: "brandy",
    image: p35_img,
    new_price: 31.99,
    old_price: 35.99,
  },
  {
    id: 36,
    name: "E&J Brandy XO Brandy 750ml",
    category: "brandy",
    image: p36_img,
    new_price: 15.99,
    old_price: 18.99,
  },
];

export default all_product;
