import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Index from '../container/Home/Index';
import AlbumList from '../container/Home/AlbumList';
import Album from '../container/Home/Album';
import New from '../container/New/New';
import Rank from '../container/Rank/Rank';
import RankList from '../container/Rank/RankList';
import Play from '../container/Play/Play';
import Player from '../container/Play/Player';
const Routers = () => (
    <div>
        <Player/>
        <Router>
            <Switch>
                <Route exact path={"/"} component={Index}/>
                <Route exact path={"/album"} component={AlbumList}/>
                <Route path="/album/:id" component={Album}/>
                <Route path={"/new"} component={New}/>
                <Route exact path={"/rank"} component={Rank}/>
                <Route path={"/rank/list/:id"} component={RankList}/>
                <Route path={"/play"} component={Play}/>
            </Switch>
        </Router>
    </div>
);

export default Routers;