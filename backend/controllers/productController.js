import { v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel.js'

// fuction for add prduct
const addProduct = async (req, res) => {
  try {

    const { name, description, price, category, subCategory, sizes, bestseller } = req.body

    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3 && req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]


    const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

    // images upload cloudinary
    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
        return result.secure_url
      })
    )

    //save to mongodb
    const productData = {
      name,
      description,
      category,
      subCategory,
      price: Number(price),
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imageUrl,
      date: Date.now()
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added" })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// fuction for list product
const listProducts = async (req, res) => {

}

// fuction for removing product
const removeProduct = async (req, res) => {

}

// fuction for single prduct info
const singleProduct = async (req, res) => {

}



export { addProduct, listProducts, removeProduct, singleProduct }