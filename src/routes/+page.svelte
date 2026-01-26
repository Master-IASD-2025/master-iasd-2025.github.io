<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import Button from "$lib/components/ui/button/button.svelte";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import {
    Brain,
    BarChart,
    ArrowRight,
    Github,
    Users,
    Sparkles,
    MessageSquare,
    Eye,
    Rocket,
    BookOpen,
    FolderGit2,
    FileText,
    Heart,
  } from "@lucide/svelte";

  const metadata = {
    title: "Master IASD FSTT - AI & Data Science Community",
    description: "Join the Master IASD community at FSTT. Explore cutting-edge research, collaborate on AI projects, and advance your skills in artificial intelligence and data science.",
    keywords: "Master IASD, FSTT, AI, Data Science, Machine Learning, Research, Morocco, Tangier",
  };

  const projects = [
    {
      title: "ML Pipeline Framework",
      description:
        "Production-ready machine learning pipeline with automated training, evaluation, and deployment workflows.",
      category: "Machine Learning",
      categoryColor: "primary",
      contributors: 8,
      icon: Brain,
    },
    {
      title: "NLP Research Toolkit",
      description:
        "Comprehensive toolkit for natural language processing experiments and research on Moroccan dialects.",
      category: "Research",
      categoryColor: "warning",
      contributors: 5,
      icon: MessageSquare,
    },
    {
      title: "Data Viz Dashboard",
      description:
        "Interactive dashboard for visualizing complex datasets with real-time analytics and insights.",
      category: "Data Science",
      categoryColor: "success",
      contributors: 6,
      icon: BarChart,
    },
  ];

  const stats = [
    { value: "20+", label: "Contributors", icon: Users },
    { value: "12", label: "Projects", icon: FolderGit2 },
    { value: "3", label: "Papers", icon: FileText },
    { value: "100%", label: "Student Owned", icon: Heart },
  ];

  const scopeAreas = [
    {
      title: "Machine Learning",
      description: "Building models that learn from data",
      icon: Brain,
    },
    {
      title: "Data Analysis",
      description: "Extracting insights from complex datasets",
      icon: BarChart,
    },
    {
      title: "NLP Research",
      description: "Understanding human language",
      icon: MessageSquare,
    },
    {
      title: "Computer Vision",
      description: "Teaching machines to see",
      icon: Eye,
    },
    {
      title: "Applied AI",
      description: "Real-world problem solving",
      icon: Rocket,
    },
    {
      title: "Research",
      description: "Exploring new frontiers",
      icon: BookOpen,
    },
  ];
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta name="keywords" content={metadata.keywords} />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={metadata.title} />
  <meta name="twitter:description" content={metadata.description} />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <!-- Hero Section -->
  <section class="relative overflow-hidden py-28 md:py-36 lg:py-48">
    <!-- Background glow effects -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute left-1/4 top-1/3 h-125 w-125 rounded-full bg-primary/10 blur-[140px]"
      ></div>
      <div
        class="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-primary/5 blur-[100px]"
      ></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl">
        <!-- Status badge -->
        <div
          class="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-sm backdrop-blur-sm"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-chart-2 opacity-75"
            ></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-chart-2"
            ></span>
          </span>
          <span class="text-muted-foreground">Open Source Initiative</span>
        </div>

        <!-- Heading -->
        <h1
          class="mb-8 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span class="text-foreground">AI & Data Science</span>
          <br />
          <span
            class="bg-clip-text text-primary"
            >Community</span
          >
        </h1>

        <!-- Description -->
        <p
          class="mb-12 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
        >
          A student-led open source community by the AI and Data Science Master
          at FST Tanger. Transforming learning into contribution and ideas into
          impact.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4">
          <Button size="lg" class="gap-2 font-medium">
            <Sparkles class="h-4 w-4" />
            Explore Projects
          </Button>
          <Button size="lg" variant="outline" class="gap-2 font-medium">
            <Github class="h-4 w-4" />
            View on GitHub
          </Button>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="border-y border-border/40 bg-card/30 py-16 md:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-12 md:grid-cols-4">
        {#each stats as stat}
          {@const Icon = stat.icon}
          <div class="text-center">
            <div
              class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
            >
              <Icon class="h-5 w-5 text-primary" />
            </div>
            <div class="text-3xl font-bold text-foreground md:text-4xl">
              {stat.value}
            </div>
            <div class="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Featured Projects -->
  <section class="py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div
        class="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <h2 class="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Featured Projects
          </h2>
          <p class="text-muted-foreground">
            Real projects built by our community members
          </p>
        </div>
        <Button variant="ghost" class="gap-2 self-start sm:self-auto">
          View All Projects
          <ArrowRight class="h-4 w-4" />
        </Button>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each projects as project}
          {@const Icon = project.icon}
          <Card.Root
            class="group flex flex-col overflow-hidden border-border/60 bg-card/50 transition-all hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
          >
            <Card.Header class="pb-5">
              <div class="mb-5 flex items-center justify-between">
                <Badge
                  variant="secondary"
                  class={project.categoryColor === "primary"
                    ? "border-primary/20 bg-primary/10 text-primary"
                    : project.categoryColor === "warning"
                      ? "border-chart-3/20 bg-chart-3/10 text-chart-3"
                      : "border-chart-2/20 bg-chart-2/10 text-chart-2"}
                >
                  {project.category}
                </Badge>
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50"
                >
                  <Icon class="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <Card.Title class="text-lg">{project.title}</Card.Title>
              <Card.Description class="line-clamp-2 text-sm leading-relaxed">
                {project.description}
              </Card.Description>
            </Card.Header>
            <Card.Footer class="mt-auto border-t border-border/40 pt-4">
              <div class="flex w-full items-center justify-between">
                <div
                  class="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Users class="h-4 w-4" />
                  <span>{project.contributors} contributors</span>
                </div>
                <a
                  href="/projects"
                  class="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  <Github class="h-4 w-4" />
                  <span>View</span>
                </a>
              </div>
            </Card.Footer>
          </Card.Root>
        {/each}
      </div>
    </div>
  </section>

  <!-- Scope of Work -->
  <section class="border-t border-border/40 bg-card/20 py-28 md:py-36">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto mb-20 max-w-3xl text-center">
        <h2
          class="mb-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          What We Work On
        </h2>
        <p class="text-lg text-muted-foreground md:text-xl">
          Key areas where we focus our efforts and experiments
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each scopeAreas as area}
          {@const Icon = area.icon}
          <div
            class="group flex items-center gap-5 rounded-xl border border-border/60 bg-background/50 p-6 transition-all hover:border-primary/40 hover:bg-card/50 hover:shadow-md"
          >
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20"
            >
              <Icon class="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 class="mb-1 text-lg font-semibold text-foreground">
                {area.title}
              </h3>
              <p class="text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-28 md:py-36">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-10 md:p-16 lg:p-20"
      >
        <!-- Background glow -->
        <div
          class="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[120px]"
        ></div>

        <div class="relative mx-auto max-w-3xl text-center">
          <div
            class="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10"
          >
            <Users class="h-10 w-10 text-primary" />
          </div>
          <h2
            class="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Join the Community
          </h2>
          <p
            class="mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Open to students of the AI and Data Science Master at FST Tanger and
            motivated contributors who share our values. Skill level is not a
            barrier —
            <span class="text-primary"
              >commitment, curiosity, and consistency</span
            > matter more.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <Button size="lg" class="gap-2">
              Get Started
              <ArrowRight class="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" class="gap-2">
              <Github class="h-4 w-4" />
              GitHub Organization
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-border/40 py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div class="flex items-center gap-2.5">
          <div
            class="flex h-8 w-8 items-center justify-center rounded-md bg-primary"
          >
            <span class="text-sm font-bold text-primary-foreground">IA</span>
          </div>
          <span class="font-semibold text-foreground">MASTER IASD</span>
        </div>
        <p class="text-sm text-muted-foreground">
          © {new Date().getFullYear()} IASD Community — FST Tanger. Built by students,
          for students.
        </p>
      </div>
    </div>
  </footer>
</div>
