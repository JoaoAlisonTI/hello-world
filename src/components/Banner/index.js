import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';

export function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Hello, World!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas 🖖🏽👽! Eu sou JoaoAlisonTI, Desenvolvedor Web. Aqui irei compartilhar ideias e vários conhecimentos, espero que aprenda algo novo ;)
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src="https://github.com/JoaoAlisonTI.png"
                    alt="Foto de perfil do JoaoAlisonTI"
                />
            </div>
        </div>
    )
}