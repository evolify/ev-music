import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components'

const Player=styled.div`
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
class Player extends React.Component{

    render(){
        return(
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
        )
    }
}
function mapStateToProps(state){

}
function mapDispatchToProps(dispatch){
    
};
