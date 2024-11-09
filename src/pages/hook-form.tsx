import Section from "../components/common/section";
import HookFormDefault from "../components/hookForm/default";
import Provider from "../components/hookForm/formProvider";
import Reset from "../components/hookForm/reset";
import Watch from "../components/hookForm/watch";
import WithTypeScript from "../components/hookForm/withTypescript";

const HookForm = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">React-Hook-Form</h1>
      <hr />
      <Section title="Default">
        <HookFormDefault />
      </Section>
      <Section title="FormProvider">
        <Provider />
      </Section>
      <Section title="Watch">
        <Watch />
      </Section>
      <Section title="WithTypeScript">
        <WithTypeScript />
      </Section>
      <Section title="Reset">
        <Reset />
      </Section>
    </div>
  );
};

export default HookForm;
