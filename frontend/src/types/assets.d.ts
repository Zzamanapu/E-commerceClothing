declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";


export interface Assets {
  logo: string;
  hero_img: string;
  cart_icon: string;
  dropdown_icon: string;
  exchange_icon: string;
  profile_icon: string;
  quality_icon: string;
  search_icon: string;
  star_dull_icon: string;
  star_icon: string;
  bin_icon: string;
  support_img: string;
  menu_icon: string;
  about_img: string;
  contact_img: string;
  razorpay_logo: string;
  stripe_logo: string;
  cross_icon: string;
}

export type Category = "Men" | "Women" | "Kids";
export type SubCategory = "Topwear" | "Bottomwear" | "Winterwear";
export type Size = "S" | "M" | "L" | "XL" | "XXL";

interface RelatedProductsProps {
  category: Category;
  subCategory: SubCategory;
}

export interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: Category;
  subCategory: SubCategory;
  sizes: Size[];
  date: number;
  bestseller: boolean;
}

type CartDataItem = {
  _id: string;
  size: Size;
  quantity: number;
};