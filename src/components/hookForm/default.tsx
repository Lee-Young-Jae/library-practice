import { useState } from "react";
import { useForm } from "react-hook-form";

const HookFormDefault = () => {
  const { register, handleSubmit, formState } = useForm();
  const [formData, setFormData] = useState({});

  const onSubmit = (data: any) => {
    setFormData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="border border-gray-300 rounded-md p-2"
        {...register("username", {
          required: "필수 입력 항목입니다.",
          minLength: {
            value: 2,
            message: "최소 2글자 이상 입력해주세요.",
          },
        })}
      />
      <button className="border border-gray-300 rounded-md p-2" type="submit">
        Submit
      </button>
      <p>{String(formState.errors.username?.message)}</p>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </form>
  );
};

export default HookFormDefault;
