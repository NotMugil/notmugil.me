import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('mdsvex').mdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md','.mdx','.svelte'],
}


/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte','.md','.mdx'],
    preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

    kit: {
        adapter: adapter()
    },

    extensions: [".svelte", ".svx",".md"]
};

export default config;