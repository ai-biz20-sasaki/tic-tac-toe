'use client';
//親：Board->子：Square
type SquareProps = {
  value: string
}

export default function Square(props: SquareProps) {

  const handleclick = () => {
    console.log('clicked!');
  }

  return (
    <button
      className="square"
      onClick={handleclick}
    >
      {props.value}
    </button>
  )
}