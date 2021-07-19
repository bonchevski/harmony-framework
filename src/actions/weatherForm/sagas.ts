import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import api from 'requests';
import { WeatherFormActions } from 'actions/weatherForm';
import { WeatherFormSagaAction, WeatherResponse } from 'actions/weatherForm/interface';

export function* weatherFormSaga(action: WeatherFormSagaAction) {
	const { someData } = action;
	const response: AxiosResponse<WeatherResponse> = yield call(api.getWeatherByCity, someData);

	yield put(WeatherFormActions.setExample(response.data));
}
