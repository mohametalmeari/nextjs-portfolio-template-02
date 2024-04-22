import { loop } from "./utils";

export const categories = ["UI/UX Design", "Development", "Graphic Design"];

export const projectsData = loop(7, (_, index) => ({
  id: index,
  title: "Project example",
  link: "/",
  images: ["/about-image.jpg"],
  type: "Website",
  categories: [categories[Math.floor(Math.random() * categories.length)]],
  date: "2021-10-10",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum quibusdam cupiditate quis iusto expedita, nihil consequuntur nobis sed accusamus quia explicabo deserunt deleniti necessitatibus quas omnis nesciunt rem illo magni ea ullam doloremque. Natus a sapiente et ducimus veritatis, at cupiditate possimus expedita explicabo unde quo officiis ex, consectetur repellendus, quod labore blanditiis corporis voluptatibus facilis est aliquid perferendis Numquam atque fugit, repellat nam quas voluptatum ex dolorem voluptatem.",
  features: [
    {
      title: "Responsive Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum quibusdam cupiditate quis iusto expedita, nihil consequuntur nobis sed accusamus quia explicabo deserunt deleniti necessitatibus quas omnis nesciunt rem illo magni ea ullam",
    },
  ],
}));
