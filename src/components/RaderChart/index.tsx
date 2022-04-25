import { ResponsiveRadar } from '@nivo/radar'
import React from 'react'
import { chartData } from '../../components/RaderChart/chartData';
import styled from 'styled-components';

const RadarChartBox = styled.div`
    height: 600px;
    width: 600px;
`

const MyResponsiveRadar = () => (
    <RadarChartBox>
        <ResponsiveRadar
            data={chartData} 
            keys={[ 'chardonay', 'carmenere', 'syrah' ]}
            indexBy="taste"
            valueFormat=">-.2f"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            borderColor='#ffffff'
            gridShape="linear"
            gridLabelOffset={36}
            dotSize={10}
            dotColor={{ theme: 'grid.line.stroke' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color' }}
            colors={{ scheme: 'nivo' }}
            blendMode="normal"
            motionConfig="wobbly"
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#ffffff',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#ffffff'
                            }
                        }
                    ]
                }
            ]}
        />
    </RadarChartBox>
);
export default React.memo(MyResponsiveRadar);