import { useState } from 'react'


export default function Counter({ children }) {
  const [click, setClicks] = useState(0);

  const handleClicks = () => {
    setClicks(click + 1)
  }

  return <button onClick={handleClicks} type='button'>{children}</button>
}