import { createContext, useEffect, useState, type ReactNode } from "react";
import type { ProductType, Size } from "../types/assets";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

type CartItemsType = {
  [productId: string]: {
    [size: string]: number;
  };
};

interface ShopContextType {
  products: ProductType[];
  currency: string;
  delivery_fee: number;

  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;

  cartItems: CartItemsType;
  addToCart: (itemId: string, size: Size) => void;

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
  addToCart: () => { },

});


interface ShopContextProviderProps {
  children: ReactNode;
};



const ShopContextProvider = ({ children }: ShopContextProviderProps) => {

  const [search, setSearch] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const [cartItems, setCartItems] = useState<CartItemsType>({});

  const addToCart = async (itemId: string, size: Size) => {
    let cartData = structuredClone(cartItems);

    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      else {
        cartData[itemId][size] = 1
      }
    }
    else {
      cartData[itemId] = {}
      cartData[itemId][size] = 1;
    }

    // familiar logic 
    // if (!cartData[itemId]) {
    //   cartData[itemId] = {};
    // }

    // // ensure size count exists
    // if (!cartData[itemId][size]) {
    //   cartData[itemId][size] = 0;
    // }

    // // increment quantity
    // cartData[itemId][size] += 1;


    // advance logic
    // cartData[itemId] = cartData[itemId] || {};
    // cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;


    // most advance
    // setCartItems(prev => {
    //   const cart = structuredClone(prev);

    //   cart[itemId] ??= {};
    //   cart[itemId][size] = (cart[itemId][size] ?? 0) + 1;

    //   return cart;
    // });


    setCartItems(cartData);
  }

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])


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