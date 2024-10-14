import InstitutionTab from "./InstitutionTab";

export default function EducationTabs({ transcript, onSelectInstitution }) {
  return (
    <>
      {Object.entries(transcript).map(([institution, details]) => (
        <InstitutionTab
          key={institution}
          details={{ name: institution, ...details }}
          onSelectInstitution={onSelectInstitution}
        />
      ))}
    </>
  );
}
