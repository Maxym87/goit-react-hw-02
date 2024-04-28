
import Counter from "../Counters/Counters.jsx"
import css from './Options.module.css'

export default function Options({ feedback, totalFeedback, reset }) {
  return (
    <div>
      <ul className={css.list}>
        <li onClick={() => {feedback('good')} }><Counter>Good</Counter></li>
        <li onClick={() => {feedback('neutral')} }><Counter>Neutral</Counter></li>
        <li onClick={() => { feedback('bad') }}><Counter>Bad</Counter></li>
        {totalFeedback===0 ? '' : <li><button onClick={reset}>Reset</button></li>}
</ul>
    </div>
  )
}