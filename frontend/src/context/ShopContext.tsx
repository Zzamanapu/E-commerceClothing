import { createContext, ReactNode } from "react";
import { products, type Product } from "../assets/assets";

interface ShopContextType {
  products: Product[];
  currency: string;
  delivery_fee: number;
}
export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: '$',
  delivery_fee: 10,
});


interface ShopContextProviderProps {
  children: ReactNode;
}


const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const value: ShopContextType = {
    products, currency: '$', delivery_fee: 10,
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}


export default ShopContextProvider;