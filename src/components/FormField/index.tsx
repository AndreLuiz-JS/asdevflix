import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import 'styled-components';

import { Input, TextArea, Label, LabelText, FormFieldWrapper } from './style';
import { DefaultTheme } from 'styled-components';

const FormField = (props: DefaultTheme): ReactElement => {
  const { label, name, value, type, onChange } = props;
  const isTextArea = type === 'textarea';
  return (
    <FormFieldWrapper>
      <Label htmlFor={name}>
        {isTextArea ? (
          <TextArea value={value} name={name} onChange={onChange} />
        ) : (
          <Input type={type} value={value} name={name} onChange={onChange} />
        )}
        <LabelText>{`${label}: `}</LabelText>
      </Label>
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { FormField };
