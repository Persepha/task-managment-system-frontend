import { ArrowRight, ArrowDown } from "lucide-react";

import { ArrowUp, CheckCircle, Circle, Timer } from "lucide-react";

export const statuses = [
  {
    value: "Pending",
    label: "Pending",
    icon: Circle,
  },
  {
    value: "In process",
    label: "In process",
    icon: Timer,
  },
  {
    value: "Done",
    label: "Done",
    icon: CheckCircle,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "Low",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "Medium",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "High",
    icon: ArrowUp,
  },
];
