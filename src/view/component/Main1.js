import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import thunk from '../middleware/thunk'
import {message,Button,Input,Pagination as _Pagination} from 'antd'
import styled from 'styled-components'
import {ipcRenderer} from 'electron'
import player from '../utils/player'
import Music from './Music'
import Player from './Player'
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
const CloseBtn=styled.div`
    width:25px;
    height:25px;
    line-height:25px;
    text-align:center;
    position:absolute;
    top:0;
    right:0;
    background:transparent;
    &:hover{
        background:red;
        color:white
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
    }
    
    render(){
        let props=this.props;
        return(
            <App>
                <BgLayer bgSrc={this.props.curMusic?this.props.curMusic.picUrl:''}/>
                <CloseBtn onClick={props.exit}>X</CloseBtn>
                <Music {...props}/>
                <Player {...props} />
            </App>
        );
    }
}


function mapStateToProps(state){
    return state.music
}
function mapDispatchToProps(dispatch){
    thunk.init(dispatch);
    return bindActionCreators(thunk,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
