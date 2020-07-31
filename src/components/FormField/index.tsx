import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

import { Input, TextArea, Label, LabelText } from './style';

interface Props {
  label: string;
  name: string;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField = (props: Props): ReactElement => {
  const { label, name, value, type, onChange } = props;
  return (
    <div>
      <Label>
        {`${label}: `}
        {type !== 'textarea' && <Input type={type} value={value} name={name} onChange={onChange} />}
        {type === 'textarea' && <TextArea value={value} name={name} onChange={onChange} />}
      </Label>
    </div>
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
