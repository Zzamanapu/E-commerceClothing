import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Verify = () => {

  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
  const [searchParans, setSearchParams] = useSearchParams()

  const success = searchParans.get('success')
  const orderId = searchParans.get('orderId')

  const VerifyPayment = async () => {
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendUrl + '/api/order/verifyStripe', { success, orderId }, { headers: { token } })

      if (response.data.success) {
        setCartItems({})
        navigate('/orders')
      } else {
        navigate('/cart')
      }

    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
        toast.error(error.message)
      } else {
        toast.error('Something went wrong')
      }
    }
  }

  useEffect(() => {
    VerifyPayment()
  }, [token])
  return (
    <div>

    </div>
  )
}

export default Verify