import { Typography, Box, Table, TableBody, TableRow, TableCell, styled } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';


const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p{
        font-size: 14px;
        margin-top: 10px;
    }
`

const Styledbadge = styled(Badge)
`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;

const Columntext = styled(TableRow)
`
    font-size; 14px;
    vertical-align: baseline;
    & > td{
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`






const ProductDetail= ({product})=>{

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

    return(
        <>
             <Typography>{product.title.longTitle}</Typography>
                    <Typography style={{marginTop: 5, color: '#878787', fontSize: 14}}>8 Ratings & 1 Reviews
                    <Box component="span"><img src={fassured} style={{width: 77, marginLeft:20}}/></Box>
                    </Typography>

                    <Typography>
                        <Box component="span" style={{fontSize: 28}}> ₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;

                        <Box component="span" style={{color: '#878787'}}><strike> ₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;

                        <Box component="span" style={{color: '#388E3C'}}>{product.price.discount}</Box>
                    </Typography>

                    <Typography>Available offers</Typography>
                    <SmallText>
                        <Typography><Styledbadge/>Get extra 8% off (price inclusive of cashback/coupon) </Typography>
                        <Typography><Styledbadge/>Additional 2% Off on UPI Transactions </Typography>
                        <Typography><Styledbadge/>5% Cashback on Flipkart Axis Bank Card </Typography>
                        <Typography><Styledbadge/>Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000* </Typography>
                        <Typography><Styledbadge/>10% off on DBS Bank Credit Card Transactions, up to ₹2,000 on orders of ₹5,000 and above </Typography>
                    </SmallText>

                    <Table>
                        <TableBody>
                            <Columntext>
                                <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                                <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                            </Columntext>

                            <Columntext>
                                <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                                <TableCell>No Warranty</TableCell>
                            </Columntext>

                            <Columntext>
                                <TableCell style={{color: '#878787'}}>Seller</TableCell>
                                <TableCell>
                                    <Box component="span" style={{color: '#287480'}}>SuperComNet</Box>
                                    <Typography>GST invoice available</Typography>
                                    <Typography>View more sellers from ₹{product.price.cost}</Typography>
                                </TableCell>
                            </Columntext>

                            <Columntext>
                                <TableCell colSpan={2}>
                                        <img src={adURL} style={{width: 390}} alt="points" />
                                </TableCell>
                            </Columntext>

                            <Columntext>
                                <TableCell style={{color: '#878787'}}>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </Columntext>
                        </TableBody>
                    </Table>
        </>
    )
}
export default ProductDetail;