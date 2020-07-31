import styled, { DefaultTheme } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  input[type='color'] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;
const LabelText = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

const inputAndTextAreaStyle = `
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${LabelText} {
    transform: scale(0.6) translateY(-10px);
  }
  ${(props: DefaultTheme) => {
    const hasValue = Boolean(props.value);
    if (hasValue)
      return `
        &:not([type='color']) + ${LabelText} {
          transform: scale(0.6) translateY(-10px);
        }
      `;
  }}
`;

const Input = styled.input`
  ${inputAndTextAreaStyle}
`;

const TextArea = styled.textarea`
  ${inputAndTextAreaStyle}
  min-height: 150px;
`;

declare module 'styled-components' {
  export interface DefaultTheme {
    label: string;
    value: string;
    type: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }
}

export { Input, TextArea, Label, LabelText, FormFieldWrapper };
