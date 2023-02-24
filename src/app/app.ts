import { createApp, defineComponent, h } from 'vue'

import './app.scss'
createApp(defineComponent({
    render: () => h("div", {}, "Hello World!")
})).mount('#app')