export default function InstitutionTab({ details, onSelectInstitution }) {
  return (
    <div
      className="tab presser"
      onClick={() => onSelectInstitution(details.name)}
    >
      <img src={details.image} alt={details.name} />
    </div>
  );
}
