import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { fontSize } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import { AddCardData } from '../../store/action/EstoreAction'




export default function ProductCard({ productImage, productTitle, productDescription, price }) {
  const products = useSelector((store) => store.EstoreReducer.products)
  const dispatch = useDispatch()
  const productData = (product) => {
    alert('click')
    dispatch(AddCardData(product))
  }
  return (
    <>
      <Grid container spacing={2} sx={{ px: 12 }}>
        {products.map((product, index) => {
          return (
            <Grid key={index} item sm={12} md={6} lg={4} >

              <Card sx={{ maxWidth: 345, maxHeight: 400, }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="230"
                    image={product.imageCatalog}
                    alt="green iguana"
                  />
                  <CardContent >
                    <Typography gutterBottom variant="body" component="div" sx={{ fontSize: 16, maxHeight: 40, minHeight: 40, overflow: 'auto' }}>
                      {product.productTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ maxHeight: 40, minHeight: 40, overflow: 'hidden' }}>
                      {product.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ pb: 1, px: 2, pl: 10, textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={() => productData(product)} variant="outlined" sx={{ color: 'black', textTransform: 'capitalize' }}>Add To Card</Button>
                    <Typography variant="body" color="text.secondary">
                      <Box sx={{ pt: 1 }}>
                        <Box component="span" sx={{ fontWeight: 'bold', fontSize: 18, color: 'black', mx: 1 }}>Price:</Box>
                        <Box component="span" sx={{ fontWeight: 'bold', fontSize: 15 }}>{product.price} Rs.</Box>
                      </Box>
                    </Typography>
                  </Box>

                </CardActionArea>
              </Card>
            </Grid>
          )
        })
        }
      </Grid>
    </>
  );
}