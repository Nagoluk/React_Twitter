import { call, put, takeLatest} from 'redux-saga/effects';
import { setTweets, setTweetsLoadingState, TweetsActionsType } from './actionCreators';
import { TweetsApi } from './../../../services/api/tweetsApi';
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest(): any {
    try {
        const items = yield call(TweetsApi.fetchTweets);  
        yield put(setTweets(items)); 
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));  
        
        // yield put - то же самое что и диспатч в редаксе
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}