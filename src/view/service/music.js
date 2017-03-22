import player from '../utils/player'
import {ipcRenderer} from 'electron'
import action from '../action/music'
// const dispatch=null;
export default{
    init:(disp)=>{
        // dispatch=disp;
        player.init(controller);
        ipcRenderer.on('query-result',(event,data)=>{
            dispatch(action.query(data));
        })
    },
    query:(keywords)=>{
        ipcRenderer.send('query',{keywords:action.keywords});
    },
    play:(index,audio)=>{
        player.play(audio);
        dispatch(action.play(indexx));
    }
}
const controller={
    app:null,
    
    updateTime:(time)=>{
        dispatch(action.updateTime(time))
    },
    onPlay:()=>{
        if(app.status!=='paused'){
            console.log('start')
            // $('.img-music').addClass('rotate');
        }
        
        // $('.img-music').css('animation-play-state','running');
        // app.status='played';
    },
    onPause:()=>{
        
            console.log('start')
        // app.status='paused';
        // $('.img-music').css('animation-play-state','paused');
    },
    onEnd:()=>{
        // app.status='ended';
        // $('.img-music').removeClass('rotate');
        // switchMusic(app.curIndex+1);
        // play();
    },
    onDurationChange:(duration)=>{
        // app.duration=toTimeStr(duration);
    }
}

toTimeStr:(second)=>{
    var m=parseInt(second/60);
    var s=parseInt(second%60);
    return (m<10 ? '0'+m : m)+':'+(s<10 ? '0'+s : s) ; 
}