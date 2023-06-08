import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/VNatario.png",
      name: "Vitor Natario",
      role: "Front-end",
    },
    content: [
      { type: "paragraph", content: "Meu primeiro projeto do Ignite." },
      { type: "paragraph", content: "O Ignite Feed 🔥" },
      { type: "link", content: "vitor.front/igniteFeed" },
    ],
    publishedAt: new Date("2023-06-08 19:13:32"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/SaraAnita1.png",
      name: "Sara Anita",
      role: "Front-end/Javeira",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "💜 sara.design/doctorcare" },
    ],
    publishedAt: new Date("2023-06-07 15:15:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
