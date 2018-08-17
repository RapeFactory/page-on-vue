<template>
  <div class="post">
    <div class="title"><h3>{{title}}</h3></div>
    <div class="body">{{body}}</div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .post {
    margin: 10px;
    padding: 10px;
    text-align: left;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.7);
  }
</style>
