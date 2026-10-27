function Icon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    fill: "currentColor",
  };

  if (name === "linkedin") {
    return (
      <svg {...common}>
        <path d="M4.7 3.3a2.2 2.2 0 1 0 .1 4.4 2.2 2.2 0 0 0-.1-4.4ZM3.2 9.1h3.1V20.7H3.2V9.1Zm5.2 0h3v1.6h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v6.7h-3.1v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v6h-3.1V9.1Z" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg {...common}>
        <path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.6s.8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.6 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg {...common}>
        <path d="M3 5.8h18a1.2 1.2 0 0 1 1.2 1.2v10a1.2 1.2 0 0 1-1.2 1.2H3a1.2 1.2 0 0 1-1.2-1.2V7A1.2 1.2 0 0 1 3 5.8Zm9 6.7 8.2-5.2H3.8L12 12.5Zm0 1.6L3.4 8.7V17h17.2V8.7L12 14.1Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg {...common}>
        <path d="M8 3.2h8A4.8 4.8 0 0 1 20.8 8v8a4.8 4.8 0 0 1-4.8 4.8H8A4.8 4.8 0 0 1 3.2 16V8A4.8 4.8 0 0 1 8 3.2Zm0 1.8A3 3 0 0 0 5 8v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm8.4 1.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 8.1A3.9 3.9 0 1 1 8.1 12 3.9 3.9 0 0 1 12 8.1Zm0 1.8a2.1 2.1 0 1 0 2.1 2.1A2.1 2.1 0 0 0 12 9.9Z" />
      </svg>
    );
  }

  if (name === "rss") {
    return (
      <svg {...common}>
        <path d="M5 4.5h2.2A12.3 12.3 0 0 1 19.5 16.8V19h-2.2A10.3 10.3 0 0 0 7 9.7V7.5H5V4.5Zm0 6.2h2.2a6.1 6.1 0 0 1 6.1 6.1V19h-2.2a3.9 3.9 0 0 0-3.9-3.9H5v-4.4Zm1.7 6.1a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M10.6 13.4a5 5 0 0 0 7.1.2l2.3-2.3a5 5 0 0 0-7.1-7.1l-1.3 1.3 1.5 1.5 1.3-1.3a2.9 2.9 0 0 1 4.1 4.1l-2.3 2.3a2.9 2.9 0 0 1-4.1-.1l-1.5 1.4Zm2.8-2.8a5 5 0 0 0-7.1-.2l-2.3 2.3a5 5 0 0 0 7.1 7.1l1.3-1.3-1.5-1.5-1.3 1.3a2.9 2.9 0 0 1-4.1-4.1l2.3-2.3a2.9 2.9 0 0 1 4.1.1l1.5-1.4Z" />
    </svg>
  );
}

export default function SocialLinks({ socials }) {
  return (
    <ul className="socials">
      {socials.map((item) => {
        const href = typeof item.href === "string" && item.href ? item.href : "#";
        const external = href.startsWith("http");
        return (
          <li key={item.label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <Icon name={item.icon} />
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
