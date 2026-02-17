import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'

//placing order using COD - Method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    console.log("user details is: ")
    console.log(userId)
    console.log(items)
    console.log(amount)
    console.log(address)
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now()
    }

    const newOrder = new orderModel(orderData)
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: 'Order placed' });
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message });
  }
}


//placing order using Stripe - Method
const placeOrderStripe = async (req, res) => {

}



//placing order using Rezopay - Method
const placeOrderRazorpay = async (req, res) => {

}

//All orders date for Admin Panel
const allOrders = async (req, res) => {

}



//User Order data for Frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body

    const orders = await orderModel.find({ userId })
    res.json({ success: true, orders })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message });
  }
}


//update order status from admin panel
const updateStatus = async (req, res) => {

}


export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }