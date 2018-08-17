import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    lastPostId: 0,
  },
  mutations: {
    updatePosts(state, payload) {
      console.log('updatePosts');
      const { lastPostId, posts } = payload;
      state.posts = [...state.posts, ...posts];
      state.lastPostId = lastPostId;
    },
  },
  actions: {
    fetchPosts({ commit }) {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      console.log('fetchPosts');
      fetch(url)
        .then(res => res.json())
        .then(data => (commit('updatePosts', {
          lastPostId: data.pop().id,
          posts: data,
        })))
        .catch(console.error);
    },
  },
});
