/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Field, BaseFieldProps, WrappedFieldProps } from 'redux-form';
import { Select, SelectProps } from '@material-ui/core';

export type Props = {

} & BaseFieldProps & SelectProps;

class FieldDropDown extends React.Component<Props> {
	renderField(fieldData: WrappedFieldProps) {
		const { input, meta, ...rest } = fieldData;
		const { touched, error, warning } = meta;
		const errorMessage = touched ? (warning || error) : undefined;

		return (
			<Select {...input} {...rest} error={errorMessage} />
		);
	}

	render() {
		return (
			<Field
				{...(this.props as BaseFieldProps)}
				component={this.renderField}
			/>
		);
	}
}

export default FieldDropDown;
