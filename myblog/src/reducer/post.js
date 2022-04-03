import faker from "@faker-js/faker"
import produce from "immer";
import shortId from "shortid"


const initialState = {
    allPosts: [
        {
            id: 1,
            User: {
                id:1,
                nickname: "김성용"
            },
            content: "김성용 강사님 멋있으세요",
            Comments: [
                {
                    User: {
                        id: shortId.generate(),
                        nickname: "기성용",
                    },
                    content: "뭐야 짭이네...",
                    id: shortId.generate()
                }
            ]
        }
    ],
    allpostsLoding: false,
    allpostsDone: false,
    allpostsError: null,
    addpostLoading: false,
    addpostDone: false,
    addpostError: null,
    removepostLoading: false,
    removepostDone: false,
    removepostError: null,
    addcommentLoading: false,
    addcommentDone: false,
    addcommentError: null,
    removecommentLoading: false,
    removecommentDone: false,
    removecommentError: null,
    updatepostLoading: false,
    updatepostDone: false,
    updatepostError: null,
}

export const LOAD_ALLPOSTS_REQUEST = "LOAD_ALLPOSTS_REQUEST";
export const LOAD_ALLPOSTS_SUCCESS = "LOAD_ALLPOSTS_SUCCESS";
export const LOAD_ALLPOSTS_FAILURE = "LOAD_ALLPOSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS"; 
export const ADD_POST_FAIURE = "ADD_POST_FAIURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAIURE = "REMOVE_POST_FAIURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST"
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS"; 
export const ADD_COMMENT_FAIURE = "ADD_COMMENT_FAIURE";

export const REMOVE_COMMENT_REQUEST = "REMOVE_COMMENT_REQUEST";
export const REMOVE_COMMENT_SUCCESS = "REMOVE_COMMENT_SUCCESS";
export const REMOVE_COMMENT_FAIURE = "REMOVE_COMMENT_FAIURE";

export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

export const createDummyPost = (number) => 
    Array(number)
    .fill()
    .map(()=>({
        id: shortId.generate(),
        User:{
            id: shortId.generate(),
            nickname: faker.name.findName(),
        },
        content: faker.lorem.paragraph(),
        Comments : [
            {
            User:{
                id: shortId.generate(),
                nickname: faker.name.findName(),
            },
            content: faker.lorem.sentence(),
            id: shortId.generate(),
        },
    ],
    }));


const dummpyPost = (data) => ({
    id: shortId.generate(),
    content: data.content,
    User:{
        id: 1,
        nickname: "김성용",
    },
    Comments: [],
})

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: "김성용"
    }
})



const reducer = (state = initialState, action) =>{
    return produce(state, (draft) =>{
        switch (action.type){
            case LOAD_ALLPOSTS_REQUEST:
                draft.allpostsLoding = true;
                draft.allpostsDone = false;
                draft.allpostsError = null;
                break;

            case LOAD_ALLPOSTS_SUCCESS:
                draft.allpostsLoding = false;
                draft.allpostsDone = true;
                draft.allPosts = action.data.concat(draft.allPosts);
                break;

            case LOAD_ALLPOSTS_FAILURE:
                draft.allpostsLoding = false;
                draft.allpostsDone = false;
                draft.allpostsError = action.error;
                break;

            case ADD_POST_REQUEST:
                draft.addpostLoading = true;
                draft.addpostDone = false;
                draft.addpostError = null;
                break;

            case ADD_POST_SUCCESS:
                draft.addpostLoading = false;
                draft.addpostDone = true;
                draft.allPosts.unshift(dummpyPost(action.data))
                break;

            case ADD_POST_FAIURE:
                draft.addpostLoading = false;
                draft.addpostDone = false;
                draft.addpostError = action.error;
                break;

            case REMOVE_POST_REQUEST:
                draft.removepostLoading = true;
                draft.removepostDone = false;
                draft.removepostError = null;
                break;

            case REMOVE_POST_SUCCESS:
                draft.removepostLoading = false;
                draft.removepostDone = true;
                draft.allPosts = draft.allPosts.filter((v) => v.id !== action.data);
                break;

            case REMOVE_POST_FAIURE:
                draft.removepostLoading = false;
                draft.removepostDone = false;
                draft.removepostError = action.error;
                break;

        
            case ADD_COMMENT_REQUEST:
                draft.addcommentLoading = true;
                draft.addcommentDone = false;
                draft.addcommentError = null;
                break;

            case ADD_COMMENT_SUCCESS:
                draft.addcommentLoading = false;
                draft.addcommentDone = true;
                
                const post = draft.allPosts.find((v)=> v.id === action.data.PostId);
                post.Comments.unshift(dummyComment(action.data.content))

                break;

            case ADD_COMMENT_FAIURE:
                draft.addcommentLoading = false;
                draft.addcommentDone = false;
                draft.addcommentError = action.error;
                break;


            case REMOVE_COMMENT_REQUEST:
                draft.removecommentLoading = true;
                draft.removecommentDone = false;
                draft.removecommentError = null;
                break;

            case REMOVE_COMMENT_SUCCESS:
                draft.removecommentLoading = false;
                draft.removecommentDone = true;
                draft.allPosts.find((v) => v.id === action.data.PostId).Comments =
                draft.allPosts
                    .find((v) => v.id === action.data.PostId)
                    .Comments.filter((v)=> v.id !== action.data.commentId);
                break;

            case REMOVE_COMMENT_FAIURE:
                draft.removecommentLoading = false;
                draft.removecommentDone = false;
                draft.removecommentError = action.error;
                break;


            case UPDATE_POST_REQUEST:
                draft.updatepostDone = false;
                draft.updatepostError = null;
                break;

            case UPDATE_POST_SUCCESS:
                draft.updatepostDone = true;
                draft.allPosts.find((v) => v.id === action.data.PostId).content = action.data.content;
                break;

            case UPDATE_POST_FAILURE:
                draft.updatepostDone = false;
                draft.updatepostError = action.error;

            default:
                return state;
        }
    });
}

export default reducer;