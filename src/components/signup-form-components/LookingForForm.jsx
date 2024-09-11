const LookingFor = ({ onNext }) => {
  const [options, setOptions] = useState([]);

  const handleSelect = (value) => {
    setOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div>
      <h2>What are you looking for?</h2>
      <button onClick={() => handleSelect("Long Term")}>
        Long Term / Marriage
      </button>
      <button onClick={() => handleSelect("Casual")}>Casual</button>
      {options.length > 0 && (
        <button onClick={() => onNext(options)}>Next</button>
      )}
    </div>
  );
};

export default LookingFor;
