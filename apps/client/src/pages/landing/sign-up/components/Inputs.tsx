type PropsInputs = {
    classNameContainer: string,
    classNameLabel: string
    valueLabel: string,
    inputType: string,
    nameInput: string
    
}

export const Input = ({classNameContainer,classNameLabel, valueLabel, inputType, nameInput}:PropsInputs) =>{
    return(
        <div className={classNameContainer}>
            <div className="w-full h-full">
                <label className={classNameLabel}>
                    {valueLabel}
                    <input type={inputType} className="w-full input input-bordered input-primary  h-14" name={nameInput} />
                </label>
            </div>
        </div>
    )
}