const Gender = ({ onNext }) => {
  const [gender, setGender] = useState("");

  const handleSelect = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <h2>What's your gender?</h2>
      <button value="woman" onClick={handleSelect}>
        Woman
      </button>
      <button value="man" onClick={handleSelect}>
        Man
      </button>
      {gender && <button onClick={() => onNext(gender)}>Next</button>}
    </div>
  );
};

export default Gender;
