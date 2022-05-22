import { useEffect, useState } from 'react'
import '../../App.css'
import './Home.css'
import ProductCard from '../../components/productCard/ProductCard'
import { useSelector, useDispatch } from 'react-redux';
import { FatchProductData } from '../../store/action/EstoreAction'
import LinearLoader from '../../components/linearLoader/LinearLoader';


function Home() {
    const [productLoading, setProductLoading] = useState(false)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FatchProductData(setProductLoading))
    }, [])

    return (
        <div className='mainPagesDiv'>
            <div className='homeDiv'>
                {productLoading ? <LinearLoader /> :<ProductCard />}
            </div>
        </div>



    )
}


export default Home