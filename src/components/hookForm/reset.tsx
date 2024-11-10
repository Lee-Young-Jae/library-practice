import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "yoso-ui";
import { fakeApi } from "../../utils/api";

const DefaultValue = {
  searchProduct: "",
  selectedCategory: "",
};

const Reset = () => {
  const { register, handleSubmit, reset, getValues, setValue } = useForm({
    defaultValues: DefaultValue,
  });
  const [category, setCategory] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = (await fakeApi("/category")) as string[];
      if (data) {
        setCategory((data as string[]) || []);
        setSelectedCategory(data[0]);
        reset({
          ...DefaultValue,
          selectedCategory: data[0],
        });
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("searchProduct")} />
      {category.map((value, index) => {
        return (
          <Button
            key={index}
            onClick={() => setValue("selectedCategory", value)}
            variant={
              getValues("selectedCategory") === value ? "primary" : "secondary"
            }
          >
            {value}
          </Button>
        );
      })}
      <br />
      <Button type="submit">제출</Button>
    </form>
  );
};

export default Reset;
