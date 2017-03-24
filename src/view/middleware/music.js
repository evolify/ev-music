import ActionType from '../action/ActionType'
import service from '../service/music.js'
import {ipcRenderer} from 'electron'
export default store=>next=>action=>{
	console.log(action)
	switch(action.type){
		case ActionType.MUSIC_QUERY:
			service.query(action.keywords);

        	// ipcRenderer.send('query',{keywords:action.keywords});
			break;
		default:
			next(action);
	}
}