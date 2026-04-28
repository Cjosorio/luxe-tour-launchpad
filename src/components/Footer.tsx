import { Instagram, Facebook, Mail } from "lucide-react";
import { useI18n } from "@/i18n";
import { SOCIAL } from "@/data/config";

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="relative bg-foreground text-background py-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            {/* Logo upload zone */}
            <div className="h-16 w-52 border border-dashed border-background/25 bg-background/5 flex items-center justify-center">
              <span className="text-[9px] uppercase tracking-[0.3em] text-background/50">
                {t.brand} · Logo
              </span>
            </div>
            <div className="mt-8 font-serif text-3xl md:text-4xl text-background max-w-md leading-tight">
              {t.brandFull}
            </div>
            <p className="mt-4 text-background/60 max-w-md leading-relaxed text-sm">{t.footer.tagline}</p>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-5">
              {t.footer.nav}
            </div>
            <ul className="space-y-3">
              {[
                { href: "#why", label: t.nav.why },
                { href: "#services", label: t.nav.services },
                { href: "#fleet", label: t.nav.fleet },
                { href: "#contact", label: t.nav.contact },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-background/80 hover:text-primary transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-5">
              {t.footer.follow}
            </div>
            <div className="flex gap-3">
              {[
                { href: SOCIAL.instagram, Icon: Instagram, label: "Instagram" },
                { href: SOCIAL.facebook, Icon: Facebook, label: "Facebook" },
                { href: SOCIAL.email, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 rounded-full border border-background/30 grid place-items-center text-background/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-background/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/50 tracking-wide">
            © {new Date().getFullYear()} {t.brandFull}. {t.footer.rights}
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-background/50">
            Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
};