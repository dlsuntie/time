import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
Vue.use(Vuex);

let store =new Vuex.Store({
		state:{
			list:[]	
		},
		mutations:{
			nowmutation(state,payload){
				state.list=payload;
			}
		},
		actions:{
			nowlist(state,payload){
				axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201810189275768015").then(res=>{
					//console.log(res.data.ms)
				   
				    store.commit("nowmutation",res.data.ms)
				}).catch(res=>{
					//console.log(error)
				})
			}
		}
})
export default store;