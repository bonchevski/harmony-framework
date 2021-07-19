import { createDraft, Draft } from 'immer';
import { createReducerCase } from '@base/features/base-decorator';
import { createReducer, createActions } from 'reduxsauce';
import { ApplicationState } from 'actions';
import {
	WeatherFormState, TypesNames, ActionCreator, SetExampleAction
} from './interface';

// TODO: Do not for get add your reducer to index file

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	mySaga: ['someData'], // handle by saga
	setExample: ['exampleData']
});

export const WeatherFormTypes = TypesNames;
export const WeatherFormActions = Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = createDraft<WeatherFormState>({
	country: '',
	city: '',
	current: {}
});

/* ------------- Selectors ------------- */

export const weatherFormSelector = {
	getExampleData: (state: ApplicationState) => state.weatherForm?.exampleData
};

/* ------------- Reducers ------------- */

const setExampleReducer = (draft: Draft<WeatherFormState>, action: SetExampleAction) => {
	const { exampleData } = action;
	draft.exampleData = exampleData;
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer<any, any>(INITIAL_STATE, {
	[TypesNames.SET_EXAMPLE]: createReducerCase(setExampleReducer)
});
