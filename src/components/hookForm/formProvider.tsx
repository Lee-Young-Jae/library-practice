import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { Button, Input } from "yoso-ui";

const DefaultValue = {
  username: "yj",
  password: "1234",
};

const Provider = () => {
  const method = useForm({ defaultValues: DefaultValue });
  const onSubmit = () => {
    console.log(method.getValues());
  };

  return (
    <FormProvider {...method}>
      <MyComponent />
      <MyComponent2 />
      <Button onClick={onSubmit}>Submit</Button>
    </FormProvider>
  );
};

const MyComponent = () => {
  const method = useFormContext();

  return <Input {...method.register("username")} />;
};

const MyComponent2 = () => {
  const method = useFormContext();

  return <Input {...method.register("password")} />;
};

export default Provider;
