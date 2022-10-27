export default interface LetterKeyBoardProps {
    changeAmountOfWrongAnswer: () => void;
    changeHangmanState: (hangmanWord: string) => void;
    gameToken: string;
}
