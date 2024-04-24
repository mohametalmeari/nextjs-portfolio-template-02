import { loop } from "./utils";

export const categories = ["UI/UX Design", "Development", "Graphic Design"];
let n = -1;
export const servicesData = [
  {
    title: categories[0],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus impedit ipsa sint architecto quisquam optio dolorem nihil aspernatur quis ut eos voluptatum debitis similique mollitia quibusdam repellat itaque placeat.",
    image: "/about-image.jpg",
    link: "/portfolio/projects/0",
  },
  {
    title: categories[1],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus impedit ipsa sint architecto quisquam optio dolorem nihil aspernatur quis ut eos voluptatum debitis similique mollitia quibusdam repellat itaque placeat.",
    image: "/about-image.jpg",
    link: "/portfolio/projects/1",
  },
  {
    title: categories[3],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus impedit ipsa sint architecto quisquam optio dolorem nihil aspernatur quis ut eos voluptatum debitis similique mollitia quibusdam repellat itaque placeat.",
    image: "/about-image.jpg",
    link: "/portfolio/projects/2",
  },
];

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

export const blogData = loop(7, (_, index) => ({
  id: index,
  title:
    "Blog Post 1, a very long title to test the overflow of the text and see if it works or not",
  date: "2021-10-10",
  image: "/about-image.jpg",
  link: `/blog/${index}`,
  content: loop(4, () =>
    loop(
      3,
      () =>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum quibusdam cupiditate quis iusto expedita, nihil consequuntur nobis sed accusamus quia explicabo deserunt deleniti necessitatibus quas omnis nesciunt rem illo magni ea ullam"
    ).join(" ")
  ),
}));
