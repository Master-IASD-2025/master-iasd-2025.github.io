<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import * as Accordion from "$lib/components/ui/accordion";
  import Button from "$lib/components/ui/button/button.svelte";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import {
    Brain,
    Database,
    Network,
    Cpu,
    BookOpen,
    GraduationCap,
    BarChart,
    Code,
    ArrowRight,
    Server,
    Globe,
    Lightbulb,
    Users,
    Sparkles,
    MessageSquare,
    Eye,
    Target,
    Zap,
    Briefcase,
    Share2,
    Layers,
    Rocket,
  } from "@lucide/svelte";

  const scopeOfWork = [
    {
      title: "Machine Learning & Deep Learning",
      icon: Brain,
      description: "Building models that learn from data.",
    },
    {
      title: "Data Analysis & Visualization",
      icon: BarChart,
      description: "Extracting insights and telling stories with data.",
    },
    {
      title: "Natural Language Processing",
      icon: MessageSquare,
      description: "Understanding and generating human language.",
    },
    {
      title: "Computer Vision",
      icon: Eye,
      description: "Enabling machines to see and interpret the visual world.",
    },
    {
      title: "Applied AI Systems",
      icon: Rocket,
      description: "Real-world applications solving tangible problems.",
    },
    {
      title: "Research Experiments",
      icon: BookOpen,
      description: "Exploring new frontiers in AI science.",
    },
  ];

  const goals = [
    {
      title: "Impactful Open Source",
      description:
        "Build projects that matter and contribute to the global ecosystem.",
      icon: Globe,
      tags: ["Open Source", "Impact"],
    },
    {
      title: "Learning by Building",
      description:
        "Encourage learning through real implementation and collaboration.",
      icon: Code,
      tags: ["Practice", "Hands-on"],
    },
    {
      title: "Industry Workflows",
      description: "Apply modern best practices and bridging the academic gap.",
      icon: Briefcase,
      tags: ["Professional", "Best Practices"],
    },
    {
      title: "Portfolio Ready",
      description: "Create public work that demonstrates student skills.",
      icon: Layers,
      tags: ["Career", "Showcase"],
    },
    {
      title: "Knowledge Sharing",
      description: "Promoting peer learning and open transparency.",
      icon: Share2,
      tags: ["Community", "Education"],
    },
    {
      title: "Solutions for Morocco",
      description:
        "Contributing to AI solutions relevant to our local context.",
      icon: Database, // Used as placeholder for 'context'
      tags: ["Local", "Relevance"],
    },
  ];

  const principles = [
    {
      title: "Collaboration over Competition",
      description: "We go further when we go together.",
    },
    {
      title: "Learning through Building",
      description: "We learn best by doing.",
    },
    {
      title: "Open Knowledge",
      description: "Transparency in process and outcome.",
    },
    {
      title: "Respectful Communication",
      description: "Constructive feedback and safe space.",
    },
    {
      title: "Quality & Responsibility",
      description: "Taking pride in well-crafted contributions.",
    },
  ];
</script>

<div class="flex min-h-screen flex-col">
  <!-- Hero Section -->
  <section
    class="relative flex flex-col items-center justify-center py-20 text-center md:py-28 lg:py-36 overflow-hidden"
  >
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
    </div>
    
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col items-center space-y-8">
        <div class="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-4 py-1.5 text-sm text-muted-foreground">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          Student-led Open Source Initiative
        </div>
        
        <div class="space-y-4">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            AI & Data Science
            <span class="block text-primary">Community</span>
          </h1>
          <p class="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
            A community by the AI and Data Science Master at FST Tanger.
            Transforming learning into contribution and ideas into impact.
          </p>
        </div>
        
        <div class="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-4">
          <Button size="lg" class="gap-2 px-6 rounded-full">
            <Sparkles class="h-4 w-4" /> View Projects
          </Button>
          <Button size="lg" variant="outline" class="gap-2 px-6 rounded-full">
            <MessageSquare class="h-4 w-4" /> Join Us
          </Button>
        </div>
      </div>
    </div>
  </section>

  <!-- Vision Section -->
  <section class="w-full py-20 md:py-28 border-t border-border/40">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div class="flex flex-col justify-center space-y-6">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary w-fit"
          >
            <Target class="h-3.5 w-3.5" />
            Our Vision
          </div>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            From Learners to Contributors
          </h2>
          <p class="text-muted-foreground text-lg leading-relaxed">
            We believe that students are not only learners, but also
            contributors to the global AI ecosystem. Our vision is to build a
            strong, collaborative AI community that produces high-quality
            open-source projects and helps position Moroccan talent on the
            international stage.
          </p>
          <blockquote class="border-l-2 border-primary/50 pl-4 italic text-muted-foreground">
            "Our purpose is creating meaningful open-source impact in
            Artificial Intelligence and Data Science, while giving real
            practical value to students."
          </blockquote>
        </div>
        <div class="flex items-center justify-center">
          <div
            class="relative bg-muted/30 flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl border border-border/60 p-8"
          >
            <div class="absolute inset-4 rounded-xl border border-dashed border-border/60"></div>
            <div class="text-center space-y-3">
              <Globe class="h-16 w-16 text-primary/40 mx-auto" />
              <span class="block text-lg font-semibold text-muted-foreground/60">Moroccan Talent</span>
              <span class="block text-sm text-muted-foreground/40">On the International Stage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Goals Section -->
  <section class="w-full py-20 md:py-28 bg-muted/20 border-t border-border/40">
    <div class="container mx-auto px-4 md:px-6">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Our Goals
        </h2>
        <p class="text-muted-foreground text-lg">
          We aim to bridge the gap between academic knowledge and real-world
          application.
        </p>
      </div>
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {#each goals as goal}
          {@const Icon = goal.icon}
          <Card.Root class="flex flex-col h-full bg-background/60 border-border/60 hover:border-border transition-colors">
            <Card.Header class="pb-3">
              <div
                class="bg-primary/10 text-primary mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
              >
                <Icon class="h-5 w-5" />
              </div>
              <Card.Title class="text-lg">{goal.title}</Card.Title>
              <Card.Description class="pt-1 text-sm leading-relaxed">
                {goal.description}
              </Card.Description>
            </Card.Header>
            <Card.Content class="mt-auto pt-0">
              <div class="flex flex-wrap gap-1.5">
                {#each goal.tags as tag}
                  <Badge variant="secondary" class="text-xs font-normal">{tag}</Badge>
                {/each}
              </div>
            </Card.Content>
          </Card.Root>
        {/each}
      </div>
    </div>
  </section>

  <!-- Scope of Work -->
  <section class="w-full py-20 md:py-28 border-t border-border/40">
    <div class="container mx-auto px-4 md:px-6">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Scope of Work
        </h2>
        <p class="text-muted-foreground text-lg">
          Key areas where we focus our efforts and experiments.
        </p>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each scopeOfWork as scope}
          {@const Icon = scope.icon}
          <div
            class="group flex items-start gap-4 rounded-xl border border-border/60 bg-background/50 p-5 hover:bg-muted/30 transition-colors"
          >
            <div
              class="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
            >
              <Icon class="h-5 w-5" />
            </div>
            <div>
              <h3 class="font-semibold mb-1">{scope.title}</h3>
              <p class="text-sm text-muted-foreground">{scope.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Principles Section -->
  <section class="w-full py-20 md:py-28 bg-muted/20 border-t border-border/40">
    <div class="container mx-auto px-4 md:px-6">
      <div class="mx-auto mb-14 max-w-2xl text-center">
        <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Community Principles
        </h2>
        <p class="text-muted-foreground text-lg">
          The values that guide our collaboration and growth.
        </p>
      </div>
      <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {#each principles as principle, i}
          <div class="flex items-center gap-3 rounded-full border border-border/60 bg-background/60 px-5 py-3">
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
              {i + 1}
            </span>
            <span class="font-medium text-sm">{principle.title}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA / Who This Is For -->
  <section class="py-20 md:py-28 border-t border-border/40">
    <div class="container mx-auto px-4 md:px-6">
      <div class="mx-auto max-w-3xl text-center">
        <div class="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 mb-6">
          <Users class="h-7 w-7 text-primary" />
        </div>
        <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Who This Is For
        </h2>
        <p class="text-muted-foreground mb-6 text-lg leading-relaxed">
          Primarily for students of the AI and Data Science Master at FST Tanger,
          as well as motivated contributors who share our values.
        </p>
        <p class="text-foreground font-medium mb-10 text-xl">
          Skill level is not a barrier.<br class="hidden sm:block" />
          <span class="text-primary">Commitment, curiosity, and consistency</span> matter more.
        </p>
        <Button
          size="lg"
          variant="default"
          href="https://github.com/Master-IASD-2025"
          class="rounded-full px-8"
        >
          Join the Initiative
        </Button>
      </div>
    </div>
  </section>
  
  <!-- Footer -->
  <footer class="border-t border-border/40 py-8">
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} IASD Community — FST Tanger</p>
        <p>Built with passion by students, for students.</p>
      </div>
    </div>
  </footer>
</div>
