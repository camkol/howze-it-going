export default function InstitutionTab({ name, details }) {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <img href={details.image} alt={name} />
      </div>
    </div>
  );
}
