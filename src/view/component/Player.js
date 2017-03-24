import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components'
import {message} from 'antd'

const View=styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
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
    display:flex;
    flex-direction:row;
    align-items:center;
    & .progress-track{
        width:150px;
        height:1px;
        background-color:rgba(50,50,50,.5);
        display:flex;
        flex-direction:row;
        align-items:center;

        & .progress{
            height:100%;
            background-color:green;
        }
        & .pointer{
            width:2px;
            height:10px;
            border-radius:50%;
            background-color:black;
        }
    }
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
export default class Player extends React.Component{

    constructor(props){
        super(props)
    }

    onPlayBtnClick(){
        let{status,curMusic,curIndex,play,pause}=this.props;
        if(status=='paused'){
            play(curIndex,curMusic.audio)
        }else{
            pause();
        }
    }

     toTimeStr(second){
        var m=parseInt(second/60);
        var s=parseInt(second%60);
        return (m<10 ? '0'+m : m)+':'+(s<10 ? '0'+s : s) ; 
    }

    render(){
        let {curIndex,curMusic,curTime,duration,status,play}=this.props;
        return(
            <View>
                <PlayerImg src={curMusic?curMusic.picUrl:''}/>
                    <PlayerCtrl>
                        <CtrlProgress>
                            <span className='cur-time'>{this.toTimeStr(curTime)}</span>
                            <div className='progress-track'>
                                <div className="progress" style={{width:curTime/duration*100+'%'}}></div>
                                <div className="pointer"></div>
                            </div>
                            <span className="duration">{this.toTimeStr(duration)}</span>
                        </CtrlProgress>
                        <CtrlBtns>
                            <i className="icon iconfont icon-prev"></i>
                            <i className={"icon iconfont "+(status=='playing'?'icon-pause':'icon-play')} onClick={this.onPlayBtnClick.bind(this)}></i>
                            <i className="icon iconfont icon-next"></i>
                            <i className="icon iconfont icon-volume"></i>
                        </CtrlBtns>
                    </PlayerCtrl>
            </View>
        )
    }
}
