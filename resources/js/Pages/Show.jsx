import { Link, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy"

export default function Show({post}) {
    const { delete: destroy } = useForm();
    const route = useRoute();

    function submit(e) {
        e.preventDefault()
        // destroy(`/posts/${post.id}`)
        destroy(route("posts.destroy", post))
    }

    return (
        <>
            <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
                <div className="max-w-3xl mx-auto">
                    <span>Posted on: </span>
                    <span>{ new Date(post.created_at).toLocaleDateString() }</span>
                </div>
                <p className="font-medium">{post.body}</p>

                <div className="flex items-center justify-end gap-3 pt-6 mt-6 border-t border-gray-700">
                    <form onSubmit={submit}>
                        <button className="bg-red-600 hover:bg-red-700 rounded-lg text-sm px-4 py-2 text-white font-medium transition duration-150">
                            Delete
                        </button>
                    </form>
                    <Link href={`/posts/${post.id}/edit`} className="bg-blue-600 hover:bg-blue-700 rounded-lg text-sm px-4 py-2 text-white font-medium transition duration-150">
                    Update
                    </Link>
                </div>
            </div>
        </>
    )
}
