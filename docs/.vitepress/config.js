const navList =[
    {text:"Project Ideas ",link: "project/index"},
    {text:"Solidity ",link: "solidity/index"},
    {text:"QA/Testing Projects",
        link: "/testing/index"},
    {text:"low-codes",
        link: "/no-codes/index"},
    {text:"About",link:"/about"}
]

const sideBars = [
    {
        text:"Guide",
        items:[
            {text: 'Build Website',link: "/guides/build-website/index"},
            {text: 'Configuration',link: "/guides/configuration/index"},
        ]
    },
    {
        text: "Awesome-QA",
        items:[
            {text: 'Opensource QA-Projects',link: "/awesome-testing/index"},
            {text: 'Testing Reading',link: "/awesome-testing/index"},
        ]
    }
]

export default {

    title: "awesomeqa-projects",
    description: "A list of awesome qa projects",
    base: "/awesome-list-for-qa/",
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
    }

}