import {message} from 'antd'
import {ipcRenderer} from 'electron'
import ActionType from '../action/ActionType'

export default function music(state={},action){
    switch(action.type){
        case ActionType.MUSIC_QUERY:
            ipcRenderer.send('query',{keywords:action.keywords});
            return state;
        case ActionType.MUSIC_QUERYED:
            let musicList=action.musicList;
            return {...state,
                musicList:musicList,
                curMusic:musicList[0]
            };
        case ActionType.MUSIC_PLAY:
            return {
                ...state,
                curIndex:action.index,
                curMusic:state.musicList[action.index]
            }
        case ActionType.UPDATE_TIME:
            return {
                ...state,
                curTime:action.time
            }
        case ActionType.UPDATE_DURATION:
            return {
                ...state,
                duration:action.duration
            }
        default:
            return state;
    }
}