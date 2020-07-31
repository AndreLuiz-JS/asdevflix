import styled from 'styled-components';

const Input = styled.input`
  margin: 0 auto 15px;
  line-height: 32px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  &[type='text'] {
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  line-height: 20px;
  margin: 0 auto 15px;
  font-size: 14px;
  &::placeholder {
    color: #141414;
    &:hover {
      font-size: 8px;
    }
  }
`;

const Label = styled.label``;
const LabelText = styled.span``;

export { Input, TextArea, Label, LabelText };
