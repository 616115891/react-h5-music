import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as musicInfoAction from '../../actions/music';
import Play from '../../components/Play/Play';

const mapStateToProps = (state) => {
    return state;
};

const mapDispacthToProps = (dispatch) => {
    return {
        musicInfoActions: bindActionCreators(musicInfoAction, dispatch)
    }
};

export default connect(mapStateToProps,mapDispacthToProps)(Play);