import "./App.css";
import logo from "./assets/acelogo.png";
import closeBtn from "./assets/close.svg";
import chip from "./assets/chip.png";
import wifi from "./assets/wifi.png";
import masterCard from "./assets/mastercard-2.svg";
import fourDots from "./assets/four-dots.png";
import apple from "./assets/apple-13.svg";
import docket from "./assets/docket.png";
import Form from "./Form";

function App() {
    return (
        <div className='min-h-screen bg-center bg-no-repeat bg-cover bg-flower flex-items-center'>
            <div className='main-wrapper'>
                <button
                    type='button'
                    className='absolute top-[1%] right-[4%] lg:top-[2%] lg:right-[2%] w-4'>
                    <img src={closeBtn} alt='' />
                </button>

                {/* header */}
                <header className='flex flex-wrap items-center justify-between w-11/12 mx-auto gap-[5%]'>
                    <div className='flex justify-between items-center basis-full gap-4 flex-wrap sm:gap-0 lg:basis-[65%]'>
                        <div className='gap-3 flex-items-center'>
                            <img src={logo} alt='ace coin banner' />
                            <h1>
                                <span className='font-bold text-space-cadet'>
                                    AceCoin
                                </span>
                                <span className='font-medium text-french-gray'>
                                    Pay
                                </span>
                            </h1>
                        </div>

                        <div>
                            {/* increase padding from 640px */}
                            <span className='timer'>0</span>
                            <span className='timer'>1</span>
                            <span className='mx-1 text-xl font-bold'>:</span>
                            <span className='timer'>1</span>
                            <span className='timer'>9</span>
                        </div>
                    </div>

                    <div className='justify-center hidden lg:flex lg:basis-[30%]'>
                        <span className='block h-10 rounded-b-full w-14 bg-blue'></span>
                    </div>
                </header>

                {/* main body */}
                <main className='flex items-center w-11/12 h-full mx-auto mt-4 mb-12 xl:my-0'>
                    <div className='flex justify-between flex-wrap h-[90%] w-full gap-[5%] 2xl:my-8'>
                        <section className='w-full lg:w-auto lg:basis-[65%]'>
                            {/* form */}
                            <div className='h-full my-8 lg:my-0'>
                                <Form />
                            </div>
                        </section>

                        <section className='relative w-full h-full lg:h-auto lg:w-auto lg:basis-[30%]'>
                            <div className='card-details'>
                                <div className='flex flex-col justify-between h-full'>
                                    <div className='flex items-center justify-between'>
                                        <img
                                            src={chip}
                                            alt='micro chip'
                                            className='w-8'
                                        />
                                        <img
                                            src={wifi}
                                            alt='wifi'
                                            className='w-6'
                                        />
                                    </div>

                                    <div className='font-semibold'>
                                        <div>
                                            <span className='text-xs tracking-wide'>
                                                Jonathan Michael
                                            </span>
                                            <span className='flex items-center gap-4 tracking-wide'>
                                                <span className=''>
                                                    <img
                                                        src={fourDots}
                                                        alt='coded'
                                                        className='w-8'
                                                    />
                                                </span>
                                                <span>3456</span>
                                            </span>
                                        </div>

                                        <div className='flex items-center justify-between text-xs'>
                                            <span>09/22</span>
                                            <span>
                                                <img
                                                    src={masterCard}
                                                    alt='master card'
                                                    className='w-9'
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='payment-details'>
                                <div className='w-full'>
                                    <div className='p-2 border-b-2 border-dashed border-opacity-10 text-space-cadet'>
                                        <ul className='[&>li]:flex [&>li]:justify-between'>
                                            <li className='mb-4'>
                                                <span className='text-xs opacity-50'>
                                                    Company
                                                </span>
                                                <span className='text-xs font-semibold'>
                                                    <img
                                                        src={apple}
                                                        alt='apple'
                                                        className='inline w-4 mr-2'
                                                    />
                                                    Apple
                                                </span>
                                            </li>
                                            <li className='mb-4'>
                                                <span className='text-xs opacity-50'>
                                                    Order Number
                                                </span>
                                                <span className='text-xs font-bold'>
                                                    1266201
                                                </span>
                                            </li>
                                            <li className='mb-4'>
                                                <span className='text-xs opacity-50'>
                                                    Product
                                                </span>
                                                <span className='text-xs font-bold'>
                                                    MacBook Air
                                                </span>
                                            </li>
                                            <li className='mb-4'>
                                                <span className='text-xs opacity-50'>
                                                    VAT (20%)
                                                </span>
                                                <span className='text-xs font-bold'>
                                                    $100.00
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='flex items-center justify-between pt-8'>
                                        <p className='flex flex-col'>
                                            <span className='text-xs opacity-50'>
                                                You have to Pay
                                            </span>

                                            <span className='text-2xl font-black'>
                                                549
                                                <span className='text-base font-semibold'>
                                                    .99
                                                </span>{" "}
                                                <span className='text-base font-semibold uppercase opacity-50'>
                                                    usd
                                                </span>
                                            </span>
                                        </p>

                                        <span className='w-5'>
                                            <img src={docket} alt='totals' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
