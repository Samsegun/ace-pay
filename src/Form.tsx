import { useState, ChangeEvent } from "react";
import pencil from "./assets/edit-pencil.svg";
// import mcSymbol from "./assets/mc_symbol.svg";
import verified from "./assets/verified-badge.svg";
import dots from "./assets/dots.svg";

const Form = () => {
    const [formData, setFormData] = useState({
        cardNumber: "",
        cvvNumber: "",
        expiry: "",
        password: "",
    });

    // const formHandler = (event: ChangeEvent<HTMLFormElement>) => {
    //     // Remove non-numeric characters from the input value
    //     // let sanitizedValue = value.replace(/\D/g, "");

    //     setFormData(prevState => ({
    //         ...prevState,
    //         [event.target.name]: event.target.value,
    //     }));
    // };

    const cardNumberHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("triger");

        let cardNumber = event.target.value;
        // validate entered character
        const lastChar = cardNumber[cardNumber.length - 1];
        if (lastChar !== "0" && !parseInt(lastChar)) {
            return;
        }

        // regex for matching numbers
        const numbers = cardNumber.match(/\d+/g);

        // if (numbers) {
        //     cardNumber = numbers.join("");
        // }

        if (
            numbers?.join("").length === 4 ||
            numbers?.join("").length === 8 ||
            numbers?.join("").length === 12
        ) {
            cardNumber = cardNumber + "   -   ";
        }

        setFormData(prevState => ({
            ...prevState,
            [event.target.name]: cardNumber,
        }));
    };
    console.log(formData);

    return (
        <form className='form-flex'>
            <div className='mb-8'>
                <label
                    htmlFor='card-number'
                    className='relative block mb-4 font-bold text-space-cadet lg:leading-8 lg:tracking-wide'>
                    Card Number
                    <span className='block text-xs opacity-40'>
                        Enter the 16-digit-card number on the card
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
                <span className='relative block'>
                    {/* raw svg element is used here due to rendering issues on firefox */}
                    <span className='absolute top-0 left-0 lg:left-[2%] z-10 w-8 h-full flex items-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='2.11676in'
                            height='1.5in'
                            viewBox='0 0 152.407 108'
                            className='w-full '>
                            <g>
                                <rect
                                    width='152.407'
                                    height='108'
                                    style={{
                                        fill: "none",
                                    }}
                                />
                                <g>
                                    <rect
                                        x='60.4117'
                                        y='25.6968'
                                        width='31.5'
                                        height='56.6064'
                                        style={{
                                            fill: "#ff5f00",
                                        }}
                                    />
                                    <path
                                        d='M382.20839,306a35.9375,35.9375,0,0,1,13.7499-28.3032,36,36,0,1,0,0,56.6064A35.938,35.938,0,0,1,382.20839,306Z'
                                        transform='translate(-319.79649 -252)'
                                        style={{
                                            fill: "#eb001b",
                                        }}
                                    />
                                    <path
                                        d='M454.20349,306a35.99867,35.99867,0,0,1-58.2452,28.3032,36.00518,36.00518,0,0,0,0-56.6064A35.99867,35.99867,0,0,1,454.20349,306Z'
                                        transform='translate(-319.79649 -252)'
                                        style={{
                                            fill: "#f79e1b",
                                        }}
                                    />
                                    <path
                                        d='M450.76889,328.3077v-1.1589h.4673v-.2361h-1.1901v.2361h.4675v1.1589Zm2.3105,0v-1.3973h-.3648l-.41959.9611-.41971-.9611h-.365v1.3973h.2576v-1.054l.3935.9087h.2671l.39351-.911v1.0563Z'
                                        transform='translate(-319.79649 -252)'
                                        style={{
                                            fill: "#f79e1b",
                                        }}
                                    />
                                </g>
                            </g>
                        </svg>
                    </span>
                    {/* <img
                                                src={mcSymbol}
                                                alt='master card'
                                                className='w-8 absolute top-1/3 left-[2%]'
                                            /> */}
                    <input
                        name='cardNumber'
                        id='card-number'
                        type='text'
                        inputMode='numeric'
                        value={formData.cardNumber}
                        // pattern='[0-9\s]{13,19}'
                        onChange={cardNumberHandler}
                        placeholder='2412   -   7512   -   3412   -   3456'
                        className='text-justify input px-9 sm:px-16'
                    />

                    <img
                        src={verified}
                        alt='verified'
                        className='input-badge'
                    />
                </span>
            </div>

            <div className='mb-8 lg:flex lg:justify-between lg:items-center '>
                <label
                    htmlFor='cvv'
                    className='relative block mb-4 font-bold text-space-cadet lg:leading-8 lg:tracking-wide'>
                    CVV Number
                    <span className='block text-xs opacity-40'>
                        Enter the 3 or 4 digit number on the card
                    </span>
                </label>

                <span className='relative lg:basis-1/2'>
                    <input
                        name='cvvNumber'
                        id='cvv'
                        type='tel'
                        className='input'
                    />
                    <img
                        src={dots}
                        alt='dial pad'
                        className='opacity-50 input-badge'
                    />
                </span>
            </div>

            <div className='mb-8 lg:flex lg:justify-between lg:items-center '>
                <label
                    htmlFor='expiry'
                    className='relative block mb-4 font-bold text-space-cadet lg:leading-8 lg:tracking-wide'>
                    Expiry Date
                    <span className='block text-xs opacity-40'>
                        Enter the expiration date of the card
                    </span>
                </label>

                <span className='relative lg:basis-1/2'>
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

            <div className='mb-8 lg:flex lg:justify-between lg:items-center '>
                <label
                    htmlFor='password'
                    className='relative block mb-4 font-bold text-space-cadet lg:leading-8 lg:tracking-wide'>
                    Password
                    <span className='block text-xs opacity-40'>
                        Enter your Dynamic password
                    </span>
                </label>

                <span className='relative lg:basis-1/2'>
                    <input
                        name='password'
                        id='password'
                        type='password'
                        className='input'
                    />
                    <img src={dots} alt='' className='opacity-50 input-badge' />
                </span>
            </div>

            <button type='button' className='pay-btn'>
                Pay Now
            </button>
        </form>
    );
};

export default Form;
