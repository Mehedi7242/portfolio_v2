import { motion } from "framer-motion";
import WaveAvatar from "@/components/ui/WaveAvatar";

export default function Banner() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Optional: animate the avatar too */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <WaveAvatar />
      </motion.div>

      <motion.h1
        className="text-3xl md:text-4xl font-bold text-primary mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Mehedi Hasan
      </motion.h1>

      <motion.p
        className="mt-2 text-muted-foreground text-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Frontend Developer | MERN Stack 
      </motion.p>
    </motion.section>
  );
}
