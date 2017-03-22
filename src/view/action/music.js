import ActionType from './ActionType'
export default{
    query:(keywords)=>({
        type:ActionType.MUSIC_QUERY,
        keywords:keywords
    }),
    queryed:(musicList)=>({
        type:ActionType.MUSIC_QUERYED,
        musicList:musicList
    }),
    play:(index)=>({
        type:ActionType.MUSIC_PLAY,
        index:index
    }),
    pause:(index)=>({
        type:ActionType.MUSIC_PAUSE,
        index:index
    }),
    updateTime:(time)=>({
        type:ActionType.UPDATE_TIME,
        time:time
    }),
    updateDuration:(duration)=>({
        type:ActionType.UPDATE_DURATION,
        duration:duration
    })
}