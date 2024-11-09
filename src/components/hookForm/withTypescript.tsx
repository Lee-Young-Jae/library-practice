import { useForm } from "react-hook-form";
import { Button, Input, Radio } from "yoso-ui";

interface IForm {
  occupation: string;
  id: string;
  name: string;
  pwd: string;
  email: string;
  phone: string;
}
const WithTypeScript = () => {
  const { register, handleSubmit } = useForm<IForm>({
    mode: "onSubmit",
    defaultValues: {
      occupation: "student",
      id: "",
      name: "",
      pwd: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: IForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="이메일"
        {...register("email", {
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "이메일 형식이 올바르지 않습니다.",
          },
        })}
      />
      <Radio.Group>
        <Radio {...register("occupation")} value="student">
          학생
        </Radio>
        <Radio {...register("occupation")} value="teacher">
          선생님
        </Radio>
      </Radio.Group>
      <Input label="아이디" {...register("id")} />
      <Input label="이름" {...register("name")} />
      <Input label="비밀번호" {...register("pwd")} />
      <Input label="전화번호" {...register("phone")} />
      <Button type="submit">제출</Button>
    </form>
  );
};

export default WithTypeScript;
