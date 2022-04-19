import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import styled from 'styled-components';
import { BallTriangle }  from 'react-loader-spinner';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingIndicator = (_props: any) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <div key={'LI'}>
      <Container>
        {
          promiseInProgress && 
          <BallTriangle 
            color='white'
          >
          </BallTriangle>
        }
        {
          promiseInProgress && 
          <h1 style={{color:'white' }}>loading...</h1>
        }
      </Container>
    </div>
    );
}

export default React.memo(LoadingIndicator);