import "./App.css";
import logo from "./assets/acelogo.png";
import closeBtn from "./assets/close.svg";
import pencil from "./assets/edit-pencil.svg";
import mcSymbol from "./assets/mc_symbol.svg";
import verified from "./assets/verified-badge.svg";
import dots from "./assets/dots.svg";
import docket from "./assets/docket.png";

function App() {
    return (
        <div className='min-h-screen bg-center bg-no-repeat bg-cover bg-flower flex-items-center'>
            <main className='main-wrapper'>
                <button
                    type='button'
                    className='absolute top-[2%] right-[2%] w-4'>
                    <img src={closeBtn} alt='' />
                </button>

                {/* header */}
                <header className='flex flex-wrap items-center justify-between w-11/12 mx-auto gap-[5%]'>
                    <div className='flex justify-between items-center lg:basis-[65%]'>
                        <div className='gap-3 flex-items-center'>
                            <img src={logo} alt='ace coin banner' />
                            <h1>
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
                            <span className='mx-1 text-xl font-bold'>:</span>
                            <span className='timer'>1</span>
                            <span className='timer'>9</span>
                        </div>
                    </div>

                    <div className='justify-center hidden lg:flex lg:basis-[30%]'>
                        <span className='block h-10 rounded-b-full w-14 bg-blue'></span>
                    </div>
                </header>

                <div className='w-11/12 mx-auto h-full flex-justify-start flex-wrap gap-[5%]'>
                    <section className='w-full lg:w-auto lg:basis-[65%]'>
                        {/* form */}
                        <div className='my-8'>
                            <form>
                                <div className='mb-8'>
                                    <label
                                        htmlFor='card-number'
                                        className='relative block mb-4 font-bold'>
                                        Card Number
                                        <span className='block text-xs opacity-40'>
                                            Enter the 16-digit-card number on
                                            the card
                                        </span>
                                        <span className='absolute top-[20%] right-0 flex-items-center text-blue text-sm'>
                                            <img
                                                src={pencil}
                                                alt='edit card number'
                                                className='w-4 mr-2'
                                            />
                                            <span>Edit</span>
                                        </span>
                                    </label>
                                    {/* input is nested inside of a span tag to enable 
                                positioning of badges */}
                                    <span className='relative'>
                                        <img
                                            src={mcSymbol}
                                            alt='master card'
                                            className='w-8 absolute top-1/3 left-[2%]'
                                        />
                                        <input
                                            name='card-number'
                                            id='card-number'
                                            type='cc-cvc'
                                            inputMode='numeric'
                                            pattern='[0-9\s]{13,19}'
                                            autoComplete='cc-number'
                                            maxLength={19}
                                            placeholder='2412   -   7512   -   3412   -   3456'
                                            className='input sm:px-16'
                                        />

                                        <img
                                            src={verified}
                                            alt='verified'
                                            className='input-badge'
                                        />
                                    </span>
                                </div>

                                <div className='mb-8 lg:flex'>
                                    <label
                                        htmlFor='cvv'
                                        className='relative block mb-4 font-bold'>
                                        CVV Number
                                        <span className='block text-xs opacity-40'>
                                            Enter the 3 or 4 digit number on the
                                            card
                                        </span>
                                    </label>

                                    <span className='relative'>
                                        <input
                                            name='cvv-number'
                                            id='cvv'
                                            type='tel'
                                            className='input'
                                        />
                                        <img
                                            src={dots}
                                            alt=''
                                            className='opacity-50 input-badge'
                                        />
                                    </span>
                                </div>

                                <div className='mb-8 lg:flex'>
                                    <label
                                        htmlFor='expiry'
                                        className='relative block mb-4 font-bold'>
                                        Expiry Date
                                        <span className='block text-xs opacity-40'>
                                            Enter the expiration date of the
                                            card
                                        </span>
                                    </label>

                                    <span className='relative'>
                                        <input
                                            name='expiry'
                                            id='expiry'
                                            type='tel'
                                            className='input'
                                        />
                                        {/* <img
                                            src={dots}
                                            alt=''
                                            className='opacity-50 input-badge'
                                        /> */}
                                    </span>
                                </div>

                                <div className='mb-8 lg:flex'>
                                    <label
                                        htmlFor='password'
                                        className='relative block mb-4 font-bold'>
                                        Password
                                        <span className='block text-xs opacity-40'>
                                            Enter your Dynamic password
                                        </span>
                                    </label>

                                    <span className='relative'>
                                        <input
                                            name='password'
                                            id='password'
                                            type='password'
                                            className='input'
                                        />
                                        <img
                                            src={dots}
                                            alt=''
                                            className='opacity-50 input-badge'
                                        />
                                    </span>
                                </div>

                                <button
                                    type='button'
                                    className='w-full p-4 text-light font-bold rounded-lg bg-[#025EFFff]'>
                                    Pay Now
                                </button>
                            </form>
                        </div>
                    </section>

                    <section className='h-full w-full lg:w-auto lg:basis-[30%] flex flex-col justify-center gap-12'>
                        <div className='flex items-end justify-center h-[90%] px-8 py-4 rounded-lg bg-light-blue'>
                            <div className='w-full'>
                                <div className='p-2 border-b-2 border-opacity-50 border-dashed'>
                                    <ul className='[&>li]:flex [&>li]:justify-between'>
                                        <li className='mb-4'>
                                            <span className='text-xs opacity-50'>
                                                Company
                                            </span>
                                            <span className='text-xs font-semibold'>
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
    );
}

export default App;
