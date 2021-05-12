import {REQUEST_IMAGE, REQUEST_IMAGE_SUCCEEDED, REQUEST_IMAGE_FAILED} from "./types";

export const requestImageAC = () => {
    return {type: REQUEST_IMAGE}
};

export const requestImageSuccessAC = (data) => {
    return {type: REQUEST_IMAGE_SUCCEEDED, data}
};

export const requestImageErrorAC = () => {
    return {type: REQUEST_IMAGE_FAILED}
};