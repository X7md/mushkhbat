import { defineConfig } from 'astro/config';
import "rehype-figure-for-img"
import "remark-unwrap-images"
// https://astro.build/config
export default defineConfig({
    markdown: {
    remarkPlugins: [
    ["remark-gfm", {}],
    ['remark-unwrap-images', {}],
    ],
    rehypePlugins: [
    ['rehype-figure-for-img', {}],
    ['rehype-wrap-all', {selector:'table',
     wrapper: 'figure'}],
    ]
    },
});
