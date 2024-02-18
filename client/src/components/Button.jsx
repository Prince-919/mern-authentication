const Button = ({ disabled, title }) => {
  return (
    <button
      disabled={disabled}
      className="_btn p-3 rounded-lg bg-[#0496ff] uppercase font-semibold text-white hover:opacity-95 disabled:opacity-80">
      {title}
    </button>
  );
};

export default Button;
