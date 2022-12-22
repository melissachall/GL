  import './Home.css';
  import {Navbar, Footer} from '../../components/index'
  import images from '../../assets/Images/index'
  
  function Home() {
    return (
      <>
        <Navbar />
        <div class="flex-col items-center m-[20px]">
{/* <!-- ===================================================Introduction=================================================== --> */}
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_600px] main-color rounded-[40px] relative">
            <img class="absolute w-[150px] hidden lg:block lg:bottom-[20px] lg:inset-x-1/2" src={images[4]} />
            <img class="absolute w-[100px] hidden lg:block lg:top-[20px] lg:inset-x-1/2" src={images[6]} />
            <img class="absolute w-[100px] hidden lg:block lg:bottom-[20px] lg:inset-x-1/4" src={images[2]} />
            <div class="m-[50px]">
                <h1 class="text-6xl font-black">
                    the best way to learn!
                </h1>
                <h3 class="text-xl leading-8 my-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quae enim, iusto a laboriosam vitae et rerum cupiditate. Soluta aliquam consequuntur placeat mollitia recusandae quis esse dolores, impedit veritatis porro!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quae enim, iusto a laboriosam vitae et rerum cupiditate. Soluta aliquam consequuntur placeat mollitia recusandae quis esse dolores, impedit veritatis porro!
                </h3>
                <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">more information</button>
            </div>
            <div class="flex items-center">
                <img class="w-[600px]" src={images[20]} alt="" />
            </div>
        </div>
{/* <!-- ===================================================End Introduction=================================================== --> */}
{/* <!-- ===================================================About=================================================== --> */}
        <div class="grid grid-cols-1 lg:grid-cols-[600px_1fr] relative">
            <img class="absolute w-[150px] hidden lg:block lg:bottom-[20px] lg:inset-x-3/4" src={images[4]}/>
            <img class="absolute w-[100px] hidden lg:block lg:top-[20px] lg:inset-x-3/4" src={images[5]} />
            <img class="absolute w-[100px] hidden lg:block lg:bottom-[20px] lg:inset-x-1/4" src={images[11]} />
            <div>
                <img class="w-[600px]" src={images[20]} />
            </div>
            <div class="my-[50px] mx-[50px]">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        About
                    </span>
                  </button>
                <h3 class="text-xl leading-8 my-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quae enim, iusto a laboriosam vitae et rerum cupiditate. Soluta aliquam consequuntur placeat mollitia recusandae quis esse dolores, impedit veritatis porro!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quae enim, iusto a laboriosam vitae et rerum cupiditate. Soluta aliquam consequuntur placeat mollitia recusandae quis esse dolores, impedit veritatis porro!
                </h3>
            </div>
        </div>
{/* <!-- ===================================================End about=================================================== --> */}
{/* <!-- ===================================================Last Announces=================================================== --> */}
        <div class="relative main-color p-[50px] rounded-[40px]">
        <img class="absolute w-[150px] hidden lg:block lg:bottom-[20px] lg:inset-x-3/4" src={images[4]}/>
            <img class="absolute w-[100px] hidden lg:block lg:top-[20px] lg:inset-x-3/4" src={images[5]} />
            <img class="absolute w-[100px] hidden lg:block lg:bottom-[20px] lg:inset-x-1/4" src={images[11]} />
            <div class="my-[50px] mx-[50px]">
                <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Last announces</button>
                    <div class="grid grid-cols-1 lg:grid-cols-4 gap-[10px]">
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={images[21]} />
                                <div class="p-5">
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aissaoui Noureddine</p>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mathematic Cours</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, expedita ipsa iusto eos dolores labore nemo, laboriosam</p>
                                    <div class="grid grid-cols-3">
                                        <h5 class="col-span-2 font-bold">Mathematic</h5>
                                        <h5 class="right-0 font-bold">Lycee</h5>
                                    </div>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1500DA</h5>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </a>
                        </div>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={images[21]} />
                                <div class="p-5">
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aissaoui Noureddine</p>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mathematic Cours</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, expedita ipsa iusto eos dolores labore nemo, laboriosam</p>
                                    <div class="grid grid-cols-3">
                                        <h5 class="col-span-2 font-bold">Mathematic</h5>
                                        <h5 class="right-0 font-bold">Lycee</h5>
                                    </div>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1500DA</h5>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </a>
                        </div>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={images[21]} />
                                <div class="p-5">
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aissaoui Noureddine</p>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mathematic Cours</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, expedita ipsa iusto eos dolores labore nemo, laboriosam</p>
                                    <div class="grid grid-cols-3">
                                        <h5 class="col-span-2 font-bold">Mathematic</h5>
                                        <h5 class="right-0 font-bold">Lycee</h5>
                                    </div>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1500DA</h5>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </a>
                        </div>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={images[21]} />
                                <div class="p-5">
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aissaoui Noureddine</p>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mathematic Cours</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, expedita ipsa iusto eos dolores labore nemo, laboriosam</p>
                                    <div class="grid grid-cols-3">
                                        <h5 class="col-span-2 font-bold">Mathematic</h5>
                                        <h5 class="right-0 font-bold">Lycee</h5>
                                    </div>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1500DA</h5>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
{/* ===================================================End Last Announces===================================================  */}
        </div>
        <Footer />
      </>
    );
  }
  
export default Home;