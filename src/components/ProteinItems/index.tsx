import React, { useEffect } from 'react';
import { Figure } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ApplicationState } from '../../store';
import { fetchRequest } from '../../store/inventory/action';

const Constain = styled.div`
    display: flex;
    justify-content: center;
`
const ListConstain = styled.li`
  text-align: center;
  position: static;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`

const ExplainFont = styled.h6`
    color: white;
    text-align: left;
`

const ProteinItems = () => {
    const dispatch = useDispatch();
      
    const rootData = useSelector(
        (state: ApplicationState) => state.inventory.data
      );
    
    console.log('test',rootData[0]);
      
    useEffect(() => {
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
    
        getData();
    });

    return (
    <Constain>
        <ListConstain>
            <Figure style={{ padding: '10px'}}>
                <Figure.Image
                    width={200}
                    height={200}
                    alt="200x200"
                    src={rootData[0].image}
                />
                <Figure.Caption>
                    <ExplainFont>
                        {
                            // rootData.map(item => {
                            //     return(
                            //         <div>
                            //             {item.name}
                            //         </div>
                            //     );
                            // })
                        }
                    </ExplainFont>
                </Figure.Caption>
            </Figure>
        </ListConstain>
    </Constain>
    );
};

export default React.memo(ProteinItems);