import './styles.css';
import { useState } from 'react';

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [billAmount, setBillAmount] = useState('');
  const [youTip, setYouTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const tip = billAmount * ((youTip + friendTip) / 2 / 100);

  function handleReset() {
    setBillAmount('');
    setYouTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <BillInput bill={billAmount} onSetBill={setBillAmount} />
      <SelectPercentage percentage={youTip} onSelect={setYouTip}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={friendTip} onSelect={setFriendTip}>
        How did your friend like the service?
      </SelectPercentage>

      {billAmount > 0 && (
        <>
          <Output bill={billAmount} tip={tip} />
          <ResetButton onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function ResetButton({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
