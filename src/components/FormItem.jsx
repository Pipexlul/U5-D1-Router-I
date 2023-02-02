const FormItem = ({
  type,
  labelText,
  placeholder,
  inputType,
  id,
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-300"
      >
        {labelText}
      </label>
      {type === "input" ? (
        <input
          type={inputType}
          id={id}
          className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-fuchsia-400 focus:border-fuchsia-400"
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <textarea
          id={id}
          rows="6"
          className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-fuchsia-500 focus:border-fuchsia-500"
          placeholder={placeholder}
          required={required}
        ></textarea>
      )}
    </div>
  );
};

export default FormItem;
