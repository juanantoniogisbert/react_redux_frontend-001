import React from 'react';
// import Tags from './Tags';
import agent from '../../agent';
import { connect } from 'react-redux';
import HotelsList from '../hotels/HotelsList';
import { HOME_PAGE_LOADED } from '../../constants';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: HOME_PAGE_LOADED, payload }),
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.onLoad(Promise.all([agent.Hotels.getAll()]));
  }

  UNSAFE_componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">
        <div className="container page">
          <HotelsList               
            hotels={this.props.hotels}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);