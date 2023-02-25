import { defineComponent, h } from "vue";

const CopyrightStartYear = 2023;
const CopyrightCurrentYear = new Date().getFullYear();
export default defineComponent({
    render() {
        return h("div", { class: "footer" }, [
            h("div", { class: "copyright" }, [
                h("span", {}, `Copyright © ${CopyrightStartYear}${CopyrightCurrentYear > CopyrightStartYear ? `-${CopyrightCurrentYear}` : ''}`),
                h("a", { href: "http://www.xibujisuan.com", target: "_blank" }, "Sunview."),
                h("span", {}, 'All rights reserved.')
            ])
        ])
    }
})
