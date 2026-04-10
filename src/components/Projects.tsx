const projects = [
  {
    title: "Engineering the Future",
    category: "Book",
    description:
      "A comprehensive guide to modern systems architecture and the principles driving next-generation computing infrastructure.",
    gradient: "from-gold/10 via-surface-light to-surface",
    year: "2024",
  },
  {
    title: "Distributed Computing Method for GPU Clusters",
    category: "Patent",
    description:
      "Novel approach to workload distribution across heterogeneous GPU architectures, improving throughput by 3x over existing methods.",
    gradient: "from-blue-900/20 via-surface-light to-surface",
    year: "2023",
  },
  {
    title: "Systems at Scale",
    category: "Book",
    description:
      "Practical strategies for building and maintaining large-scale computing systems, drawn from real-world engineering challenges.",
    gradient: "from-gold/10 via-surface-light to-surface",
    year: "2023",
  },
  {
    title: "Adaptive Resource Optimization Framework",
    category: "Patent",
    description:
      "An intelligent framework for dynamic resource allocation in high-performance computing environments, reducing idle compute by 40%.",
    gradient: "from-emerald-900/20 via-surface-light to-surface",
    year: "2022",
  },
  {
    title: "HPC Infrastructure Platform",
    category: "Project",
    description:
      "End-to-end platform for provisioning, monitoring, and optimizing high-performance computing clusters across hybrid cloud environments.",
    gradient: "from-purple-900/20 via-surface-light to-surface",
    year: "2024",
  },
  {
    title: "Real-Time Data Pipeline Engine",
    category: "Project",
    description:
      "Ultra-low latency data processing engine capable of handling millions of events per second with guaranteed ordering and delivery.",
    gradient: "from-orange-900/20 via-surface-light to-surface",
    year: "2023",
  },
];

const categoryColors: Record<string, string> = {
  Book: "border-gold/40 text-gold",
  Patent: "border-blue-400/40 text-blue-400",
  Project: "border-emerald-400/40 text-emerald-400",
};

export default function Projects() {
  return (
    <section id="work" className="py-32 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                Portfolio
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Selected{" "}
              <em className="font-serif italic text-gold">Work</em>
            </h2>
          </div>

          <span className="text-sm text-text-muted tracking-wider uppercase">
            Books / Patents / Projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group card-hover rounded-2xl border border-border overflow-hidden"
            >
              {/* Image/Gradient Placeholder */}
              <div
                className={`h-48 lg:h-56 bg-gradient-to-br ${project.gradient} relative`}
              >
                {/* Year badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/60 text-xs text-text-secondary">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 bg-surface-light flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <span
                  className={`inline-flex self-start px-3 py-1 rounded-full border text-xs tracking-wider uppercase ${categoryColors[project.category]}`}
                >
                  {project.category}
                </span>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
