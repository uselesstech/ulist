import { dateZhCN, NConfigProvider, NDialogProvider, NMessageProvider, useDialog, useMessage, zhCN } from 'naive-ui'
import { createApp, defineComponent, h } from 'vue'

import './app.scss'
import layout from './layout'
createApp(defineComponent({
    render: () => h(NConfigProvider, {
        locale: zhCN,
        dateLocale: dateZhCN
    }, () => [
        h(NMessageProvider, {}, () => h(defineComponent({ setup() { window.$message = useMessage() }, render() { } }))),
        h(NDialogProvider, {}, () => h(defineComponent({ setup() { window.$dialog = useDialog() }, render() { } }))),
        h(layout)
    ])
})).mount('#app')