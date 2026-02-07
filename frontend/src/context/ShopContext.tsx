import { createContext, useState, type ReactNode } from "react";
import type { Product, Size } from "../types/assets";
import { products } from "../assets/assets";
// import { products, type Product } from "../assets/assets";

interface ShopContextType {
  products: Product[];
  currency: string;
  delivery_fee: number;

  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;

}
export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: '$',
  delivery_fee: 10,

  search: '',
  setSearch: () => { },

  showSearch: false,
  setShowSearch: () => { },

});


interface ShopContextProviderProps {
  children: ReactNode;
};



const ShopContextProvider = ({ children }: ShopContextProviderProps) => {

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});





  const value: ShopContextType = {
    products,
    currency: '$',
    delivery_fee: 10,

    search,
    setSearch,

    showSearch,
    setShowSearch,
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};


export default ShopContextProvider;