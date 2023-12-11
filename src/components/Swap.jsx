import Accordion from "./Accordion";

const Swap = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Accordion title="Do you like piza or burger" answer="I like burger" />
      <Accordion title="Do you like laptop or Desktop" answer="I like laptop" />
      <Accordion
        title="Do you like travelling or Sleeping"
        answer="I like travelling"
      />
      <Accordion
        title="Do you like Cricket or Vollyball"
        answer="I like Cricket"
      />
      <Accordion title="Do you like Pubg or Freefire" answer="I like Pubg" />
    </div>
  );
};

export default Swap;
