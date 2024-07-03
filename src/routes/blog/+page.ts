import type { Post } from '$lib/types';

export async function load( { fetch }: { fetch: any } ){
    const res = await fetch('/api/blogs')
    const posts: Post[] = await res.json()
    return { posts }
};