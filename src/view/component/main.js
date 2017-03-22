import React from 'react'
import {render} from 'react-dom'
import {message,Button,Input,Pagination as _Pagination} from 'antd'
import styled from 'styled-components'
import img1 from '../res/image/1.jpg'
import {ipcRenderer} from 'electron'
import player from '../utils/player'
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
const Section=styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
`;
const Music=styled(Section)`
    -webkit-app-region:no-drag;
`;
const Search=styled(Input.Search)`
    background:rgba(255,255,255,.7);
`;
const MusicList=styled.div`
    width:100%;
    overflow:scroll;
`;
const MusicItem=styled.div`
    width:100%;
    white-space:nowrap;
    font-size:15px;
    padding:5px;
    display:flex;
    align-items:center;
    margin-bottom:1px;
    background:rgba(255,255,255,.7);
    &:hover{
        background:rgba(200,200,200,.5);
    }
`;
const MusicImg=styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
    flex-shrink:0;
    margin-right:10px;
`;
const Pager=styled.div`
    background:rgba(255,255,255,.7);
`;
const Pagination=styled(_Pagination)`
    align-self:center;
    background:transparent;
    & li{
        background:rgba(255,255,255,.3);
        margin:1px;
    }
`;
const Player=styled(Section)`
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

export default class Mian extends React.Component{

    constructor(props){
        super(props);
        message.config({top:80,duration:2});
        this.state={
            musicList:[],
            curIndex:-1,
            curMusic:null,
            total:50
        }
        this.defaultProps={

        }
        ipcRenderer.on('query-result',(event,data)=>{
            this.setState({musicList:data,curIndex:data.length>0?0:-1,curMusic:data[0]});
        })
    }

    componentWillMount(){
        this.query('董贞');
        player.init(controller.hook(this));
    }

    componentDidMount(){
    }

    query(keywords){
        ipcRenderer.send('query',{keywords:keywords});
    }

    onMusicItemClick(index){
        this.switchMusic(index);
        this.play();
    }
    onPlayBtnClick(){

    }
    switchMusic(index){
        this.setState({curIndex:index,curMusic:this.state.musicList[index]});
    }
    play(){
        player.play(this.state.curMusic.audio);
    }
    
    render(){
        return(
            <App>
                <BgLayer bgSrc={this.state.curMusic?this.state.curMusic.picUrl:''}/>
                <Music>
                  <Search onSearch={value=>this.query(value)}/>
                  <MusicList>
                  {
                    this.state.musicList.map((music,index)=>{
                        return(
                            <MusicItem key={index} onClick={this.onMusicItemClick.bind(this,index)}>
                                <MusicImg src={music.picUrl}/>
                                <span>{music.name}</span>
                            </MusicItem>
                        )
                    })
                  }
                  </MusicList>
                  <Pager>
                    <Pagination pageSize={50} total={500} />
                  </Pager>
                </Music>
                <Player>
                    <PlayerImg src={this.state.curMusic?this.state.curMusic.picUrl:''}/>
                    <PlayerCtrl>
                        <CtrlProgress></CtrlProgress>
                        <CtrlBtns>
                            <i className="icon iconfont icon-prev"></i>
                            <i className="icon iconfont icon-play" onClick={this.onPlayBtnClick.bind(this)}></i>
                            <i className="icon iconfont icon-next"></i>
                            <i className="icon iconfont icon-volume"></i>
                        </CtrlBtns>
                    </PlayerCtrl>
                </Player>
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
