
import Footer from '../component/footer';
import { Header } from '../component/header';
import image1 from '../assets/belle-centrale-d-energie-alternative-avec-panneaux-solaires.jpg'

export const Home = () => {
    return (<>
        <div className=''>
            <Header/>          

            <section>
        <div className="relative h-[80vh] w-full">
          <img src={image1} alt="" className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="md:text-6xl text-3xl font-bold mb-4">
              Votre partenaire solaire de confiance.
            </h1>
            <p className="md:text-2xl text-sm pb-10">
              Spécialiste en énergie solaire & éolienne au Bénin – Pour un avenir durable et autonome.
            </p>
            <button className='p-3 text-white  font-semibold bg-green-500 rounded-sm hover:bg-green-800 transition-all'>
              Demander un devis
            </button>
          </div>
        </div>
      </section>

            

            
        
        </div>
        <Footer/>
    </>
    );
}