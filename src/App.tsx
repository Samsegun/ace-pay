import "./App.css";
import logo from "./assets/acelogo.png";
import closeBtn from "./assets/close.svg";
import mcSymbol from "./assets/mc_symbol.svg";
import verified from "./assets/verified-badge.svg";
import dots from "./assets/dots.svg";

function App() {
    return (
        <div className='min-h-screen bg-center bg-no-repeat bg-cover bg-flower flex-items-center'>
            <main className='main-wrapper'>
                <button
                    type='button'
                    className='absolute top-[2%] right-[2%] w-4'>
                    <img src={closeBtn} alt='' />
                </button>

                <div className='w-11/12 mx-auto h-full flex-justify-start flex-wrap gap-[5%]'>
                    <section className='w-full lg:w-auto lg:basis-[65%]'>
                        {/* header */}
                        <div className='flex flex-wrap items-center justify-between gap-4'>
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
                                <span className='mx-1 text-xl font-bold'>
                                    :
                                </span>
                                <span className='timer'>1</span>
                                <span className='timer'>9</span>
                            </div>
                        </div>

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
                                            <svg
                                                version='1.1'
                                                id='Layer_1'
                                                xmlns='http://www.w3.org/2000/svg'
                                                xmlnsXlink='http://www.w3.org/1999/xlink'
                                                x='0px'
                                                y='0px'
                                                viewBox='0 0 512 512'
                                                xmlSpace='preserve'
                                                fill='#0850df'
                                                className='w-4 mr-2'>
                                                <g>
                                                    <g>
                                                        <path
                                                            d='M311.18,78.008L32.23,356.958L0.613,485.716c-1.771,7.209,0.355,14.818,5.604,20.067
		c5.266,5.266,12.88,7.368,20.067,5.604l128.759-31.617l278.95-278.95L311.18,78.008z M40.877,471.123l10.871-44.271l33.4,33.4
		L40.877,471.123z'
                                                        />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d='M502.598,86.818L425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0l-30.825,30.825l122.812,122.812l30.825-30.825
		C515.134,119.679,515.134,99.354,502.598,86.818z'
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
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
                                            placeholder='2412 - 7512 - 3412 - 3456'
                                            className='input'
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
                            </form>
                        </div>
                    </section>

                    <section className='h-full w-full lg:w-auto lg:basis-[30%] flex flex-col justify-between gap-12'>
                        <div className='flex justify-center'>
                            <span className='block h-10 rounded-b-full w-14 bg-blue'></span>
                        </div>

                        <div className='h-full bg-light-blue'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat corrupti iusto expedita quia! Aperiam
                            facilis laborum quia illo ipsa. Eligendi asperiores
                            hic quos sit sed laudantium et eum, fuga odit animi
                            veritatis ad voluptatem rerum distinctio quisquam
                            recusandae veniam fugit! Hic aspernatur sapiente,
                            facere ullam ex est. Eos, in provident!
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
