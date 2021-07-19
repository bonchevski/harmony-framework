import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { baseConnectForm } from '@base/features/base-redux-react-connect';
import {
	InjectedFormProps, ConfigProps, initialize, getFormValues
} from 'redux-form';
import { Dispatch } from 'redux';
import {
	alphaNumeric, maxLength, required,
} from 'utils/validations';
import { ApplicationState } from 'actions';
// import { WeatherFormActions, weatherFormSelector } from 'actions/redux/weatherForm';
import { FieldInput } from 'common-components/controllers';
import FieldDropDown from 'common-components/FieldDropDown';

export type Props = {

} & ConfigProps;

type FormValues = {
	cities?: Array<string>;
	inputValue?: string;
};

export interface OwnProps extends Props, LocalizeContextProps {
	formValues: (formName: string) => FormValues;
	initForm: (formName: string, data: FormValues) => void;
}
export class WeatherForm extends React.Component<OwnProps & InjectedFormProps> {
	componentDidMount(): void {
		const { initForm, form } = this.props;

		initForm(form, {
			inputValue: '',
			cities: ['1', '2'],
		});
	}

	render() {
		const { handleSubmit, formValues, form } = this.props;
		// eslint-disable-next-line no-console
		console.log(formValues(form));
		return (
			<form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
				<FieldInput
					name="inputValue"
					type="text"
					placeholder="Input Text"
					validate={[required, maxLength]}
					warn={alphaNumeric}
				/>
				<hr />
				<FieldDropDown name="" />
				<div>
					<button type="submit">
						Submit
					</button>
				</div>
			</form>
		);
	}

	handleSubmit() {
	}
}

export default baseConnectForm<any, any, Props>(WeatherForm,
	(state: ApplicationState) => {
		return {
			formValues: (formName: string) => getFormValues(formName)(state)
		};
	},
	(dispatch: Dispatch) => {
		return {
			initForm: (formName: string, data: FormValues) => dispatch(initialize(formName, data))
		};
	},
	{

	});
