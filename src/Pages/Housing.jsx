function Housing({
  selectedCards: { title, location, tags, host, name, rating },
}) {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="apartment_head">
      <div className="apartment_title">
        <h1>{title}</h1>
        <h2>{location}</h2>
        <div className="apartments_tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="apartment_owner">
        <div className="apartment_owner_details">
          <h3>{host.name}</h3>
          <div className="apartment_owner_badge">
            <img src={host.picture} alt="facepic" />
          </div>
        </div>
        <div className="apartment_owner_stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={star <= rating ? "on" : "off"}>
              {star <= rating ? "✮" : "☆"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Housing;
