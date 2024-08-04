export type FormInputProps = {
    label: string;
    props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}
export default function FormInput({ label, props }: FormInputProps) {

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input {...props} className="input input-bordered w-full" />
        </label>
    );
}