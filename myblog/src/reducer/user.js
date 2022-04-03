import produce from "immer";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "./post";


const initialState = {
    info: null,
    loginLoading : false,
    loginDone: false,
    loginError: null,
    logoutLoading: false,
    logoutDone: false,
    logoutError: null,
    registerLoading: false,
    registerDone: false,
    registertError: null,
}

const dummUser = (data) => ({
    ...data,
    nickname: "성용님",
    id: 1,
    Posts: [ { id: 1 } ],
});

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const REGISTER_DONE_REQUEST = "REGISTER_DONE_REQUEST";



const reducer = (state= initialState, action) =>
    produce(state, (drfat) =>{
        switch (action.type){
            case LOG_IN_REQUEST:
                drfat.loginLoading = true;
                drfat.loginDone = false;
                drfat.loginError = null;
                break;
            case LOG_IN_SUCCESS:
                drfat.loginLoading = false;
                drfat.loginDone = true;
                drfat.info = dummUser(action.data);
                break;
            case LOG_IN_FAILURE:
                drfat.loginLoading = false;
                drfat.loginError = action.error;
                break;

            case LOG_OUT_REQUEST:
                drfat.logoutLoading = true;
                drfat.logoutDone = false;
                drfat.logoutError = null;
                break;
            case LOG_OUT_SUCCESS:
                drfat.logoutLoading = false;
                drfat.logoutDone = true;
                drfat.info = null;
                break;
            case LOG_OUT_FAILURE:
                drfat.logoutLoading = false;
                drfat.logoutError = action.error;
                break;

            case REGISTER_REQUEST:
                drfat.registerLoading = true;
                drfat.registertDone = false;
                drfat.registerError = null;
                break;
            
            case REGISTER_SUCCESS:
                drfat.registerLoading = false;
                drfat.registerDone = true;
                break;

            case REGISTER_FAILURE:
                drfat.registerLoading = false;
                drfat.registerError = action.error;
                break;

            case REGISTER_DONE_REQUEST:
                drfat.registerDone = false;
                break;
            
            case ADD_POST_TO_ME:
                drfat.info.Posts.unshift({ id: action.data });
                break;

            case REMOVE_POST_OF_ME:
                drfat.info.Posts = drfat.info.Posts.filter((v) => v.id !== action.data);
                break;
        }
    })
export default reducer;