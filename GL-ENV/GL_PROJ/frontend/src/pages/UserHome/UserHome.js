  import './UserHome.css';
  import {UserNavbar, Card, Footer} from '../../components/index'
  import images from '../../assets/Images/index'
  
  function UserHome() {
    return (
      <>
        <UserNavbar />
        <div class="flex-col items-center m-[20px]">
{/* <!-- ===================================================Introduction=================================================== --> */}
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_600px] main-color rounded-[40px] relative">
            {/* <img class="absolute w-[150px] hidden lg:block lg:bottom-[20px] lg:inset-x-1/2" src={images[4]} /> */}
            <img class="absolute w-[100px] hidden lg:block lg:top-[20px] lg:inset-x-1/2" src={images[6]} />
            <img class="absolute w-[100px] hidden lg:block lg:bottom-[20px] lg:inset-x-1/4" src={images[2]} />
            <div class="m-[20px] md:m-[50px]">
                <h1 class="text-6xl font-black">
                    Getting Best
                </h1>
                <h1 class="text-6xl font-black">
                    Quality Education
                </h1>
                <h1 class="text-6xl font-black">
                    Is Now More Easier
                </h1>
                <h3 class="text-xl leading-8 my-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quae enim, iusto a laboriosam vitae et rerum cupiditate. Soluta aliquam consequuntur placeat mollitia recusandae quis esse dolores, impedit veritatis porro!
                </h3>
                <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">more information</button>
            </div>
            <div class="flex items-center">
                <img class="w-[600px]" src={images[21]} alt="" />
            </div>
        </div>
{/* <!-- ===================================================End Introduction=================================================== --> */}
{/* <!-- ===================================================About=================================================== --> */}
        <div class="grid grid-cols-1 lg:grid-cols-[600px_1fr] relative my-[50px]">
            {/* <img class="absolute w-[150px] hidden lg:block lg:bottom-[20px] lg:inset-x-3/4" src={images[4]}/> */}
            <img class="absolute w-[100px] hidden lg:block lg:top-[20px] lg:inset-x-3/4" src={images[5]} />
            <img class="absolute w-[150px] hidden lg:block lg:bottom-[-50px] lg:inset-x-1/2" src={images[11]} />
            <div>
                <img class="hidden md:w-[600px] md:block" src={images[20]} />
            </div>
            <div class="m-[10px] md:m-[50px]">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        About
                    </span>
                  </button>
                <h3 class="text-xl leading-8 my-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quae enim, iusto a laboriosam vitae et rerum cupiditate. Soluta aliquam consequuntur placeat mollitia recusandae quis esse dolores, impedit veritatis porro!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quae enim, iusto a laboriosam vitae et rerum cupiditate. Soluta aliquam consequuntur placeat mollitia recusandae quis esse dolores, impedit veritatis porro!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quae enim, iusto a laboriosam vitae et rerum cupiditate. Soluta aliquam consequuntur placeat mollitia recusandae quis esse dolores, impedit veritatis porro!
                </h3>
            </div>
        </div>
{/* <!-- ===================================================End about=================================================== --> */}
{/* <!-- ===================================================Last Announces=================================================== --> */}
        <div class="relative lg:p-[50px] rounded-[40px]">
        {/* <img class="absolute w-[150px] hidden lg:block lg:bottom-[20px] lg:inset-x-3/4" src={images[4]}/> */}
            <img class="absolute w-[100px] hidden lg:block lg:top-[20px] right-0" src={images[9]} />
            <img class="absolute w-[100px] hidden lg:block lg:bottom-0 lg:inset-x-1/4" src={images[12]} />
            <img class="absolute w-[100px] hidden lg:block lg:bottom-0 lg:inset-x-3/4" src={images[14]} />
            <div class="my-[50px] lg:mx-[50px] mx-[10px]">
                <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Last announces</button>
                    <div class="grid grid-cols-1 lg:grid-cols-4 gap-[10px]">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
        </div>
{/* ===================================================End Last Announces===================================================  */}
        </div>
        <Footer />
      </>
    );
  }
  
export default UserHome;