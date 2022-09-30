import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor"

export default ({ email, password, userName: username, firstName: first_name, lastName: last_name }) => dispatch => {

    dispatch({
        type: REGISTER_LOADING
    });

    console.log(axiosInstance.baseURL)
    axiosInstance.post("auth/register", {
        email, password, username, first_name, last_name
    }).then((res) => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
    })
        .catch((err) => {
            console.log('err', err)
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response ? err.response.data : { error: "Unknown error" },
            });
        });
}


export const clearAuthState = () => dispatch => {
    dispatch({
        type: CLEAR_AUTH_STATE
    })
}