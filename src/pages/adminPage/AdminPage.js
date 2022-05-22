import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AddCardData,AddProductData } from '../../store/action/EstoreAction';
import { useDispatch } from 'react-redux';



export default function AdminPage() {
  const [producTitle, setProducTitle] = useState("")
  const [description,setDescription ] = useState("")
  const [price, setPrice] = useState("")
  const [imageCatalog, setImageCatalog] = useState("")
  const [addLoading, setAddLoading] = useState(false)
  const dispatch =useDispatch();

  function addData() {
    javascript:void(0)

   let productData = {
      producTitle:producTitle,
      description: description,
      price:price,
      imageCatalog:imageCatalog
    }
    dispatch(AddProductData(productData, setAddLoading))
    setProducTitle("")
    setDescription("")
    setPrice("")
    setImageCatalog("")

    
  }
  return (
    <div >
      <div style={{ maxWidth: "100%", background: "#003049", height: '100vh', paddingTop: "70px" }}>
        <Box sx={{ background: "#fae1dd", my: 20, mx:35, borderRadius: "10px", p: 2 }}>
          <Typography variant='h5'>Add Product </Typography>

          <Box
           
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField   type ="text" id="outlined-basic" value={producTitle} onChange={(e)=>setProducTitle(e.target.value)} label="Product Title" variant="outlined" />
            <TextField type ="text" value={description}  onChange={(e)=>setDescription(e.target.value)}id="outlined-basic" label="Product Description" variant="outlined" />
            <TextField type ="number" value={price}  onChange={(e)=>setPrice(e.target.value)}id="outlined-basic" label="Product Price" variant="outlined" />
            <TextField type ="text" value={imageCatalog} onChange={(e)=>setImageCatalog(e.target.value)} id="outlined-basic" label="Product image url " variant="outlined" />
             <Box sx={{textAlign:"center" , minWidth:"100%"}}>
             {addLoading? <Button variant="contained">Adding...</Button>:
            <Button type="submit" onClick={() => addData()} variant="contained">Add Product</Button>
          }
            </Box>
            
          </Box>
        </Box>
      </div>


    </div>
  )
}
