import React, { useState } from 'react';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import SearchBox from './components/SearchBox';
import './App.css';
import Persons from './containers/Persons';
import Party from './containers/Party';

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding-top: 150px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [val, setValue] = useState('');
  const [removed, setRemoved] = useState<Array<number | string>>([]);

  const onChange = debounce(value => setValue(value), 300);

  const onRemove = (id: number | string): void => {
    const removedWithNewPerson = [...removed];
    removedWithNewPerson.push(id);
    setRemoved(removedWithNewPerson);
  };

  return (
    <Container>
      <SearchBox onChange={onChange} />
      {val && val.length > 2 ? (
        <Persons value={val} removed={removed} onRemove={onRemove} />
      ) : null}
      <Party />
    </Container>
  );
};

export default App;
