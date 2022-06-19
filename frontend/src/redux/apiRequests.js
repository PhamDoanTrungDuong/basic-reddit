import { updateStart, updateError, updateSuccess } from "./userSlice";
import axios from "axios";

export const updateUser = async (user, dispatch) => {
     dispatch(updateStart());
     try{
          axios.defaults.port = 8080;
          const res = await axios.post("http://localhost:8080/v1/update", user);
          dispatch(updateSuccess(res.data));
     }catch{
          dispatch(updateError());
     }
}
