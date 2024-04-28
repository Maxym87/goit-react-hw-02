


export default function Feedback({values, totalFeedback, positiveFeedback}) {

  const { good, neutral, bad } = values;

  return (
    <div>
      <ul>
        <li>Good: {good ? good : ''}</li>
        <li>Neutral: {neutral ? neutral : ''}</li>
        <li>Bad: {bad ? bad : ''}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
</ul>
    </div>
  )
}