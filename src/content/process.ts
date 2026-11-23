export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map your business, users, systems and constraints — and agree on what success actually means before anything is built.",
    outputs: ["Stakeholder interviews", "System & data audit", "Success metrics"],
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "We turn findings into a prioritised roadmap: architecture, scope, sequencing and the smallest release that proves value.",
    outputs: ["Solution architecture", "Phased roadmap", "Fixed scope & estimate"],
  },
  {
    step: "03",
    title: "Build",
    description:
      "Short, demo-driven cycles. You see working software every sprint, not a status report.",
    outputs: ["Design & engineering sprints", "Weekly demos", "Automated testing"],
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Controlled rollout with monitoring, documentation and training, so the launch day is uneventful in the best way.",
    outputs: ["Staged release", "Monitoring & alerts", "Handover & training"],
  },
  {
    step: "05",
    title: "Optimize",
    description:
      "We measure real usage, remove friction and compound the gains — performance, automation coverage and growth.",
    outputs: ["Analytics reviews", "Iteration backlog", "Ongoing support"],
  },
] as const;
