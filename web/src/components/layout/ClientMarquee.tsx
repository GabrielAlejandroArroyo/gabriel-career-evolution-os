import { companies } from "@/data/companies";
import { CompanyWordmark } from "./CompanyWordmark";

type ClientMarqueeProps = {
  label: string;
};

/**
 * Fixed bottom dock: logos stay visible while scrolling after deploy.
 * Track is duplicated for a seamless CSS marquee loop.
 */
export function ClientMarquee({ label }: ClientMarqueeProps) {
  const track = [...companies, ...companies];

  return (
    <div
      className="logo-dock fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg-elevated/95 py-3 shadow-[0_-8px_32px_rgba(0,0,0,0.08)] backdrop-blur-md dark:shadow-[0_-8px_32px_rgba(0,0,0,0.35)] md:py-3.5"
      role="complementary"
      aria-label={label}
    >
      <p className="sr-only">{label}</p>

      <div className="logo-marquee relative overflow-hidden">
        <ul className="logo-marquee-track flex w-max items-center gap-10 px-6 md:gap-14 md:px-10">
          {track.map((company, index) => (
            <li
              key={`${company.id}-${index}`}
              className="logo-float shrink-0 opacity-90 transition-opacity hover:opacity-100"
              aria-hidden={index >= companies.length ? true : undefined}
              style={{ animationDelay: `${(index % companies.length) * 0.12}s` }}
            >
              <CompanyWordmark company={company} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
