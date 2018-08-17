<template>
  <div class="grid">
    <Blog />
  </div>
</template>

<script>
// @ is an alias to /src
import Blog from '@/components/Blog.vue';

export default {
  name: 'home',
  components: {
    Blog,
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
