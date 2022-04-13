import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchRequest } from '../../store/inventory/action';
import Cards from '../Cards';

const Constain = styled.div`
  padding: 1em;
  background: black;
  height: 100vh;
`

const ListConstain = styled.li`
  text-align: center;
  position: static;
  margin-left: auto;
  margin-right: auto;
`

const FirstFont = styled.h1`
  position: static;
  font-size: 100px;
  text-align: center;
  background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  font-family: 'Rubik Glitch', cursive;
`

const HomePage = () => {
  const dispatch = useDispatch();
  
  const getData = async () => {
    try {
      const res = await fetch(
        `https://api.apispreadsheets.com/data/0M7oCHWmtW9lERVR/`
        ).then(res=>{
          if(res.status === 200){
            res.json().then(data=>{
              const apiData = data
              dispatch(fetchRequest(apiData.data));
            }).catch(err => console.log(err))
          }
        })
        console.log('res', res);
    } catch (err) {
      console.log('error:', err);
    }
  };


  useEffect(() => {
    getData();
  });

  return (
    <Constain>  
      <FirstFont>
        Exercise Blog
      </FirstFont>
      <ListConstain>
        <Cards/>
      </ListConstain>
    </Constain>
  );
};

export default React.memo(HomePage);