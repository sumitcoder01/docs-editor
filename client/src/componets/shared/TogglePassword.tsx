import { CloseEyeIcon, OpenEyeIcon } from "../icons/EyeIcons";

export type TogglePasswordProps = {
    showPassword: boolean;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}
export const TogglePassword = ({ showPassword, setShowPassword }: TogglePasswordProps) => {
    const togglePasswordVisibility = () => setShowPassword(!showPassword)
    return (
        <button type="button" className="flex items-center absolute right-2 inset-y-0" onClick={togglePasswordVisibility}>
            {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
        </button>
    )
}
