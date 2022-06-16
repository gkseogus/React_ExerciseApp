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

  const rootData = useSelector(
    (state: ApplicationState) => state.inventory.data
  );

  const onChange = () => {
    for(let i=0; i<rootData.length; i++){
      return rootData[i]
    }
  }

  return (
    <Constain>
      <Pagination defaultCurrent={1} total={50} responsive={true} defaultPageSize={5} onChange={onChange} pageSize={5} />
    </Constain>
  );
};

export default React.memo(PagiNation);