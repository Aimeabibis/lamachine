
import Footer from '../component/footer';
import { Header } from '../component/header';

export const Home = () => {
    return (<>
        <div className='h-full'>
            <Header/>
            <section className='w-full h-[50vh] flex justify-between pb-10 pt-20 px-20 gap-10'>
                <div className='w-1/3  '>
                    <h1 className='font-bold text-3xl text-green-600'>Est LaMachine</h1>
                    <p className='text-lg mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam voluptates voluptatibus. Dolor quasi aspernatur suscipit obcaecati ratione sunt voluptas optio quae, porro consectetur mollitia rem officiis facere vitae! Officia.</p>
                    <button className='mt-5 bg-green-600 p-2 rounded-sm text-white font-semibold hover:bg-green-900 transition-all duration-300 hover:scale-105'>Demander un devis</button>
                </div>
                <div className='w-1/2 '>
                    <img src="/" alt="" className='h-[300px] w-[600px]'/>
                </div>
            </section>

            <section>
        <div className="relative h-[80vh] w-full">
          <img
            src="../assets/bruno-miguel-PZOlUZrTH98-unsplash.jpg"
            alt="Bannière"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="md:text-6xl text-3xl font-bold mb-4">
              Sauvons l’éducation ensemble au Bénin
            </h1>
            <p className="md:text-2xl text-sm">
              Localisez, Ajoutez, Soutenez - Chaque école compte
            </p>
          </div>
        </div>
      </section>

            <section className='pt-20'>
                <h1></h1>

            </section>

            
        
        </div>
        <Footer/>
    </>
    );
}