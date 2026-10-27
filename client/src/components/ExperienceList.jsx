function dates(item) {
  if (item.start && item.end) return `${item.start} – ${item.end}`;
  return item.start || item.end || "";
}

export default function ExperienceList({ items, detailed = false }) {
  if (!items?.length) {
    return (
      <p className="empty">
        Add a role in the page file and it will show up here.
      </p>
    );
  }

  return (
    <div className="roles">
      {items.map((item) => {
        const when = dates(item);
        const logoStyle = {
          background: item.logoBg || "#4e7a4a",
          color: item.logoColor || "#f6f1ea",
        };
        const logo = item.logoImage ? <img src={item.logoImage} alt="" /> : <span>{item.logoText}</span>;

        return (
          <article
            className="role"
            key={`${item.title}-${item.company}-${item.start}`}
          >
            {item.website ? (
              <a
                className="role-logo"
                href={item.website}
                target="_blank"
                rel="noreferrer"
                style={logoStyle}
                aria-label={`${item.company} website`}
              >
                {logo}
              </a>
            ) : (
              <div
                className="role-logo"
                style={logoStyle}
                aria-hidden="true"
              >
                {logo}
              </div>
            )}
            <div className="role-copy">
              <h3 className="role-title">
                {item.website ? (
                  <a
                    className="role-title-link"
                    href={item.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                    <span className="role-website-pop">{item.website}</span>
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <p className="role-meta">
                <span className="role-company">{item.company}</span>
                {item.location ? (
                  <>
                    <span className="role-dot" aria-hidden="true">
                      ·
                    </span>
                    <span className="role-location">{item.location}</span>
                  </>
                ) : null}
              </p>
              {detailed && item.summary ? <p className="role-summary">{item.summary}</p> : null}
            </div>
            {when ? <p className="role-dates">{when}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
