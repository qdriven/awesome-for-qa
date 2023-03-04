import navs from "./data/navList.json"
import sidebarjson from "./data/sidebar.json"
const navList = navs
const sidebar = sidebarjson
export default {

    title: "Revisited Software QA",
    description: "Software QA in Short",
    base: "/awesome-for-qa/",
    themeConfig:{
        logo: "/logo.svg",
        siteTitle: "Awesome QA Projects",
        nav: navList,
        socialLinks: [
            { icon: "github", link: "https://github.com/fluent-qa" }
        ],
        footer: {
            message: "Enjoy Aweseome QA Projects",
            copyright: "Copyright © 2023-present qdriven | fluent-qa",
        },
        markdown: {
            theme: "material-palenight",
            lineNumbers: true,
          }    
    },
    sidebar
}