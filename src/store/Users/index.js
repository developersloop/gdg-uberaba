const MESSAGE = 'MESSAGE';

const state = {
      mensagem:''
}

const mutations = {
    [MESSAGE](state,...params){
            state.mensagem  = params;
    }
}

const actions = {
      setMessage({commit}){
          // eslint-disable-next-line no-console
          console.log('chegou nessa action');
          const msg = 'Evoluindo primeiro estado com vuex';
           commit(MESSAGE,msg);
      }
}


const getters = {

     mss: () => {
         return state.mensagem;
     } 
}


const users = {
       namespaced:true,
       state,
       mutations,
       actions,
       getters
}

export default users;