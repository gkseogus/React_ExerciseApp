import React from 'react';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import styled from 'styled-components';

const Constain = styled.div`
  color: white;
`

const PagiNation = () => {

  return (
    <Constain>
      <Pagination defaultCurrent={1} total={50} responsive={true} />
    </Constain>
  );
};

export default React.memo(PagiNation);