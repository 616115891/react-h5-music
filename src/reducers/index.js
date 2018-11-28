import {combineReducers} from 'redux';
import {spin} from './spin';
import {hotList,resultList} from './search';
import {albums, musicList, music, control, progress, audio,lyricsUpdate,favoriteMusic,volumeObj} from './music';
import {rankList} from './rank';
export default combineReducers({
    albums,
    musicList,
    music,
    control,
    progress,
    audio,
    lyricsUpdate,
    spin,
    hotList,
    resultList,
    favoriteMusic,
    volumeObj,
    rankList
})