const pictures = [];

export default function Pictures() {
  return (
    <>
      <h1 className="display page-title">Pictures</h1>
      {pictures.length === 0 ? (
        <p className="empty">
          Add image files to client/public/pictures, then list them in this file.
        </p>
      ) : (
        <ul className="gallery">
          {pictures.map((picture) => (
            <li key={picture.src}>
              <img src={picture.src} alt={picture.alt || ""} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
