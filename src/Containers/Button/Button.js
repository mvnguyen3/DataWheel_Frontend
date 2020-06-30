import {connect} from 'react-redux'
import ButtonComponent from '../../Components/Button/Button';
import {incrementCounter, getCounterValue, countFromZero} from '../../State/Action';

const mapStateToProps = state => {
    const counter_value = state.ButtonViewReducer.counter_value
    return{
        counter_value: counter_value,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: value => {
            dispatch(incrementCounter(value))
        },
        getCounterValue: _=> {
            dispatch(getCounterValue())
        },
        countFromZero: _=> {
            dispatch(countFromZero())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);





