export default action={
    query:(keywords)=>({
        type:'MUSIC_QUERY',
        keywords:keywords
    }),
    play:(index)=>({
        type:'MUSIC_PLAYY',
        index:index
    }),
    pause:(index)=>({
        type:'MUSIC_PAUSE',
        index:index
    })
}

// export default action={
//     query:(keywords)=>({
//         type:'MUSIC_QUERY',
//         keywords:keywords
//     }),
//     queryed:(musicList)=>({
//         type:'MUSIC_QUERYED',
//         musicList:musicList
//     }),
//     play:(index)=>({
//         type:'MUSIC_PLAYY',
//         index:index
//     }),
//     pause:(index)=>({
//         type:'MUSIC_PAUSE',
//         index:index
//     })
// }