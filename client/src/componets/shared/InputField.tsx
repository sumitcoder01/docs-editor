export type InputFieldProps = {
    value: string;
    name: string;
    type: string;
    label: string;
    placeholder:string;
    minLength?:number;
    required?:boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputField = ({ value, name, type, label, handleChange, placeholder,minLength=1,required=true }: InputFieldProps) => {
    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input type={type} name={name} id={name} value={value} onChange={handleChange} placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={required} minLength={minLength} />
        </div>
    )
}
