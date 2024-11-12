import Section from "../components/common/section";
import QueryKeyFactory from "../components/tanstackQuery/queryKeyFactory";

const TanstackQuery = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Tanstack Query</h1>

      <Section title="QueryKeyFactory">
        <QueryKeyFactory />
      </Section>
    </div>
  );
};

export default TanstackQuery;
