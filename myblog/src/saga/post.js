import {all, delay, fork, put, takeLatest} from "redux-saga/effects";
import { LOAD_ALLPOSTS_REQUEST, LOAD_ALLPOSTS_SUCCESS, LOAD_ALLPOSTS_FAILURE, createDummyPost } from "../reducer/post";



function* loadposts(action){
    try{
        yield delay(1000);
        yield put({
            type: LOAD_ALLPOSTS_SUCCESS,
            data: createDummyPost(10),
        })
    } catch (err) {
        console.log(err);
        yield put ({
            type: LOAD_ALLPOSTS_FAILURE,
            data: err.response.data,
        })
    }
}


function* watchLoadPosts() {
    yield takeLatest(LOAD_ALLPOSTS_REQUEST, loadposts);
}

export default function* postSaga(){
    yield all([
        fork(watchLoadPosts)
    ])
}