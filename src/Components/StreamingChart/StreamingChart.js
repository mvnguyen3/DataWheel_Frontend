import React, { useEffect, useState } from 'react';

// Platform integration
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

// Utility
import { modifyClickRateList, sortRateListASC } from '../../Utility/Utility';

const StreamingChart = props => {

    const [data, setData] = useState([]);

    useEffect(_ => {
        props.getAllClicks();
    }, [])

    useEffect(_ => {
        const click_rate_list = props.click_rate_list;
        modifyClickRateList(click_rate_list, 12);
        sortRateListASC(click_rate_list);        
        setData(click_rate_list) 
    }, [props.click_rate_list])

    return (
        <div className='chartWrapper'>
            <Paper style={{ height: '50vh' }}>
                <Chart
                    data={data}>
                    <ArgumentAxis showLabels={true} name='a' />
                    <ValueAxis max={7} showLabels={true} />

                    <BarSeries
                        valueField="clickRateCount"
                        argumentField="time"
                    />
                    <Title text="Button Click Rate" />
                    <Animation />
                </Chart>
            </Paper>
        </div>
    )
}

export default StreamingChart;
