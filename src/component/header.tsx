export const Header = () => {
    return (
        <>
        <header className="w-full h-20 flex justify-between items-center text-[#1a1a1a] bg-[#f1f1f1] shadow-md ">
            <img src="" alt="" />
            <div>
                <li className="flex space-x-4 text-lg font-semibold">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/projects">Projects</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/services">Services</a>
                </li>
            </div>
        </header>
        </>
    );
}