import { error } from "@sveltejs/kit"

export async function load({ params }: { params: any }) {
    try {

    
    const blog = await import(`../../../posts/${params.slug}.md`)

    return {
        content: blog.default,
        meta: blog.metadata
    }
    } catch (e) {
        throw error(404 `${params.slug} is Not found`)
    }
}