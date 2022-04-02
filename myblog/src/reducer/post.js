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
    allpostsError: null
}

export const LOAD_ALLPOSTS_REQUEST = "LOAD_ALLPOSTS_REQUEST";
export const LOAD_ALLPOSTS_SUCCESS = "LOAD_ALLPOSTS_SUCCESS";
export const LOAD_ALLPOSTS_FAILURE = "LOAD_ALLPOSTS_FAILURE";


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
        }
    });
}

export default reducer;