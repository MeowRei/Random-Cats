import {REQUEST_IMAGE, REQUEST_IMAGE_SUCCEEDED, REQUEST_IMAGE_FAILED} from "./types";

const initialState = {
    data: '',
    loading: false,
    error: false,
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_IMAGE:
            return {
                data: '',
                loading: true,
                error: false,
            };
        case REQUEST_IMAGE_SUCCEEDED:
            return {
                data: action.data[0],
                loading: false,
                error: false,
            };
        case REQUEST_IMAGE_FAILED:
            return {
                data: '',
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

export default imageReducer