const UploadPhoto = ({ onNext }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onNext(file); // Proceed with the file
  };

  return (
    <div>
      <h2>Add your first photo</h2>
      <input type="file" onChange={handleFileChange} />
      <button>Upload</button>
    </div>
  );
};

export default UploadPhoto;
