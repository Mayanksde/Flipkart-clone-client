
import { useEffect } from "react";
// import Search from "./Banner";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from './Slide';
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import {Box,styled} from '@mui/material';

import { getProducts } from "../../redux/actions/productActions";

import { useDispatch, useSelector} from "react-redux";

const Container = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`



const Home = ()=>{

    const {products} = useSelector(state => state.getProducts);

    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(getProducts());
        dispatch(getProducts())
    }, [])


    return(
        <>
            <NavBar/>
            <Container>
                <Banner/>
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <MidSection/>
                <Slide products={products} title="Discounts for You" timer={false}/>
                <Slide products={products} title="Suggested Items" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending offers" timer={false}/>
                <Slide products={products} title="Top Deals on Accessories" timer={false}/>
                <Slide products={products} title="Season's Top Picks" timer={false}/>
            </Container>
            
        </>
        
    )
}
export default Home;