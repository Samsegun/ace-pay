import "./App.css";
import logo from "./assets/acelogo.png";
import closeBtn from "./assets/close.svg";

function App() {
    return (
        <div className='bg-flower bg-center bg-cover bg-no-repeat min-h-screen flex-items-center'>
            <main className='main-wrapper'>
                <button
                    type='button'
                    className='absolute top-[2%] right-[2%] w-4'>
                    <img src={closeBtn} alt='' />
                </button>

                <div className='w-11/12 mx-auto h-full flex-justify-start flex-wrap gap-[5%]'>
                    <section className='w-full lg:basis-[65%]'>
                        {/* header */}
                        <div className='flex items-center justify-between flex-wrap gap-4'>
                            <div className='flex-items-center gap-3'>
                                <img src={logo} alt='ace coin banner' />
                                <h1 className='text-xl'>
                                    <span className='font-bold text-dark'>
                                        AceCoin
                                    </span>
                                    <span className='opacity-70'>Pay</span>
                                </h1>
                            </div>

                            <div>
                                {/* increase padding from 640px */}
                                <span className='timer'>0</span>
                                <span className='timer'>1</span>
                                <span className='mx-1 font-bold text-xl'>
                                    :
                                </span>
                                <span className='timer'>1</span>
                                <span className='timer'>9</span>
                            </div>
                        </div>

                        {/* form */}
                        <div className='my-8'>
                            <form>
                                <label htmlFor='card-number' className='block'>
                                    Card Number
                                </label>
                                <input
                                    type='text'
                                    id='card-number'
                                    className='block'
                                />
                            </form>
                        </div>
                    </section>

                    <section className='bg-blue lg:basis-[30%]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos adipisci iste cupiditate maiores enim ut quasi
                        molestiae pariatur excepturi accusamus, quo
                        reprehenderit suscipit vitae blanditiis possimus
                        consequuntur inventore ad architecto molestias sapiente
                        commodi ex. Iusto fugit numquam voluptatum reiciendis
                        alias!
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
