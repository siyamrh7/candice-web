import axios from 'axios'
export const SellerRegAction=(state)=>async(dispatch)=>{
    try {
        const {data}=await axios.post('http://localhost:2000/createseller',{...state})
        dispatch({type:"SELLER_REG",payload:data})
    } catch (error) {
        dispatch({type:"SELLER_REG",payload:error.message})
    }
}

export const SellerLogAction=(state)=>async(dispatch)=>{
    try {
        
        const {data}=await axios.post('http://localhost:2000/loginseller',{...state})
        dispatch({type:"SELLER_LOG",payload:data})
        if(data.status){
            localStorage.setItem("token",data.token)
            
        }
    } catch (error) {
        dispatch({type:"SELLER_LOG",payload:error.message})
    }
}
