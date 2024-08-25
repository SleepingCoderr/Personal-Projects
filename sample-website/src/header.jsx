function Header() {
    return (
   <header className=" h-24 bg-gray-500 text-white flex flex-row justify-center items-center gap-20">
        <h1 className="text-2xl px-10 py-5 font-bold tracking-wide">Sample Website</h1>
        <div>
            <input type="search" className="text-black w-[250px] px-3 py-1 rounded-md" placeholder="Search..."/>
        </div>
        <nav className="">
            <ul className="flex flex-row gap-5 text-xl font-bold">
                <a href=""><li className="">Home</li></a>
                <a href=""><li className="">Contact</li></a>
                <a href=""><li className="">About</li></a>
            </ul>
        </nav>
   </header>
    )

}

export default Header