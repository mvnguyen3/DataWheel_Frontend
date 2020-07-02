import {connect} from 'react-redux';
import ReportComponent from '../../Components/Report/Report';
import {getCounterValue, getAverageTime, getAverageClick} from '../../State/Action';

const mapStateToProps = state => {
    const counter_value = state.ButtonViewReducer.counter_value;
    const average_time_click = state.ReportViewReducer.average_time_click;
    const average_click = state.ReportViewReducer.average_click;
    const click_rate = state.ReportViewReducer.click_rate;
    return{
        counter_value: counter_value,
        average_time_click: average_time_click,
        average_click: average_click,
        click_rate: click_rate,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getCounterValue: _=> {
            dispatch(getCounterValue())
        },
        getAverageTime: _=> {
            dispatch(getAverageTime())
        },
        getAverageClick: _=> {
            dispatch(getAverageClick())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReportComponent);




