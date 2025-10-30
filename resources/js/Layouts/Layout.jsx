import { Link } from "@inertiajs/react";

export default function Layout({children}) {

    // Tentukan kelas untuk tautan navigasi
    const navLinkClasses = "px-4 py-2 rounded-lg text-sm font-medium transition duration-150";

    return (
    <>
        {/* Header/Navbar: Latar Belakang Gelap dan Bayangan Halus */}
        <header className="bg-gray-800 shadow-xl sticky top-0 z-10 border-b border-blue-600/30">
            <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

                {/* Logo/Judul Aplikasi */}
                <Link href="/" className="text-2xl font-extrabold text-blue-500 hover:text-blue-400 transition duration-150">
                    BahamudPost
                </Link>

                {/* Tautan Navigasi */}
                <div className="flex items-center space-x-4">

                    {/* Link Home */}
                    <Link
                        href="/"
                        className={`text-gray-300 hover:bg-gray-700 hover:text-blue-400 ${navLinkClasses}`}
                    >
                        Home
                    </Link>

                    {/* Link Create (Aksen Biru Kuat) */}
                    <Link
                        href="/posts/create"
                        className={`bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg ${navLinkClasses}`}
                    >
                        Create Post
                    </Link>
                </div>
            </nav>
        </header>

        {/* Konten Utama */}
        {/* Catatan: Karena Anda sudah mengatur bg-gray-900 di komponen Home,
           Edit, dan Show, kita tidak perlu mengaturnya lagi di <main> */}
        <main>{children}</main>
    </>
    );
}
