import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { Result } from '../../types';
import RemoveIcon from './RemoveIcon';

const Wrapper = styled.div`
  width: 100%;
  max-width: 200px;
  height: 220px;
  padding: 10px;
`;

interface PersonImage {
  imgUrl?: string;
}

const PersonImage = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background: #dadada;
  cursor: pointer;

  ${(props: PersonImage) =>
    props.imgUrl &&
    `
    background-image: url(${props.imgUrl});
    background-size: cover;
  `}
`;

const StyledCloseIcon = styled(RemoveIcon)`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

const PersonType = styled.span`
  position: absolute;
  bottom: 15px;
  color: #fff;
  display: block;
  width: 100%;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
`;

interface PersonProps {
  id?: string;
  imgUrl?: string;
  onRemove?: () => void;
  children?: string | React.ReactChild;
  isPersonType?: boolean;
  person?: Result;
  setPerson?: () => void;
}

const Person = ({
  imgUrl,
  onRemove,
  children,
  isPersonType,
  setPerson,
}: PersonProps): JSX.Element => {
  const handleRemove = (e: MouseEvent): void => {
    e.stopPropagation();
    if (onRemove) {
      onRemove();
    }
  };
  return (
    <Wrapper>
      <PersonImage imgUrl={imgUrl} onClick={setPerson}>
        {onRemove && <StyledCloseIcon onClick={handleRemove} />}
        {isPersonType && !imgUrl && <PersonType>{children}</PersonType>}
      </PersonImage>
    </Wrapper>
  );
};

export default Person;
