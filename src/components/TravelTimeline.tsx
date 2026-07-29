import { motion } from "framer-motion";
import { MessageSquare, CheckCircle, Bus, MapPin } from "lucide-react";

interface TimelineStep {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface TravelTimelineProps {
  steps: TimelineStep[];
}

const stepIcons = [MessageSquare, CheckCircle, Bus, MapPin];

export const TravelTimeline = ({ steps }: TravelTimelineProps) => {
  return (
    <div className="relative">
      {/* Background card */}
      <div className="relative overflow-hidden rounded-sm bg-white border border-border shadow-elegant p-8 md:p-10">
        {/* Decorative glow */}
        <div aria-hidden className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div aria-hidden className="absolute -bottom-16 -left-12 h-52 w-52 rounded-full bg-secondary/8 blur-3xl" />

        <div className="relative">
          {/* Header */}
          <div className="mb-10">
            <span className="label-eyebrow">Proceso</span>
            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
              Así de simple es viajar con nosotros
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line - desktop */}
            <div className="hidden md:block absolute top-[26px] left-[26px] right-[26px] h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />
            
            {/* Connecting line - mobile */}
            <div className="md:hidden absolute top-[26px] left-[26px] bottom-[26px] w-0.5 bg-gradient-to-b from-primary/30 via-primary to-primary/30" />

            <div className="grid md:grid-cols-4 gap-8 md:gap-6">
              {steps.map((step, index) => {
                const Icon = stepIcons[index] || Bus;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="relative flex md:flex-col items-start md:items-center gap-5 md:gap-6 md:text-center"
                  >
                    {/* Step number + icon bubble */}
                    <div className="relative shrink-0">
                      <motion.div
                        className="relative z-10 flex items-center justify-center w-[52px] h-[52px] rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-gold border-2 border-white"
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon size={22} className="text-primary-foreground" strokeWidth={2.2} />
                      </motion.div>
                      
                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/30"
                        animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: index * 0.3,
                          ease: "easeOut" 
                        }}
                      />

                      {/* Step number badge */}
                      <span className="absolute -top-1 -right-1 z-20 flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-white text-[10px] font-bold shadow-blue">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1 md:pt-0">
                      <h4 className="text-base md:text-lg font-bold text-foreground mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-foreground/70">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom trust line */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 pt-6 border-t border-border"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm text-foreground/60">
              <span className="flex items-center gap-2">
                <CheckCircle size={14} className="text-primary" />
                Confirmación en menos de 30 min
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={14} className="text-primary" />
                Conductores certificados
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={14} className="text-primary" />
                Vehículos asegurados
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
