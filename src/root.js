import {Provider} from 'react-redux'
import React from 'react';
import Routers from './routers/index';
import store from './store/configureStore';

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Routers />
            </Provider>
        )
    }
}