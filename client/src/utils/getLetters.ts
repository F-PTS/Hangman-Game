import Letter from "../types/Letter";

const getLetters = (arrayOfLetters: string[]) =>
    arrayOfLetters.map(
        (letter) => ({ value: letter, isClicked: false } as Letter)
    );

export default getLetters;
