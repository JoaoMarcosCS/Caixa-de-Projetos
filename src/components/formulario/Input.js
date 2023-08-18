/*criando esse componente, nós poderemos ter qualquer tipo de input já personalizado */

import styles from './Input.module.css'

function Input({label, type, placeholder, name, value, handleOnChange/*para podermos egar o valor que o user digitar*/}){

    return(
        <div className={styles.input_div}>
            <label htmlFor={name}>{label}</label>
            <input required
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}/*evento que vai fazer nós pegarmos o input*/
                id={name}
            ></input>
        </div>
    )
}

export default Input