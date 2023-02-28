import React from "react";

const InfoInput = ({ value, setValue, info, required }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{info}</span>
        <span className="label-text-alt">{required}</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InfoInput;
