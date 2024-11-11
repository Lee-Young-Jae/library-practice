import {
  FormProvider,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { Button } from "yoso-ui";

const menus = [1, 2, 3, 4, 5];

const SelectList = ({ registerName }: { registerName: string }) => {
  const { setValue, control } = useFormContext();

  const selected = useWatch({
    control,
    name: registerName,
  });

  return (
    <div>
      {menus.map((item) => (
        <Button
          onClick={() => {
            setValue(registerName, item);
          }}
          key={item}
          variant={selected === item ? "primary" : "secondary"}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

const DefaultValue = {
  select: 1,
};

const Playground = () => {
  const methods = useForm<typeof DefaultValue>({
    defaultValues: DefaultValue,
  });

  const select = useWatch({
    control: methods.control,
    name: "select",
  });

  return (
    <FormProvider {...methods}>
      <SelectList registerName="select" />
      <div>{select}</div>
    </FormProvider>
  );
};

export default Playground;
