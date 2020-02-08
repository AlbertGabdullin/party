import React from 'react';
import styled from 'styled-components';
import CloseIcon from './CloseIcon';
import { useMutation } from '@apollo/react-hooks';
import { SET_PARTY_PERSON } from '../../queries';
import { PersonItem } from '../../containers/Persons';

const Wrapper = styled.div`
  width: 100%;
  max-width: 220px;
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
  border: 1px solid #111;
  background: #dadada;
  cursor: pointer;

  ${(props: PersonImage) =>
    props.imgUrl &&
    `
    background-image: url(${props.imgUrl});
    background-size: cover;
  `}
`;

const StyledCloseIcon = styled(CloseIcon)`
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

interface PersonTypes {
  id?: number;
  imgUrl?: string;
  onRemove?: () => void;
  children?: string | React.ReactChild;
  isPersonType?: boolean;
  person?: PersonItem;
}

const Person = ({
  imgUrl,
  onRemove,
  children,
  isPersonType,
  person,
}: PersonTypes) => {
  const [setPartyPerson] = useMutation(SET_PARTY_PERSON);

  return (
    <Wrapper>
      <PersonImage
        imgUrl={imgUrl}
        onClick={
          person
            ? () =>
                setPartyPerson({
                  variables: {
                    person: person,
                  },
                })
            : undefined
        }
      >
        {onRemove && <StyledCloseIcon onClick={onRemove} />}
        {isPersonType && !imgUrl && <PersonType>{children}</PersonType>}
      </PersonImage>
    </Wrapper>
  );
};

export default Person;
