const Interests = ({ onNext }) => {
  const [interests, setInterests] = useState([]);

  const handleSelect = (interest) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div>
      <h2>What are your interests?</h2>
      <button onClick={() => handleSelect("Music")}>Music</button>
      <button onClick={() => handleSelect("Art")}>Art</button>
      <button onClick={() => handleSelect("Travel")}>Travel</button>
      <button onClick={() => onNext(interests)}>Next</button>
      <button onClick={() => onNext()}>Skip for now</button>
    </div>
  );
};

export default Interests;
