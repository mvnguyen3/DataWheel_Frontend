import {connect} from 'react-redux';
import ReportComponent from '../../Components/Report/Report';
import {getCounterValue, getAverageTime} from '../../State/Action';

const mapStateToProps = state => {
    const counter_value = state.ButtonViewReducer.counter_value;
    const average_time_click = state.ReportViewReducer.average_time_click;
    return{
        counter_value: counter_value,
        average_time_click: average_time_click,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getCounterValue: _=> {
            dispatch(getCounterValue())
        },
        getAverageTime: _=> {
            dispatch(getAverageTime())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReportComponent);




