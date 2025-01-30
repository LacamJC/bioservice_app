import styles from '../../assets/scss/objects/Card.module.css'

const Card = ({titulo, texto, items}) =>{
    return(<>
        <div className={`${styles.card}`}>
            <h3>{titulo}</h3>
            <p>
                {texto}
            </p>

            <ul>
                {items.map(item=>(<li>{item}</li>))}
            </ul>

            <a href="#contato" className={`${styles.button} mx-auto`}>Entre em contato</a>
        </div>
    </>)
}

export default Card