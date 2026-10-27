import { useState } from "react";

export default function Portrait({ src, name, initials }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className="portrait portrait-fallback" role="img" aria-label={`${name} photo placeholder`}>
        <span>{initials}</span>
      </div>
    );
  }

  return (
    <img
      className="portrait"
      src={src}
      alt={`Portrait of ${name}`}
      onError={() => setFailed(true)}
    />
  );
}
