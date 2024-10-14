export default function InstitutionTab({ details, onSelectInstitution }) {
  return (
    <div className="tab" onClick={() => onSelectInstitution(details.name)}>
      <img src={details.image} alt={details.name} />
    </div>
  );
}
