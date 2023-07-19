import { Post } from "./Post";
import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <aside> SIDE BAR </aside>

        <main>
          <Post
            author="Ingrid"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Post
            author="Maria"
            content="Vivamus fermentum vitae ex eu consequat. Aenean tempus ex non augue feugiat, non vestibulum magna fermentum."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
