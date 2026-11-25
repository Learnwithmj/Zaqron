import {
  Boxes,
  Bot,
  Briefcase,
  Building2,
  Code2,
  Compass,
  Cpu,
  Database,
  Gauge,
  GraduationCap,
  Handshake,
  HeartPulse,
  Infinity as InfinityIcon,
  Layers,
  LineChart,
  Magnet,
  MessageCircle,
  Network,
  PenTool,
  Plug,
  RefreshCw,
  Rocket,
  Search,
  Shield,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types/content";

const map: Record<IconName, LucideIcon> = {
  layers: Layers,
  code: Code2,
  smartphone: Smartphone,
  cpu: Cpu,
  "pen-tool": PenTool,
  sparkles: Sparkles,
  bot: Bot,
  workflow: Workflow,
  "message-circle": MessageCircle,
  "trending-up": TrendingUp,
  target: Target,
  search: Search,
  magnet: Magnet,
  database: Database,
  users: Users,
  boxes: Boxes,
  rocket: Rocket,
  building: Building2,
  "shopping-bag": ShoppingBag,
  "heart-pulse": HeartPulse,
  "graduation-cap": GraduationCap,
  briefcase: Briefcase,
  handshake: Handshake,
  network: Network,
  compass: Compass,
  shield: Shield,
  gauge: Gauge,
  zap: Zap,
  refresh: RefreshCw,
  "line-chart": LineChart,
  plug: Plug,
  infinity: InfinityIcon,
};

export function Icon({ name, className, strokeWidth = 1.6 }: { name: IconName; className?: string; strokeWidth?: number }) {
  const C = map[name];
  return <C className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}

/** Icon inside a bordered tile — used on cards */
export function IconTile({ name, className }: { name: IconName; className?: string }) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-elevated/60 text-accent-soft ${className ?? ""}`}
    >
      <Icon name={name} className="h-5 w-5" />
    </span>
  );
}
