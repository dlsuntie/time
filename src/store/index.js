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
			}/*,
			navif(state,Boolean){
				state.showNav=false
			}*/
		},
		actions:{
			nowlist(state,payload){
				axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201810189275768015").then(res=>{
					//console.log(res.data.ms)
				   
				    store.commit("nowmutation",res.data.ms)
				}).catch(res=>{
					//console.log(error)
				})
			}/*,
			yglist(state,payload){
				axios.get("/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=2018101815296551").then(res=>{
					console.log(res.data.attention)
					store.commit("ygtation",res.data.attention)
				}).catch(res=>{
					console.log(error)
				})
			}*/
		}
})
export default store;