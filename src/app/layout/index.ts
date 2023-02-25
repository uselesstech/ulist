import { defineComponent, h } from "vue";

import header from "./header";
import content from "./content";
import footer from "./footer";
export default defineComponent({
    render() {
        return h("div", { class: "layout" }, [
            h(header),
            h(content),
            h(footer)
        ])
    }
})