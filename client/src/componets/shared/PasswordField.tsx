import { TogglePassword } from "./TogglePassword";

export type InputFieldProps = {
    value: string;
    showPassword: boolean;
    name:string;
    label: string;
    placeholder: string;
    minLength?: number;
    required?: boolean;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const PasswordField = ({name ,value, label, handleChange, placeholder, minLength = 1, showPassword, setShowPassword, required = true }: InputFieldProps) => {
    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <div>
                <input type={showPassword ? 'text' : 'password'} name={name} id={name}value={value} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required={required} minLength={minLength} />
                <TogglePassword showPassword={showPassword} setShowPassword={setShowPassword} />
            </div>
        </div>
    )
}


