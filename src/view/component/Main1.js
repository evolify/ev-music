import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {message,Button,Input,Pagination as _Pagination} from 'antd'
import styled from 'styled-components'
import img1 from '../res/image/1.jpg'
import {ipcRenderer} from 'electron'
import player from '../utils/player'
import Music from './Music'
const App=styled.div`
  width:600px;
  height:400px;
  display:flex;
  border:1px solid gray;
  position:relative;
`;
const BgLayer=styled.div`
    width:100%;
    height:100%;
    position:absolute;
    z-index:-1;
    background-size:100%;
    background-position:center;
    background-repeat:no-repeat;
    background-image:url(${props=>props.bgSrc});
    filter:blur(15px);
`;
const Player=styled.div`
    align-items:center;
    justify-content:space-between;
`;
const PlayerImg=styled.img`
    width:150px;
    height:150px;
    border-radius:50%;
    margin-top:20px;
`;
const PlayerCtrl=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const CtrlProgress=styled.div`
    
`;
const CtrlBtns=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding:10px;
    & .icon{
        -webkit-app-region:no-drag;
        margin:5px;
    }
`;

class Main extends React.Component{

    constructor(props){
        super(props);
        message.config({top:80,duration:2});
    }

    componentWillMount(){
        // this.query('董贞');
        // player.init(controller.hook(this));
    }

    componentDidMount(){
        message.info(this.props.curIndex)
    }
    
    render(){
        return(
            <App>
                <BgLayer bgSrc={this.props.curMusic?this.props.curMusic.picUrl:''}/>
                <Music />
            </App>
        );
    }
}

const controller={
    app:null,

    hook:(obj)=>{
        controller.app=obj;
        return controller;
    },
    
    updateTime:(time)=>{
        // app.currentTime=toTimeStr(time);
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

function mapStateToProps(state){
    return state.music
}
function mapDispatchToProps(){

}

export default connect(mapStateToProps)(Main);
