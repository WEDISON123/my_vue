<template>
    <div class="container mb-5">
      <nav-bar></nav-bar>
      <div style="max-width: 90%;width: 500px;margin: auto;">
        <b v-if="state.loading">Loading</b>
        <post :detail="post" v-for="post in state.posts" key="post.id"></post>
      </div>
    </div>
</template>

<script setup>
    import NavBar from './components/NavBar.vue'
    import Post from './components/Post.vue'
    import { reactive, onMounted } from 'vue' // composition api
    import API from './api/index' // 模块化

    // 状态
    const state = reactive({
        loading: true,
        posts: []
    })

    onMounted(() => {
        console.log('挂载了...');
        API
            .getTopStories()
            .then((res) => {
                const { data } = res
                const da = data.splice(0, 30)
                console.log(da);
                da.forEach(id => {
                    API
                        .fetchTtem(id)
                        .then(res => {
                            // console.log(res);
                            state.loading = !state.loading
                            state.posts.push(res.data)
                        })
                })
            })
    })
</script>

<style>
</style>