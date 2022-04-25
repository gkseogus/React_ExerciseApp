import { ResponsiveRadar } from '@nivo/radar'
import React from 'react'
import { chartData } from '../../components/RaderChart/chartData';
import styled from 'styled-components';

const RadarChartBox = styled.div`
    @media (min-width: 760px) {
        height: 600px;
        width: 600px;
    }
    height: 300px;
    width: 300px;
    display: inline-block;
`

const MyResponsiveRadar = () => (
    <RadarChartBox>
        <ResponsiveRadar
            data={chartData} 
            keys={[ 'CurrentFigure', 'HistoricalFigures' ]}
            indexBy="taste"
            valueFormat=">-.2f"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            borderColor='#ffffff'
            gridShape="linear"
            gridLabelOffset={16}
            dotSize={6}
            dotColor={{ theme: 'grid.line.stroke' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color' }}
            colors={{ scheme: 'purple_orange' }}
            blendMode="normal"
            motionConfig="wobbly"
            fillOpacity={0.4}
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#999'
                            }
                        }
                    ]
                }
            ]}
        />
    </RadarChartBox>
);
export default React.memo(MyResponsiveRadar);