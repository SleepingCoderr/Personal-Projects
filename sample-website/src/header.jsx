function Header() {
    return (
        <header className="h-24 mx-auto w-auto bg-gray-500 text-white flex flex-row justify-center items-center overflow-hidden gap-20">
            <div className="flex justify-center items-center flex-col sm:flex-row sm:gap-5">
                <div className="sm:text-sm">
                    <h1 className="text-2xl px-10 py-5 font-bold tracking-widest font-mono sm:text-xl md:text-lg lg:text-2xl">Sample Website</h1>
                </div>
                <div className="mt-4 sm:mt-0">
                    <input type="search" className="text-black w-[250px] px-3 py-1 rounded-md" placeholder="Search..." />
                </div>
                <nav className="mt-4 sm:mt-0 sm:ml-5">
                    <ul className="flex flex-col sm:flex-row gap-2 sm:gap-10 text-xl font-bold tracking-widest font-mono sm:text-lg md:text-base lg:text-xl">
                        <a href="#"><li className="hover:underline">Home</li></a>
                        <a href="#"><li className="hover:underline">Contact</li></a>
                        <a href="#"><li className="hover:underline">About</li></a>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;