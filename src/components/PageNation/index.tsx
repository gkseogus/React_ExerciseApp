import React from 'react';
import { Pagination } from 'react-bootstrap';

let active = 2;
let items:any = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const PageNation = () => {
    return (
        <div>
        <Pagination>{items}</Pagination>
      </div>
    );
};

export default React.memo(PageNation);