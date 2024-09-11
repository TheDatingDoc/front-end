const WhoToDate = ({ onNext }) => {
  const [interestedIn, setInterestedIn] = useState([]);

  const handleSelect = (value) => {
    setInterestedIn((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div>
      <h2>Who would you like to date?</h2>
      <button onClick={() => handleSelect("woman")}>Woman</button>
      <button onClick={() => handleSelect("man")}>Man</button>
      {interestedIn.length > 0 && (
        <button onClick={() => onNext(interestedIn)}>Next</button>
      )}
    </div>
  );
};

export default WhoToDate;
