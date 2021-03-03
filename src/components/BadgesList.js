const BadgesList = ({ badgeData }) => {
  if (badgeData.length === 0) {
    return (
      <>
        <h3>No hay ningún artículo</h3>
      </>
    );
  }
  return (
    <>
      <ul>
        {badgeData.map((badge) => (
          <li key={badge.id}>
            <p>
              {badge.firstName} {badge.lastName}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BadgesList;
