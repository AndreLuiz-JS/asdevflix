import React from 'react';
import { Input, TextArea } from './style';

interface Props {
  label: string;
  name: string;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField = (props: Props) => {
  const { label, name, value, type, onChange } = props;
  return (
    <div>
      <label>
        {`${label}: `}
        {type !== 'textarea' && <Input type={type} value={value} name={name} onChange={onChange} />}
        {type === 'textarea' && <TextArea value={value} name={name} onChange={onChange} />}
      </label>
    </div>
  );
};

export default FormField;
