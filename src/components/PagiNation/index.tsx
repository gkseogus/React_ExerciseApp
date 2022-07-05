import React from 'react';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import styled from 'styled-components';
import { ApplicationState } from '../../store';
import { useSelector } from 'react-redux';

const Constain = styled.div`
  color: white;
`

const PagiNation = () => {
  const pageNumbers = [];

  const rootData = useSelector(
    (state: ApplicationState) => state.inventory.data
  );

  const onChange = () => {
    for (let i = 0; i <= Math.ceil(rootData.length / 5); i++){
      pageNumbers.push(i);
      console.log(pageNumbers.push(i))
    }
  }

  return (
    <Constain>
      <Pagination defaultCurrent={1} total={50} responsive={true} defaultPageSize={5} onChange={onChange} pageSize={5} />
    </Constain>
  );
};

export default React.memo(PagiNation);