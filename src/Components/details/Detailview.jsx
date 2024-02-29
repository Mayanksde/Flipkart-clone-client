


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";

import { Box, Typography,Grid, styled} from "@mui/material";
import ActionItem from "./ActionItems";
import ProductDetail from "./ProductDetail";


const Component = styled(Box)`
    background: #F2F2F2;
    margin-top: 55px;
    `

const Container = styled(Grid)(({theme}) =>({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))
//Ho gya

const RightContainer = styled(Grid)
`
    margin-top: 50px;
    margin-bottom:0px;

`



const DetailView= ()=>{

    const dispatch = useDispatch();
    // url se id nikalne ke liye 
    const { id }= useParams();

    // const {loading, product} = useSelector(state => state.getproductDetails);
    const {loading, product} = useSelector(state => state.getProductDetails);


    useEffect(() => {
        if(product && id !== product.id){
            dispatch(getProductDetails(id))
        }
            
    }, [dispatch, id,  product, loading]);


    return(



        <Component>
           {
            product && Object.keys(product).length &&
            <Container container>
                {/* left component  */}
                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem product={product}/>
                </Grid>
                
                {/* right component  */}
                <RightContainer item lg={8} md={8} sm={8} xs={12}>
                   
                    <ProductDetail product={product}/>

                </RightContainer>

            </Container>
           }

        </Component>
    )
}
export default DetailView;



