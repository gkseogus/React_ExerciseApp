import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import styled from 'styled-components';
import ProteinItems from '../ProteinItems';
import { fetchRequest } from '../../store/inventory/action';
import { useDispatch } from 'react-redux';


const Constain = styled.div`
  padding: 1em;
  background: black;
  height: 100vh;
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

const ProteinForm = styled.div`
    display: flex;
    justify-content: center;
`
const { Search } = Input;

const ProteinPage = (itme: any) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const res = await fetch(
        `https://api.apispreadsheets.com/data/BExLWJZUR6WWSFGu/`
        ).then(res=>{
          if(res.status === 200){
            res.json().then(data=>{
              const apiData = data
              dispatch(fetchRequest(apiData));
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
  })

  return (
    <Constain>  
        <FirstFont>
            Protein 
        </FirstFont>
        <ProteinForm>
            <Space direction="vertical">
                <Search placeholder="search protein" allowClear onSearch={setName} style={{ 
                    width: 400,
                    padding: '20px'
                    }} />
            </Space>
        </ProteinForm>
        <ProteinItems/>
    </Constain>
  );
};

export default React.memo(ProteinPage);