import {connect} from 'react-redux';
import Album from '../../components/Home/Album';
import * as musicInfoAction from '../../actions/music';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        musicInfoActions: bindActionCreators(musicInfoAction, dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Album);