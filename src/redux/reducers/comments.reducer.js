import {LOAD_COMMENTS} from "../actions/actions";

const commentsReducer = (state = {comments: [], comment: null}, action) => {

    const {type, payload} = action;

    switch (type) {

        case LOAD_COMMENTS:
            return {...state, comments: payload};

        default:
            return state;
    }
};


export {commentsReducer};