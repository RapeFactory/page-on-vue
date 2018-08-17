import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    posts: [],
    lastPostId: 0,
  },
  mutations: {
    updatePosts(state, payload) {
      const { lastPostId, posts } = payload;
      if (state.lastPostId !== lastPostId) {
        state.posts = [...state.posts, ...posts];
        state.lastPostId = lastPostId;
      }
    },
  },
  actions: {
    getPosts({ commit }, n) {
      const query = n ? '/' + n : '';
      const url = 'https://jsonplaceholder.typicode.com/posts' + query;
      fetch(url)
        .then(res => res.json())
        .then(
          data =>
            data instanceof Array
              ? commit('updatePosts', {
                  lastPostId: data.pop().id,
                  posts: data,
                })
              : commit('updatePosts', {
                  lastPostId: data.id,
                  posts: [data],
                })
        )
        .catch(console.error);
    },
  },
});
