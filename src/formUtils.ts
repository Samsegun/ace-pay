import { ChangeEvent, KeyboardEvent, Dispatch } from "react";

interface CardDetails {
    cardNumber: string;
    cvvNumber: string;
    expiry: string;
    password: string;
}

export const cardNumberHandler = (
    event: ChangeEvent<HTMLInputElement>,
    setFormData: Dispatch<React.SetStateAction<CardDetails>>
) => {
    let cardNumber = event.target.value;
    // regex for testing strings that contain numbers and letters only
    const regex = /^[a-zA-Z0-9]+$/;

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
