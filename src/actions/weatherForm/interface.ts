import { Action } from 'redux';

/* ------------- Define Actions and State ------------- */
export interface WeatherFormState {
	country: string;
	city: string;
	temp_c: string;
	description: string;

}

export enum TypesNames {
	SET_EXAMPLE = 'SET_EXAMPLE',
	MY_SAGA = 'MY_SAGA'
}

export declare function SetExampleFunction(exampleData: WeatherFormState): SetExampleAction;
export declare function weatherFormSagaFunction(someData: string): WeatherFormSagaAction;

export interface ActionCreator {
	setExample: typeof SetExampleFunction;
	mySaga: typeof weatherFormSagaFunction;
}

export interface SetExampleAction extends Action<TypesNames.SET_EXAMPLE> {
	exampleData: string;
}

export interface WeatherFormSagaAction extends Action<TypesNames.MY_SAGA> {
	someData: string;
}

/* ------------- Define Any Interfaces ------------- */
export interface WeatherResponse {
	city: string;
	country: string;
	temp_c: string;
	description: string;
}
