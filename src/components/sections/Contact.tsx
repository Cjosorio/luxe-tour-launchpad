import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";
import { fleet } from "@/data/fleet";
import { buildWhatsAppLink } from "@/data/config";

export const Contact = () => {
  const { t } = useI18n();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    service: "",
    vehicle: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppLink(
      t.whatsapp.quoteMsg({
        ...form,
        service: form.service || "—",
        vehicle: form.vehicle || t.contact.anyVehicle,
        message: form.message || "—",
      })
    );
    window.open(url, "_blank");
  };

  const inputCls =
    "w-full bg-transparent border-b border-border/80 px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-base";

  return (
    <section id="contact" className="relative py-28 md:py-40 bg-card overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-40 pointer-events-none" />
      <div className="container max-w-6xl relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="label-eyebrow">{t.contact.eyebrow}</span>
              <h2 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1] text-foreground text-balance">
                {t.contact.title}
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                {t.contact.subtitle}
              </p>
              <div className="gold-divider mt-10 max-w-[120px]" />
              <a
                href={buildWhatsAppLink(t.whatsapp.defaultMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <span className="text-sm tracking-[0.2em] uppercase">{t.cta.whatsappLong}</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid sm:grid-cols-2 gap-7">
                  <input
                    required
                    placeholder={t.contact.name}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls}
                  />
                  <input
                    required
                    type="tel"
                    placeholder={t.contact.phone}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputCls}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-7">
                  <input
                    type="date"
                    placeholder={t.contact.date}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={`${inputCls} appearance-none [color-scheme:dark]`}
                  />
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={`${inputCls} cursor-pointer`}
                  >
                    <option value="">{t.contact.service}</option>
                    {t.services.items.map((s) => (
                      <option key={s.title} value={s.title} className="bg-background">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <select
                  value={form.vehicle}
                  onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                  className={`${inputCls} cursor-pointer`}
                >
                  <option value="">{t.contact.vehicle}</option>
                  <option value={t.contact.anyVehicle} className="bg-background">{t.contact.anyVehicle}</option>
                  {fleet.map((v) => (
                    <option key={v.id} value={v.name} className="bg-background">
                      {v.name} — {v.capacity} {t.fleet.pax}
                    </option>
                  ))}
                </select>
                <textarea
                  rows={3}
                  placeholder={t.contact.message}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputCls} resize-none`}
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wide rounded-sm shadow-gold hover:scale-[1.02] transition-transform"
                >
                  {t.cta.send}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};