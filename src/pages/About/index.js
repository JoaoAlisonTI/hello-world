import styles from "./About.module.css";
import { PostModel } from 'components/PostModel'
import fotoCapa from 'assets/sobre_mim_capa.png'

export function About() {
  return (
    <PostModel 
      fotoCapa={fotoCapa}
      titulo="Sobre"
    >
      <h3 className={styles.subtitulo}>Olá, eu sou o Antônio!
      </h3>

      <img
        src="https://github.com/JoaoAlisonTI.png"
        alt="Foto de perfil do Github"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou instrutor de Front-end na Alura e estou feliz de te ver por aqui.
      </p>
    </PostModel>
  )
}