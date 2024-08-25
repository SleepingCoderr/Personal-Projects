function Aside() {

    return (
        <aside className="bg-gray-700 h-screen w-56 flex flex-col text-white gap-y-14 items-center justify-center font-mono">
            <h2 className="font-mono font-bold text-3xl">Menu</h2>
            <ul className="gap-14">
                <hr className="w-[200px]" />
                <a href="#">
                    <li className="py-5 px-16 hover:bg-gray-800">Option 1</li>
                </a>
                <hr className="w-[200px]" />
                <a href="#">
                    <li className="py-5 px-16 hover:bg-gray-800">Option 2</li>
                </a>
                <hr className="w-[200px]" />
                <a href="#">
                    <li className="py-5 px-16 hover:bg-gray-800">Option 3</li>
                </a>
                <hr className="w-[200px]" />
                <a href="#">
                    <li className="py-5 px-16 hover:bg-gray-800">Option 4</li>
                </a>
                <hr className="w-[200px]" />
                <a href="#">
                    <li className="py-5 px-16 hover:bg-gray-800">Option 5</li>
                </a>
                <hr className="w-[200px]" />
            </ul>
        </aside>
    )

}

export default Aside