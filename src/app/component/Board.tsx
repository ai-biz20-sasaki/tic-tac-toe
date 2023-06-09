import SquareUseState from './SquareUseState'

export default function Board() {
  return (
    <>
      <div className="board-row">
        <SquareUseState />
        <SquareUseState />
        <SquareUseState />
      </div>
      <div className="board-row">
        <SquareUseState />
        <SquareUseState />
        <SquareUseState />
      </div>
      <div className="board-row">
        <SquareUseState />
        <SquareUseState />
        <SquareUseState />
      </div>
    </>
  )
}