import styles from "./Select.module.css"

function Select({label, options/*os options virão no FormProjeto*/, handleOnChange, value, name}){
    return(
        <div className={styles.input_div}>
            <label htmlFor={name}>{label}</label>
            <select
            required
             name={name}
             id={name}
             onChange={handleOnChange}
             value={value || ''}
             >
            {options.map((option)=>(

            <option selected value={option.id_categoria} key={option.id_categoria}>{option.nome_categoria}</option>
            /*Precisa ter os mesmos nomes que estão no banco de dados */
            
            ))}
             </select>
        </div>
    )
}

export default Select