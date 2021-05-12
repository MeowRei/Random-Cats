import {takeEvery, put, call} from 'redux-saga/effects'
import {REQUEST_IMAGE} from "./types";
import {
    requestImageErrorAC,
    requestImageSuccessAC,
} from './actions';

export function* watcherImage() {
    yield takeEvery(REQUEST_IMAGE, fetchImage);
}

export function* fetchImage () {
    try {
        const data = yield call( () =>
            fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng&include_breeds=true',
                {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                        "x-api-key":"DEMO-API-KEY"
                    }
                }
    )
        );
        const json = yield call(() => data.json());
        yield put(requestImageSuccessAC(json))
    } catch (error) {
        yield put(requestImageErrorAC())
    }
}