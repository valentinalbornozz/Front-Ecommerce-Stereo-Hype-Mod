// src/productos.js
import OGBlack from "../../../assets/Productos/productos/t-shirt-black-stereo-hype/BLACK-FRONT_FULL_4X5_5_0.5x_480x.webp";
import OGWhite from "../../../assets/Productos/productos/t-shirt-white-stereo-hype/WHITE-FRONT_FULL_4X5_5_0.5x_1024x1024.webp";
import Hoodie from "../../../assets/Productos/productos/hoodie-stereo-hype/STEREOHYPEHOODIE2023-FRONT1_480x.webp";
import Essential from "../../../assets/Productos/productos/t-shirt-black-stereo-hype/SHESSENTIALTEE-BLACK-FRONT_4X5-WEB_480x.webp";
import SleepGang from "../../../assets/Productos/productos/t-shirt-black-stereo-hype/NOSLEEPGANG-BLACKYELLOW-FRONT-WEB_480x.webp";
import NewYork from "../../../assets/Productos/productos/t-shirt-white-stereo-hype/SHNYCBONETSHIRT-FRONT_V2_d964f540-bf56-4e01-84fc-b65f75cd8e3d_480x.webp";
import NewYorkBlack from "../../../assets/Productos/productos/t-shirt-black-stereo-hype/SHNYCBLACK-FRONT_WEB_480x.webp";
import Miami from "../../../assets/Productos/productos/t-shirt-black-stereo-hype/BOX2733-MIAMI-FRONT-WEB3_480x.webp";

const products = [
  {
    id: 1,
    name: "STEREOHYPE 2022 OG - BLACK",
    imageUrl: OGBlack,
    price: "£35.00",
    link: "/products/1", // Enlace correspondiente
  },
  {
    id: 2,
    name: "STEREOHYPE 2022 OG - WHITE",
    imageUrl: OGWhite,
    price: "SOLD OUT",
    link: "/products/2",
  },
  {
    id: 3,
    name: "STEREOHYPE OG HOODIE",
    imageUrl: Hoodie,
    price: "£69.00",
    link: "/products/3",
  },
  {
    id: 4,
    name: "ESSENTIAL T-SHIRT",
    imageUrl: Essential,
    price: "£28.00",
    link: "/products/4",
  },
  {
    id: 5,
    name: "NO SLEEP GANG BLACK T-SHIRT",
    imageUrl: SleepGang,
    price: "SOLD OUT",
    link: "/products/5",
  },
  {
    id: 6,
    name: "NEW YORK OVERSIZED T-SHIRT",
    imageUrl: NewYork,
    price: "£76.00",
    link: "/products/6",
  },
  {
    id: 7,
    name: "NEW YORK OVERSIZED T-SHIRT",
    imageUrl: NewYorkBlack,
    price: "SOLD OUT",
    link: "/products/7",
  },
  {
    id: 8,
    name: "MIAMI T-SHIRT",
    imageUrl: Miami,
    price: "£39.00",
    link: "/products/8",
  },
];

export default products;
