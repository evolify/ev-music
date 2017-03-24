import player from '../utils/player'
import {ipcRenderer} from 'electron'
import actions from '../action/music'
console.log(this,0)
export default{
    init:(dispatch)=>{
        controller.init(dispatch)
        player.init(controller)
        ipcRenderer.on('query-result',(event,data)=>{
            dispatch(actions.queryed(data));
        })
    },
    exit:()=>{
        ipcRenderer.send('exit')
    },
    query:(keywords)=>{
        return dispatch=>{
            console.log(dispatch,3)
            ipcRenderer.send('query',{keywords:keywords});
            dispatch(actions.test)
        }
    },
    play:(index,audio)=>{
        player.play(audio);
        return dispatch=>{
            dispatch(actions.play(index));
        }
    },
    pause:()=>{
        player.pause();
        return dispatch=>{
            dispatch(actions.pause())
        }
    }
}
const controller={
    dispatch:null,
    init:function(disp){
        controller.dispatch=disp;
        console.log(this)
    },
    updateTime:function(time){
        controller.dispatch(actions.updateTime(time))
    },
    onPlay:()=>{
        controller.dispatch(actions.updateStatus('playing'))
    },
    onPause:()=>{
        controller.dispatch(actions.updateStatus('paused'))
    },
    onEnd:()=>{
        controller.dispatch(actions.updateStatus('finished'))
    },
    onDurationChange:function(duration){
        controller.dispatch(actions.updateDuration(duration))
    }
}