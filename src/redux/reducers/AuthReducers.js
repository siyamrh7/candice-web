import { toast } from 'react-toastify'
import jwt from 'jwt-decode'
var InitState={
    token:"",
   RegStatus:false,
   LogStatus:false,
   user:{}
}

const SellerRegister=(state = InitState,action)=>{
    switch (action.type) {
        case "SELLER_REG":
            toast.info(action.payload.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        return {...state,RegStatus:action.payload.status }
        case "SELLER_LOG":
            toast.info(action.payload.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            const {user}= jwt(localStorage.getItem("token"))
        return {...state, token:action.payload.token,LogStatus:action.payload.status,user:{...user}}
        default:
            return state
    }
}

export default SellerRegister