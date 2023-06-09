type SquareProps = {
  value: string
}

export default function Square(props: SquareProps) {
  return (
    <button className="square">{props.value}</button>
  )
}