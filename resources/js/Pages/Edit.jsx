import { Head, useForm } from "@inertiajs/react";

// Perhatikan bahwa nama komponen ini kita anggap sebagai Edit, meskipun di kode Anda tertulis Create
export default function Edit({ post }) {
    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    });

    function submit(e) {
        e.preventDefault();
        put(`/posts/${post.id}`);
    }

    return (
        // Container utama: Latar Belakang Hitam Gelap dan Teks Putih/Terang
        <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
            <Head title="Edit"/>

            {/* Judul Halaman */}
            <h1 className="text-3xl font-bold text-center text-blue-500 mb-8 mt-4">
                Update your post
            </h1>

            {/* Kontainer Formulir (Card) */}
            <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
                <form onSubmit={submit}>

                    {/* Textarea Input */}
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                        className={`
                            w-full p-4 text-gray-100 bg-gray-700
                            rounded-lg border border-gray-600
                            focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                            resize-none transition duration-150 placeholder-gray-400
                            ${errors.body && 'border-red-500 ring-red-500'}
                        `}
                        placeholder="Edit your post content here..."
                    ></textarea>

                    {/* Pesan Error */}
                    {errors.body &&
                        <p className="text-red-500 text-sm mt-1 font-medium">
                            {errors.body}
                        </p>
                    }

                    {/* Tombol Submit */}
                    <button
                        className={`
                            w-full py-3 mt-6
                            bg-blue-600 text-white font-semibold
                            rounded-lg shadow-md transition duration-200
                            hover:bg-blue-700
                            ${processing && 'opacity-70 cursor-not-allowed'}
                        `}
                        disabled={processing}
                    >
                        {processing ? 'Updating...' : 'Update Post'}
                    </button>
                </form>
            </div>
        </div>
    )
}
