const Birthday = ({ onNext }) => {
  const [birthday, setBirthday] = useState({
    month: "",
    day: "",
    year: "",
  });

  const handleChange = (e) => {
    setBirthday({ ...birthday, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (birthday.month && birthday.day && birthday.year) {
      onNext(birthday); // Proceed to next step
    }
  };

  return (
    <div>
      <h2>When is your birthday?</h2>
      <input name="month" placeholder="MM" onChange={handleChange} />
      <input name="day" placeholder="DD" onChange={handleChange} />
      <input name="year" placeholder="YYYY" onChange={handleChange} />
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Birthday;
