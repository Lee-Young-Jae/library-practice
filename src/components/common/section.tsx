import { Accordion } from "yoso-ui";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="border-2 border-gray-300 rounded-md p-8 mt-8">
      <Accordion>
        <Accordion.Item value="1">
          <Accordion.Header>
            <h2 className="text-xl font-bold">{title}</h2>
          </Accordion.Header>
          <Accordion.Content>
            {children}
            <br />
            <br />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Section;
