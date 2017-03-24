import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {message,Button,Input,Pagination as _Pagination} from 'antd'
import styled from 'styled-components'
import {bindActionCreators} from 'redux'
import thunk from '../middleware/thunk'
import {ipcRenderer} from 'electron'

const Page=styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
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

export default class Music extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.query('董贞')
    }
    render(){
        let {musicList,curMusic,query,play}=this.props;
        return(
            <Page>
                <Search onSearch={value=>query(value)}/>
                <MusicList>
                {
                    musicList.map((music,index)=>{
                        return(
                            <MusicItem key={index} onClick={play.bind(this,index,music.audio)}>
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
            </Page>
        )
    }
};