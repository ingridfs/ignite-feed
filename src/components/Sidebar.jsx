import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      {/*  Minha forma inicial
      <div className={styles.profilePicture}>
        <div className={styles.profilePictureBox}>
          <img
            src="https://github.com/ingridfs.png"
          />
        </div>
      </div> */}

      {/* Forma feita no curso */}

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/ingridfs.png" />
        <strong>Ingrid Fernandes</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
