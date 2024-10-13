import transcript from "../transcript";
import InstitutionTab from "./InstitutionTab";

export default function EducationTabs() {
  return (
    <>
      <h2>Tab</h2>
      <h2>Tab</h2>
      <h2>Tab</h2>
      <h2>Tab</h2>
      {Object.entries(transcript).map(([institution, details]) => (
        <InstitutionTab
          key={institution}
          name={institution}
          details={details}
        />
      ))}
    </>
  );
}
