import { defineConfig } from 'vitepress'

export default defineConfig({
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide' },
            { text: 'Component', link: '/component' }
        ],
        sidebar: {
            '/guide': [
                {
                    text: "Introduction",
                    items: [
                        { text: "mafs-vue", link: '/guide/intro/mafsv'}
                    ]
                },
                {
                    text: 'Get Start',
                    items: [
                        { text: "Install", link: '/guide/getStart/install'}
                    ]
                }
            ]
        },
        // sidebar: [
        //     {
        //         text: 'Basic',
        //         items: [
        //             { text: 'Getting Start', link: '/getStart'}
        //         ]
        //     }
        // ]
    }
})