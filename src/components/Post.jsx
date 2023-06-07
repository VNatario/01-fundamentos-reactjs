import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://github.com/VNatario.png"
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Vitor Natario</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2023-06-07 14:46:30" title="07 de Junho às 14:46">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Galera 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifólio. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
        </p>

        <p>
          ✏️ <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
