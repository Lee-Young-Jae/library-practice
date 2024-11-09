import { useEffect, useRef } from "react";
import {
  FormProvider,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { Input } from "yoso-ui";

const DefaultValue = {
  username: "",
  select: "1",
};

const fetchExample = async (searchName: string, select: string) => {
  const items = ["yj1", "yj2", "ym1", "ym2"];
  console.log("fetchExample", searchName, select);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return items.find((item) => item === searchName + select);
};

const Watch = () => {
  const method = useForm({
    defaultValues: DefaultValue,
  });
  const renderCount = useRef(0);

  console.log("render!", renderCount.current++);

  const username = useWatch({
    control: method.control,
    name: "username",
  });

  const select = useWatch({
    control: method.control,
    name: "select",
  });

  useEffect(() => {
    fetchExample(username, select).then((result) => {
      console.log("result", result);
    });
  }, [username, select]);

  return (
    <FormProvider {...method}>
      {/* <Input {...method.register("username")} /> */}
      {/* <p>{method.watch("username")}</p> */}
      {/* <WatchMethod registerName="username" /> */}
      {/* <UseWatchHook registerName="username" /> */}
      <SearchInput />
      <Select registerName="select" />
    </FormProvider>
  );
};

const WatchMethod = ({ registerName }: { registerName: string }) => {
  const method = useFormContext();
  console.log("watchMethod", method.watch(registerName));
  return <div>{method.watch(registerName)}</div>;
};

const UseWatchHook = ({ registerName }: { registerName: string }) => {
  const method = useFormContext();
  const watch = useWatch({
    control: method.control,
    name: registerName,
  });

  console.log("useWatchHook", watch);
  return <div>{watch}</div>;
};

const SearchInput = () => {
  const method = useFormContext();
  return <Input {...method.register("username")} />;
};

const Select = ({ registerName }: { registerName: string }) => {
  const method = useFormContext();
  return (
    <div>
      <select {...method.register(registerName)}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
};

export default Watch;
