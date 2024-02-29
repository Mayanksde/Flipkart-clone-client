import {buyProductApi , verifyPaymentApi} from "./api";



function loadScript(src){
    return new Promise((resolve)=>{
        const script = document.createElement("script")
        script.src=src;

        script.onload = () =>{
            resolve(true)
        }
        script.onerror=()=>{
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

export async function buyProduct(total_amount){

    console.log(total_amount)
    try{
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js") 
        if(!res){
            return
        }

        const orderResponse = await buyProductApi({total_amount})
        console.log("pehla step complete")

        if(!orderResponse.data.success){
            throw new Error(orderResponse.data.message)
        }
        console.log("response aa gya capture payment ka ",orderResponse)

        const options = {
            key:"rzp_test_X3BS8ufVtjPXHQ",
            currency:orderResponse.data.data.currency,
            amount:`${orderResponse.data.data.amount}`,
            order_id:orderResponse.data.data.id,
            name:"Flipkart Official",
            description:"Happy Journey towards your better future",
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open();
        paymentObject.on("payment.failed",function(response){
            console.log(response.error,"jai baaba ki ")
        })

        console.log("Window step complete")
    } catch(error){
        console.log("Payment Api eror....",error)
    }
    
}


