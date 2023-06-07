import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Vitor Natario"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor enim quia eligendi id accusantium possimus nesciunt consectetur deserunt vel. At totam et aperiam iste rerum, inventore excepturi facere obcaecati."
          />
          <Post
            author="Vitor Natario"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor enim quia eligendi id accusantium possimus nesciunt consectetur deserunt vel. At totam et aperiam iste rerum, inventore excepturi facere obcaecati."
          />
        </main>
      </div>
    </div>
  );
}
