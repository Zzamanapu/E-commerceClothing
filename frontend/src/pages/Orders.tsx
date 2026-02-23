import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';
import type { ProductType } from '../types/assets';

const Orders = () => {

  interface OrderItemType extends ProductType {
    quantity: number;
    size: string;
    status: string;
    payment: boolean;
    paymentMethod: string;
    date: number;
  }

  interface CartItemType extends ProductType {
    quantity: number;
    size: string;
  }

  interface OrderType {
    _id: string;
    userId: string;
    items: CartItemType[];
    amount: number;
    address: {
      firstName: string;
      lastName: string;
      email: string;
      street: string;
      city: string;
      state: string;
      zipcode: string;
      country: string;
      phone: string;
    };
    status: string;
    paymentMethod: string;
    payment: boolean;
    date: number;
  }

  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState<OrderItemType[]>([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post<{
        success: boolean;
        orders: OrderType[];
      }>(backendUrl + '/api/order/userorders', {}, { headers: { token } })

      // console.log(response.data.orders[0].amount);
      // console.log(response.data.orders);

      if (response.data.success) {

        let allOrdersItem: OrderItemType[] = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date
            });

          })
        })
        // console.log(allOrdersItem);
        setOrderData(allOrdersItem.reverse());

      }
    } catch (error) {
      if (error instanceof Error) {

        console.log(error.message)
      } else {
        console.log('Something went wrong')
      }

    }
  }

  useEffect(() => {
    loadOrderData();
  }, [token])

  return (
    <div className='border-t border-gray-300 pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {
          orderData.map((item, index) => (
            <div key={index} className='py-4 border-t border-gray-200 border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />

                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>

                  <p className='mt-1'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
                </div>
              </div>

              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className='border border-gray-200 px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders