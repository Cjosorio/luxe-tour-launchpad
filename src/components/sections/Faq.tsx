import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Faq = () => {
  const { t } = useI18n();
  return (
    <section className="relative py-28 md:py-40 bg-background">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="label-eyebrow">{t.faq.eyebrow}</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05] text-foreground text-balance">
                {t.faq.title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <Accordion type="single" collapsible className="w-full">
                {t.faq.items.map((it, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/60">
                    <AccordionTrigger className="text-left font-serif text-xl md:text-2xl text-foreground py-6 hover:text-primary hover:no-underline">
                      {it.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {it.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};