<template>
  <div class="blog">
    <h1>Fake Posts Blog</h1>
    <Post v-for="post in posts" :key="post.id" v-bind="post" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Post from './Post.vue';

export default {
  name: 'Blog',
  components: {
    Post,
  },
  computed: {
    ...mapState(['posts']),
  },
  methods: {
    ...mapActions(['getPosts']),
  },
  created() {
    this.getPosts();
  },
};
</script>

<style scoped lang="scss">
.blog {
  margin-top: 80px;
}
</style>
