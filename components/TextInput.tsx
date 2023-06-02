import React from "react";

const TextInput = ({ title }: { title: string }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={title}
        className="block mb-2 text-xl font-medium text-gray-900"
      >
        {title}
      </label>
      <input
        type="text"
        id={title}
        className="bg-white text-gray-900 text-xl rounded-lg focus:border-blue-600 block w-full p-2.5"
        placeholder=""
        required
      />
    </div>
  );
};

export default TextInput;
