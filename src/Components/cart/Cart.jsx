import { useEffect, useState } from 'react';

import { Box, Typography, Button, Grid, styled } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useSelector } from "react-redux";
// import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import { buyProduct } from '../../service/PaymentAPI';

// import { post } from '../../utils/paytm';
// import { payUsingPaytm } from '../../service/api';

const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    // display: 'flex',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0'
    }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;


const Cart = () =>{

    const { cartItems} = useSelector(state => state.cart);
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        totalAmount();
    }, [cartItems]);
    
    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost); 
        });
        setPrice(price);
        setDiscount(discount);
    }
    

    const clickHandler = async() => {
      const response = await buyProduct(price-discount+40);
    //   console.log("response................",response.data.success)
    }
    return(
        <>
        { cartItems.length ? 
            <Component container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems.length})</Typography>
                    </Header>
                        {   cartItems.map(item => (
                                <CartItem item={item}/>
                            ))
                        }
                    <BottomWrapper>
                        <StyledButton variant="contained" onClick={clickHandler}>Place Order</StyledButton>
                    </BottomWrapper>
                </LeftComponent>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItems} />
                    
                </Grid>
            </Component> : <EmptyCart />
        }
        </>
    )
}

export default Cart;