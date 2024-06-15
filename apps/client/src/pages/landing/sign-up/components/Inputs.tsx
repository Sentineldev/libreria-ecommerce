type PropsInputs = {
    classNameContainer: string,
    classNameLabel: string
    valueLabel: string,
    inputType: string,
    
}

export const Input = ({classNameContainer,classNameLabel, valueLabel, inputType}:PropsInputs) =>{
    return(
        <div className={classNameContainer}>
            <div className="w-full h-full">
                <label className={classNameLabel}>
                    {valueLabel}
                    <input type={inputType} className="w-full input input-bordered input-primary h-full" />
                </label>
            </div>
        </div>
    )
}