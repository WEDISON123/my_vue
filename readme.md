# Vue 的世界
    可以从小程序迁移
    - 组件思想  components
        wxml + wxss + js 可复用的组件
        页面由组件构成，比标签搞一个级别
    - 数据驱动思想 不需要找DOM节点，setData() 自动更新 ？ 
        
    - wx:for 指令 v-for
    - 路由
        /pages + app.json tabbar 目录下就是路由
        wx.navigation({
            url; ''
        })
        vue ? vue-router

- 现代 web App单页应用 10年实现 6年成熟
    vue https://unpkg.com/vue@next
    - 根节点 启动web App

- Vue
    1. 现代当红的前端框架：好学，简单
    2. 组件化，数据驱动 思想
    3. Vue 是命名空间
        Vue.
    4. Vue.version vue 最新版 vue3
    5. 对照小程序，迁移学习
        - template      wxml
            模板 {{}}   组件    指令 ...
        - js data() {

        }
- v-on:click  @click 代替
    this.content = '' this直接引用data 里的数据
    this.$data.content = ''
    vue 比 react 更友好，方便入门，学习成本低
    API设计人性化

- vue 底层源码
    1. data {} 如何被监听，重新编译模板？   proxy es6
    2. vue 世界为什么要杜绝DOM 编程 #app ?
        DOM 编程慢...

- 占位符与数据绑定的区别
    普通的html 里输出的 占位符 {{}}
    标签的属性 或组件的props里 数据绑定
    - v-bind:value :value 单向数据绑定  v-bind省略 单项数据绑定
        v-on:input 绑定事件     v-on 简写为 @
    - 单向数据？
        v-bind:value + v-on:input   复杂  出现在表单元素中
    - 双向数据绑定
        v-model = v-bind:value + v-on:input
        api更友好 

