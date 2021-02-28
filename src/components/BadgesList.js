const BadgesList = ({ badgeData }) => {
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
