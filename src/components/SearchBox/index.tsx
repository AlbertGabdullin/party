import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  border: 1px solid #a0a0a0;
  width: 100%;
  font-size: 30px;
  line-height: 35px;
  padding: 21px 25px;
  margin-bottom: 30px;
`;

interface SearchBoxProps {
  onChange: (value: string | number) => void;
}

const SearchBox = ({ onChange }: SearchBoxProps) => (
  <SearchInput
    onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
      onChange(e.target.value)
    }
  />
);

export default SearchBox;
