const TextInput = ({ type, placeholder, id, className, handleChange }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={handleChange}
        className={
          className ? className : "bg-slate-100 p-3 rounded-lg  w-full"
        }
      />
    </div>
  );
};

export default TextInput;
