import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="scroll-mt-14 min-h-[80vh] px-6 py-12 bg-background flex justify-center">
      <Card className="max-w-6xl w-full shadow-xl border border-border">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
            About Me
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm <span className="font-semibold text-primary">Mehedi Hasan</span>, a passionate Computer Science student at Independent University, Bangladesh, with a strong focus on full-stack web development and user-centric design. I love building responsive, interactive web applications using technologies like <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>.
          </p>

          <p>
            I currently work as a <strong>Junior Frontend Developer</strong> at Blood Bridge, where I help develop user-friendly web-based blood donation systems. I’m constantly expanding my skill set by exploring <strong>Next.js</strong>, <strong>PostgreSQL</strong>, <strong>LangChain.js</strong>, and <strong>TypeScript</strong> to create more dynamic digital experiences.
          </p>

          <p>
            With a solid foundation in programming, design, and problem-solving, I'm excited about opportunities that let me combine creativity with logic. I’m also interested in <strong>Retrieval-Augmented Generation (RAG)</strong>, <strong>Digital Image Processing</strong>, and creating meaningful user experiences through thoughtful design.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
