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

  cartItems: Record<string, number>;
  setCartItems: React.Dispatch<React.SetStateAction<Record<string, string>>>;

}
export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: '$',
  delivery_fee: 10,

  search: '',
  setSearch: () => { },

  showSearch: false,
  setShowSearch: () => { },

  cartItems: {},
  setCartItems: () => { },

  addToCart = (itemId , size) => { };

});


interface ShopContextProviderProps {
  children: ReactNode;
};



const ShopContextProvider = ({ children }: ShopContextProviderProps) => {

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId: number, size: Size) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);

  }

  

  const value: ShopContextType = {
    products,
    currency: '$',
    delivery_fee: 10,

    search,
    setSearch,

    showSearch,
    setShowSearch,

    cartItems,
    addToCart,
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};


export default ShopContextProvider;