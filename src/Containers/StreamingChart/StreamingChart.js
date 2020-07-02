import StreamingChartComponent from '../../Components/StreamingChart/StreamingChart';
import {connect} from 'react-redux';
import {getAllClicks} from '../../State/Action';


const mapStateToProps = state => {    
    const click_rate_list = state.StreamingChartReducer.click_rate_list;
    return {        
        click_rate_list: click_rate_list,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllClicks: _=> {
            dispatch(getAllClicks())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamingChartComponent);



