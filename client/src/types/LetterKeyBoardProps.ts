export default interface LetterKeyBoardProps {
    changeAmountOfWrongAnswer: () => void;
    changeHangmanWord: (hangmanWord: string) => void;
    changeSkip: (value: boolean) => void;
    isGameOver: boolean;
    gameToken: string;
    skip: boolean;
}
