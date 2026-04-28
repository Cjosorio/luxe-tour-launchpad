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
    "w-full bg-transparent border-b border-foreground/20 px-0 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors text-base";

  return (
    <section id="contact" className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div className="container max-w-7xl relative">
        <div className="grid lg:grid-cols-12 gap-0 border border-foreground/10 shadow-elegant bg-card">
          {/* LEFT — yellow block with headline & logo area */}
          <div className="lg:col-span-5 bg-primary p-10 lg:p-14 flex flex-col justify-between min-h-[560px] relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-primary-foreground/10 rounded-full pointer-events-none" />
            <div className="absolute -top-12 -left-12 w-40 h-40 border border-primary-foreground/10 rounded-full pointer-events-none" />
            <Reveal>
              <span className="uppercase tracking-[0.35em] text-[11px] font-semibold text-primary-foreground before:content-[''] before:inline-block before:w-7 before:h-px before:bg-primary-foreground/60 before:mr-3 before:align-middle">
                {t.contact.eyebrow}
              </span>
              <h2 className="mt-6 font-serif text-5xl md:text-6xl leading-[1] text-primary-foreground text-balance">
                {t.contact.title}
              </h2>
              <p className="mt-8 text-base text-primary-foreground/80 leading-relaxed max-w-sm">
                {t.contact.subtitle}
              </p>
            </Reveal>

            <div className="relative mt-12 space-y-6">
              <div className="h-20 w-40 border border-dashed border-primary-foreground/40 bg-primary-foreground/5 flex items-center justify-center">
                <span className="text-[9px] uppercase tracking-[0.3em] text-primary-foreground/60">
                  Logo Castellanos
                </span>
              </div>
              <a
                href={buildWhatsAppLink(t.whatsapp.defaultMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-primary-foreground border-b border-primary-foreground pb-1 hover:gap-5 transition-all group"
              >
                <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
                  {t.cta.whatsappLong}
                </span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="lg:col-span-7 p-10 lg:p-14 bg-card">
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
                    className={`${inputCls} appearance-none`}
                  />
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={`${inputCls} cursor-pointer`}
                  >
                    <option value="">{t.contact.service}</option>
                    {t.services.items.map((s) => (
                      <option key={s.title} value={s.title} className="bg-card">
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
                  <option value={t.contact.anyVehicle} className="bg-card">{t.contact.anyVehicle}</option>
                  {fleet.map((v) => (
                    <option key={v.id} value={v.name} className="bg-card">
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
                  className="group inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background font-semibold tracking-[0.2em] uppercase text-xs rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
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