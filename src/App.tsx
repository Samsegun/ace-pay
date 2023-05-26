import "./App.css";
import logo from "./assets/acelogo.png";
import closeBtn from "./assets/close.svg";
import mcSymbol from "./assets/mc_symbol.svg";
import verified from "./assets/verified-badge.svg";
import dots from "./assets/dots.svg";

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
                                <div className='mb-8'>
                                    <label
                                        htmlFor='card-number'
                                        className='block relative font-bold text-xl leading-10 mb-4'>
                                        Card Number
                                        <span className='block text-xs opacity-60'>
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
                                    {/* input will be nested inside of a span tag to enable 
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

                                <div className='mb-8'>
                                    <label
                                        htmlFor='cvv'
                                        className='block relative font-bold text-xl leading-10 mb-4'>
                                        CVV Number
                                        <span className='block text-xs opacity-60'>
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
                                            className='input-badge opacity-50'
                                        />
                                    </span>
                                </div>

                                <div className='mb-8'>
                                    <label
                                        htmlFor='expiry'
                                        className='block relative font-bold text-xl leading-10 mb-4'>
                                        Expiry Date
                                        <span className='block text-xs opacity-60'>
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
                                            className='input-badge opacity-50'
                                        /> */}
                                    </span>
                                </div>

                                <div className='mb-8'>
                                    <label
                                        htmlFor='password'
                                        className='block relative font-bold text-xl leading-10 mb-4'>
                                        Password
                                        <span className='block text-xs opacity-60'>
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
                                            className='input-badge opacity-50'
                                        />
                                    </span>
                                </div>
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
