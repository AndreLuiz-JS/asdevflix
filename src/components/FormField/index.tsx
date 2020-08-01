import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

import { Input, TextArea, Label, LabelText, FormFieldWrapper } from './style';

interface Props {
  label: string;
  value: string;
  type: string;
  name: string;
  suggestions: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField = (props: Props): ReactElement => {
  const { label, name, value, type, onChange, suggestions } = props;
  const isTextArea = type === 'textarea';
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={name}>
        {isTextArea ? (
          <TextArea value={value} name={name} onChange={onChange} />
        ) : (
          <Input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            autoComplete={hasSuggestions ? 'off' : 'on'}
            list={name}
          />
        )}
        <LabelText>{`${label}: `}</LabelText>
        {hasSuggestions && (
          <datalist id={name}>
            {suggestions.map((suggestion, index) => (
              <option key={index}>{suggestion}</option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  value: '',
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export { FormField };
