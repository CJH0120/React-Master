import {all, delay, fork, put, takeLatest} from "redux-saga/effects";
import { LOAD_ALLPOSTS_REQUEST, LOAD_ALLPOSTS_SUCCESS, LOAD_ALLPOSTS_FAILURE, createDummyPost, ADD_POST_SUCCESS, ADD_POST_FAIURE, ADD_POST_REQUEST, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAIURE, ADD_COMMENT_REQUEST, REMOVE_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAIURE, REMOVE_COMMENT_FAIURE, REMOVE_COMMENT_SUCCESS, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducer/post";
import shortId from "shortid";



/*
    functioh LoadPostsAPI(data) {
        return axsios.get("/api/posts/", data)
    }
*/


function* loadposts(action){
    try{
        // const result = yiled call(LoadPostsAPI, action.data)
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


function* addPost(action){
    try{
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                content: action.data
            },
        })
        const id = shortId.generate();
        yield put({
            type: ADD_POST_TO_ME,
            data: id,
         });
    } catch (err) {
        console.log(err);
        yield put ({
            type: ADD_POST_FAIURE,
            data: err.response.data,
        })
    }
}

function* removePost(action){
    try{
        yield delay(1000);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data
        })
        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data,
        });
    } catch (err) {
        console.log(err);
        yield put ({
            type: REMOVE_POST_FAIURE,
            data: err.response.data,
        })
    }
}

function* removeComment(action){
    try{
        yield delay(1000);
        yield put ({
            type: REMOVE_COMMENT_SUCCESS,
            data: action.data
        })
    } catch(err){
        console.log(err)
        yield put({
            type: REMOVE_COMMENT_FAIURE,
            data: err.response.data
        })
    }
}

function* addComment(action){
    try{
        yield delay(1000);
        yield put ({
            type: ADD_COMMENT_SUCCESS,
            data: action.data
        })
    } catch(err){
        console.log(err)
        yield put({
            type: ADD_COMMENT_FAIURE,
            data: err.response.data
        })
    }
}

function* updatePost(action){
    try{
        yield delay(1000);
        yield put({
            type: UPDATE_POST_SUCCESS,
            data: action.data
        });
    } catch(err){
        console.log(err);
        yield put({
            type: UPDATE_POST_FAILURE,
            error: err.response.data
        })
    }
}

function* watchLoadPosts() {
    yield takeLatest(LOAD_ALLPOSTS_REQUEST, loadposts);
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost(){
    yield takeLatest(REMOVE_POST_REQUEST, removePost)
}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

function* watchRemoveComment(){
    yield takeLatest(REMOVE_COMMENT_REQUEST, removeComment)
}

function* watchUpdatePost(){
    yield takeLatest(UPDATE_POST_REQUEST, updatePost)
}

export default function* postSaga(){
    yield all([
        fork(watchLoadPosts), fork(watchAddPost), fork(watchRemovePost), fork(watchAddComment), fork(watchRemoveComment),
        fork(watchUpdatePost)
    ])
}