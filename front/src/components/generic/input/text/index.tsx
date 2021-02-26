import { useField } from "formik";
import React from "react";
import { Input } from "../../../login/styles";

export const TextInput = ({ props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
