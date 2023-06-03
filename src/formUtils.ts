import { ChangeEvent, KeyboardEvent, Dispatch } from "react";

interface CardDetails {
    cardNumber: string;
    cvvNumber: string;
    expiryMonth: string;
    expiryYear: string;
    password: string;
}

export const cardNumberHandler = (
    event: ChangeEvent<HTMLInputElement>,
    setFormData: Dispatch<React.SetStateAction<CardDetails>>
) => {
    let cardNumber = event.target.value;
    // regex for testing strings that contain numbers and letters only
    const regex = /^[a-zA-Z0-9]+$/;

    /* if number length is greater than 4 and less than 37(i.e. the total number 
        of characters including numbers and "   -   " separator), append
        separator after every valid 4 characters 
    */
    if (cardNumber.length >= 4 && cardNumber.length < 37) {
        const last4Chars = cardNumber.substring(cardNumber.length - 4);

        if (regex.test(last4Chars)) {
            cardNumber = cardNumber + "   -   ";
            setFormData(prevState => ({
                ...prevState,
                [event.target.name]: cardNumber,
            }));
            return;
        }
    }

    setFormData(prevState => ({
        ...prevState,
        [event.target.name]: cardNumber,
    }));
};

// this handler handles the backspace key on the cardNumber input element
export const keyHandler = (
    event: KeyboardEvent<HTMLInputElement>,
    formData: CardDetails,
    setFormData: Dispatch<React.SetStateAction<CardDetails>>
) => {
    const lastChar = formData.cardNumber[formData.cardNumber.length - 1];

    if (event.key === "Backspace") {
        if (lastChar === " ") {
            const slicedValue = formData.cardNumber.slice(0, -7);
            setFormData(prevState => ({
                ...prevState,
                cardNumber: slicedValue,
            }));
        } else {
            const slicedValue = formData.cardNumber.slice(0, -1);
            setFormData(prevState => ({
                ...prevState,
                cardNumber: slicedValue,
            }));
        }
        event.preventDefault();
    }
};

export const cvvHandler = (
    event: ChangeEvent<HTMLInputElement>,
    setFormData: Dispatch<React.SetStateAction<CardDetails>>
) => {
    const cvvNumber = event.target.value;
    const lastChar = cvvNumber[cvvNumber.length - 1];

    if (lastChar === undefined) {
        setFormData(prevState => ({
            ...prevState,
            cvvNumber: "",
        }));
    }

    if (parseInt(lastChar) === 0 || parseInt(lastChar)) {
        setFormData(prevState => ({
            ...prevState,
            cvvNumber: cvvNumber,
        }));
    }
};

export const expiryHandler = (
    event: ChangeEvent<HTMLInputElement>,
    setFormData: Dispatch<React.SetStateAction<CardDetails>>
) => {
    const expiryNumber = event.target.value;
    const lastChar = expiryNumber[expiryNumber.length - 1];

    if (lastChar === undefined) {
        setFormData(prevState => ({
            ...prevState,
            [event.target.name]: "",
        }));
    }

    if (parseInt(lastChar) === 0 || parseInt(lastChar)) {
        setFormData(prevState => ({
            ...prevState,
            [event.target.name]: expiryNumber,
        }));
    }
};

export const passwordHandler = (
    event: ChangeEvent<HTMLInputElement>,
    setFormData: Dispatch<React.SetStateAction<CardDetails>>
) => {
    setFormData(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value,
    }));
};
