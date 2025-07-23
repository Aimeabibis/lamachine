export const Header = () => {
    return (
        <>
        <header className="w-full h-15 flex justify-between items-center text-[#1a1a1a] bg-[#f1f1f1] px-20 shadow-md ">
            <img src="" alt="" />
            <div>
                <li className="flex space-x-4 gap-4 ">
                    <a href="/">Accueil</a>
                    <a href="/about">Services</a>
                    <a href="/contact">Produits</a>
                    {/* <a href="/projects">Réalisation</a> */}
                    <a href="/gallery">A propos</a>
                    <a href="/services">Contact</a>
                </li>
            </div>
            <button>
                Ajouter aux paniers
            </button>
        </header>
        </>
    );
}