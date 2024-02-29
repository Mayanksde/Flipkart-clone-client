import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateSignup = async (data) =>{
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log('Error while calling signup api', error);
    }
}


export const authenticateLogin = async (data) =>{
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log('Error while calling login api', error);
        return error.response;
    }
}


export const buyProductApi = async (data) =>{
    try {
        return await axios.post(`http://localhost:8000/buyproduct`, data);
    } catch (error) {
        console.log('Error while buying Product', error);
        return error.response;
    }
}

export const verifyPaymentApi = async (data) =>{
    try {
        return await axios.post(`${URL}/verifysignature`, data);
    } catch (error) {
        console.log('Error while calling login api', error);
        return error.response;
    }
}
