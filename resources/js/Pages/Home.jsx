import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy"
import { useState } from "react";

// Terapkan latar belakang hitam dan warna teks terang di elemen luar
export default function Home({posts}) {
    const route = useRoute();
    const { flash } = usePage().props;
    const { component } = usePage()

    const [flashMsg, setFlashMsg] = useState(flash.message);

    setTimeout(() => {
        setFlashMsg(null)
    }, 2000);

    return (
    // Container utama: Latar Belakang Hitam Gelap dan Teks Putih/Terang
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-8">
        <Head title={component} />

        {/* Judul Utama */}
        <h1 className="text-4xl font-extrabold text-blue-500 mb-8 mt-4 border-b-2 border-blue-600 pb-2 inline-block">
            Bahamud Post
        </h1>

        {/* Pesan Flash */}
        { flashMsg && (
            // Ubah warna flash (misalnya dari rose ke biru-hijau/teal untuk pesan sukses, atau tetap merah untuk error)
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-teal-600 p-3 rounded-lg shadow-xl text-sm text-white font-medium z-50 transition-opacity duration-500">
                {flashMsg}
            </div>)}

        {/* Daftar Postingan */}
        <div className="max-w-4xl mx-auto">
            {posts.data.map(post => (
                // Setiap kartu postingan: Latar Belakang abu-abu gelap dan border tipis
                <div
                    key={post.id}
                    className="p-6 mb-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700
                                transition duration-300 hover:border-blue-500 hover:shadow-blue-500/30"
                >
                    <div className="text-xs text-gray-400 mb-2">
                        <span>Posted on: </span>
                        {/* Biru Aksen untuk tanggal */}
                        <span className="text-blue-400">{ new Date(post.created_at).toLocaleDateString() }</span>
                    </div>

                    {/* Isi Postingan */}
                    <p className="font-light text-lg mb-3 leading-relaxed">{post.body}</p>

                    {/* Link "Read more" */}
                    <Link
                        href={route('posts.show', post)}
                        className="text-blue-500 font-semibold hover:text-blue-400 transition duration-150"
                    >
                        Read more...
                    </Link>
                </div>
            ))}
        </div>

        {/* Paginasi */}
        <div className="py-10 px-4 flex justify-center space-x-2">
            {posts.links.map((link) => (
                link.url ?
                <Link
                    key={link.label}
                    href={link.url}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={`
                        p-3 rounded-lg text-sm font-medium transition duration-150
                        ${link.active
                            // Link Aktif: Latar Biru, Teks Putih
                            ? "bg-blue-600 text-white shadow-md"
                            // Link Tidak Aktif: Latar Abu-abu Gelap, Teks Putih/Terang, Hover Biru
                            : "bg-gray-800 text-gray-200 hover:bg-blue-700 hover:text-white"
                        }
                    `}
                />
                :
                // Tombol Paginasi Non-aktif (misal: "...")
                <span
                    key={link.label}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className="p-3 text-sm text-gray-500 cursor-not-allowed"
                ></span>
            ))}
        </div>
    </div>
    );
}
