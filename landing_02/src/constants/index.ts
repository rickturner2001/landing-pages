import {
  StarIcon,
  ChatBubbleLeftRightIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";

export const navbar = {
  brand: "Uww",
  links: [
    ["Home", "/home"],
    ["Employers", "/employers"],
    ["Consultants", "/consultants"],
  ],
};

export const heroSection = {
  title: `Get critical\nwork done faster.`,
  subTitle:
    "Hire experienced pros with confidence using the smartest remote talent platform",
  button: "Hire a Pro",
};

export const features = [
  {
    icon: StarIcon,
    title: "Find a pro in a trusted network",
    description:
      "Get unmatched quality from proven indipendent professionals and specialized agencies.",
    isFeatured: false,
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Get in contact instantly",
    description:
      "Connect with any potential employee with a few clicks and discuss your project right away.",
    isFeatured: false,
  },
  {
    icon: ExclamationTriangleIcon,
    title: "Approve reports every week",
    description:
      "Receive reports with the logged hours spent on the project from your hire once per week.",
    isFeatured: true,
  },
];
