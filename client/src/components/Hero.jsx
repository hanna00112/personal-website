import Portrait from "./Portrait";
import { publicUrl } from "../publicUrl";
import SocialLinks from "./SocialLinks";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hannaabra/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/hanna00112",
    icon: "github",
  },
  {
    label: "Email",
    href: "mailto:abrahemhanna73@gmail.com",
    icon: "email",
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1 className="name">Hanna Abrahem</h1>
        <SocialLinks socials={socials} />
      </div>
      <Portrait src={publicUrl("portrait.jpg")} name="Hanna Abrahem" initials="HA" />
    </section>
  );
}
