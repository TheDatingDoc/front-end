import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import NameForm from "../components/signup-form-components/NameForm";
import BirthdayForm from "../components/signup-form-components/BirthdayForm";
import GenderForm from "../components/signup-form-components/GenderForm";
import InterestedInForm from "../components/signup-form-components/InterestedInForm";
import LookingForForm from "../components/signup-form-components/LookingForForm";
import UploadPhotoForm from "../components/signup-form-components/UploadPhotoForm";
import InterestsForm from "../components/signup-form-components/InterestsForm";


const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    gender: "",
    interestedIn: [],
    lookingFor: [],
    photo: null,
    interests: [],
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { data } = await addUser({
        variables: {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          birthday: formData.birthday,
          gender: formData.gender,
          interestedIn: formData.interestedIn,
          lookingFor: formData.lookingFor,
        },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  const handleNext = (newData) => {
    setFormData({ ...formData, ...newData });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  // Ensure onNext is passed properly here
  return (
    <div className="signup-container">
      {step === 1 && (
        <NameForm
          formData={formData}
          handleChange={handleChange}
          onNext={handleNext}  // This ensures the onNext is passed correctly
        />
      )}

      {step === 2 && (
        <BirthdayForm
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}

      {step === 3 && (
        <GenderForm
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}

      {step === 4 && (
        <InterestedInForm
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}

      {step === 5 && (
        <LookingForForm
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}

      {step === 6 && (
        <UploadPhotoForm
          formData={formData}
          handlePhotoChange={handlePhotoChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}

      {step === 7 && (
        <InterestsForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
        />
      )}

      {error && <p>Error creating account: {error.message}</p>}
    </div>
  );
};

export default Signup;

