



const CustomInput = ({
  id,
  name,
  error,
  value,
  className,
  ...props
}) => {
  return (
    <div className="form-group mb-8">
      <input
        id={id}
        name={name}
        className={className}
        {...props}
      />
      {error && value && <div className="text-red-900 text-sm">{error}</div>}
    </div>
  );
};

export default CustomInput;
