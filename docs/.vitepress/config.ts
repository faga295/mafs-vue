import { defineConfig } from "vitepress";
import mdContainer from "markdown-it-container";
import fs from "fs";
import path from "path";
import { highlight } from "./utils/highlight";

export default defineConfig({
  themeConfig: {
    nav: [{ text: "Github", link: "https://github.com/faga295/mafs-vue" }],
    sidebar: {
      "/": [
        {
          text: "Introduction",
          items: [{ text: "mafs-vue", link: "/" }],
        },
        {
          text: "Get Start",
          items: [
            { text: "Install", link: "/guide/getStart/install" },
            { text: "Usage", link: "/guide/getStart/usage" },
          ],
        },
        {
          text: "component",
          items: [
            { text: "Mafs", link: "/guide/component/mafs" },
            {
              text: "CartesianCoordinates",
              link: "/guide/component/cartesianCoordinates",
            },
            { text: "Point", link: "/guide/component/point" },
            { text: "Text", link: "/guide/component/text" },
            { text: "Line", link: "/guide/component/line" },
            { text: "Vector", link: "/guide/component/vector" },
          ],
        },
      ],
    },
    // sidebar: [
    //     {
    //         text: 'Basic',
    //         items: [
    //             { text: 'Getting Start', link: '/getStart'}
    //         ]
    //     }
    // ]
  },
  title: "Mafs-vue",
  markdown: {
    config: (md) => {
      md.use(mdContainer, "demo", {
        validate(params) {
          return !!params.trim().match(/^demo\s*(.*)$/);
        },

        render(tokens, idx) {
          const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
          if (tokens[idx].nesting === 1 /* means the tag is opening */) {
            const description = m && m.length > 1 ? m[1] : "";
            const sourceFileToken = tokens[idx + 2];
            let source = "";
            const sourceFile = sourceFileToken.children?.[0].content ?? "";

            if (sourceFileToken.type === "inline") {
              source = fs.readFileSync(
                path.resolve(process.cwd(), "examples", `${sourceFile}.vue`),
                "utf-8",
              );
            }
            if (!source)
              throw new Error(`Incorrect source file: ${sourceFile}`);

            return `<Demo :demos="demos" source="${encodeURIComponent(
              highlight(source, "vue"),
            )}" path="${sourceFile}" raw-source="${encodeURIComponent(
              source,
            )}">`;
          } else {
            return "</Demo>";
          }
        },
      });
    },
  },
});
