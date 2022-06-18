import "./../Edit/edit.css";
const Input = ({ label, data, type, setData, cls, inputType }) => {
  return (
    <>
      <label>{label}: </label>
      {inputType === "textarea" ? (
        <textarea
          type={type}
          className={cls}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      ) : (
        <input
          type={type}
          className={cls}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default Input;
