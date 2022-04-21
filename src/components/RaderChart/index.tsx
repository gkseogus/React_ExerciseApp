import { ResponsiveRadar } from '@nivo/radar'
import React from 'react'
import { chartData } from './chartData';

export const MyResponsiveRadar = () => (
    <ResponsiveRadar
        data={chartData}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color', modifiers: [] }}
        dotSize={8}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={1}
        dotBorderColor={{ from: 'color', modifiers: [] }}
        colors={{ scheme: 'nivo' }}
        fillOpacity={0}
        blendMode="multiply"
        motionConfig="wobbly"
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
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)