import {
  PlusCircleIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

export const navigation = {
  brand: "Koom",
  links: [
    ["How it Works", "#how-it-works"],
    ["Pricing", "#pricing"],
    ["Support", "#support"],
    ["About Us", "#about-us"],
  ],
};

export const heroSection = {
  title: "Efficient & effective way to communicate.",
  subtitle:
    "With no app or installs required, and the same meeting link every time, Koom gives you the freedom to work from anywhere",

  formPlaceholder: "Your email address",
  fromBtn: "Get Started",
  formDisclaimer: "*We'll respect the inbox and never share your email",
};

export const featuresSection = [
  {
    icon: PlusCircleIcon,
    title: "Join in one click",
    description:
      "We're browsser-based, no-downloads, hop on a meeting with your team instantly",
  },
  {
    icon: UserGroupIcon,
    title: "50+ people in room",
    description:
      "Customize meeting rooms with your team, don't leave any of your groupmates behind",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Meetings on the go",
    description:
      "Never miss a meeting again. Record, review and access all meetings any time",
  },
];
