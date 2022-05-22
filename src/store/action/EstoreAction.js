import { db } from '../../config/Firebase'
import { toast } from 'react-toastify';

export const FatchProductData = (setProductLoading) => async (dispatch) => {
  setProductLoading(true)
  try {
    let products = await db.collection("products").get();
    let productsData = []

    products.forEach((doc) => {
      productsData.push({
        docId: doc.id,
        ...doc.data()
      })
    })


    dispatch({
      type: "FATCHSTOREDATA",
      payload: productsData
    })
  }
  catch (error) {
    toast.error(error)
  }
  finally {
    setProductLoading(false)
  }

}
export const AddProductData = (addData, setAddLoading) => async (dispatch) => {
  setAddLoading(true)
  console.log(addData)
  try {
    let dataRes = await db.collection("products").add(addData)
    let docId = dataRes.id
    console.log(dataRes)
    toast.error("Product addded succesfully")



    dispatch({
      type: "ADDDATA",
      payload: { ...addData, docId }
    })
  }
  catch (error) {
    toast.error(error)
  }
  finally {
    setAddLoading(false)
  }

}
export const AddCardData = (produstData,setProductLoading) => {
    console.log("produstData")

    // console.log(productsData)

    return{
      type: "ADDCARDDATA",
      payload: produstData
    }
  


}