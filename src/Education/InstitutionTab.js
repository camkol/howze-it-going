export default function InstitutionTab({ details, onSelectInstitution }) {
  return (
    <div onClick={() => onSelectInstitution(details.name)}>
      <div>
        <img src={details.image} alt={details.name} />
      </div>
    </div>
  );
}
