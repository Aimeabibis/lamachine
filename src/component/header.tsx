import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <>
        <header className="w-full min-h-15 flex justify-between items-center text-[#1a1a1a] bg-[#ffff] px-20 border-b-1 border-gray-300 ">
            <h2 className="font-bold">LaMachine</h2>
            <div>
                <ul className="flex space-x-4 gap-8 font-semibold">
                    <li>
                        <NavLink
                    className={({ isActive  })=> isActive ? "bg-green-700 px-4 py-2" : ""}
                    to="/home">  
                    <a>Accueil</a>
                    </NavLink>

                    </li>
                    
                    <li>
                        <NavLink
                    className={({ isActive  })=> isActive ? "bg-green-700 px-4 py-2" : ""}
                    to="/services">  
                    <a>Services</a>
                    </NavLink>

                    </li>

                    <li>
                        <NavLink
                    className={({ isActive  })=> isActive ? "bg-green-700 px-4 py-2" : ""}
                    to="/produit">  
                    <a>Produits</a>
                    </NavLink>

                    </li>

                    <li>
                        <NavLink
                    className={({ isActive  })=> isActive ? "bg-green-700 px-4 py-2" : ""}
                    to="/about">  
                    <a>A propos</a>
                    </NavLink>

                    </li>

                    <li>
                        <NavLink
                    className={({ isActive  })=> isActive ? "bg-green-700 px-4 py-2" : ""}
                    to="/contact">  
                    <a>Contact</a>
                    </NavLink>

                    </li>

                    
                </ul>
            </div>

            
            <button>
                <img src="../assets/images/icon-cart.svg" alt="" />
            </button>
        </header>
        </>
    );
}