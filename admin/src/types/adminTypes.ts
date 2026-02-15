export type Category = "Men" | "Women" | "Kids";
export type SubCategory = "Topwear" | "Bottomwear" | "Winterwear";
export type Size = "S" | "M" | "L" | "XL" | "XXL";

export interface Product {
  _id: string;
  name: string;
  category: Category;
  subCategory: SubCategory;
  price: number;
  image: string[];
}