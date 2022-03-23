import {all} from 'redux-saga/effects'
import { requestUserWatcher } from './handlers/fetchUser'

export default function* rootSaga(){
    yield all([requestUserWatcher()])
}
