import { Header } from "../component/header";
import image5 from "../assets/projet-d-environnement-en-gros-plan.jpg";
import Footer from "../component/footer";

export const Contact = () => {
  return (
    <>
      <div>
        <Header />
        <section className="relative h-[70vh] w-full">
          <img src={image5} alt="" className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="md:text-6xl text-3xl font-bold mb-4">
              Votre partenaire solaire de confiance.
            </h1>
            <p className="md:text-2xl text-sm pb-10">
              Spécialiste en énergie solaire & éolienne au Bénin – Pour un
              avenir durable et autonome.
            </p>
            <button className="p-3 text-white  font-semibold bg-green-500 rounded-sm hover:bg-green-800 transition-all">
              Demander un devis
            </button>
          </div>
        </section>

        {/* Formulaire */}

        <section className="bg-green-50 w-full h-[70vh]">
          <div className="mx-auto flex flex-row">
            <div className="z-1 -mt-[70px] px-70">
              <div>
                <div className=" w-[60vh] px-10 py-10 bg-white rounded-lg border border-solid border-green-200">
                  <h2 className="font-bold text-2xl ">Formulaire de devis</h2>
                  <div className="w-full">
                    <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                id="name"
                placeholder="Votre nom"
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 text-gray-800 focus:outline-none focus:ring focus:border-green-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Votre email"
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 text-gray-800 focus:outline-none focus:ring focus:border-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Entrez les détails du produit et d'autres exigences spécifiques pour recevoir un devis précis"
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 text-gray-800 focus:outline-none focus:ring focus:border-green-500"
              ></textarea>
            </div>

            <div className="flex items-center justify-between mt-4">
              <button type="submit" className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow">
                Soumettre
              </button>              
            </div>                    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       
      </div>
      <Footer />
    </>
  );
};
