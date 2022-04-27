import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

const PagiNation = () => {
  const items = [];

  const active = 1;
  for (let number = 1; number <= items.length; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
    return (
        <div>
        <Pagination>{items}</Pagination>
      </div>
    );
};

export default React.memo(PagiNation);