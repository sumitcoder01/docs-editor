export type TogglePasswordProps = {
    showPassword: boolean;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}
export const TogglePassword = ({ showPassword, setShowPassword }:TogglePasswordProps) => {
    const togglePasswordVisibility = () => setShowPassword(!showPassword)
    return (
        <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={togglePasswordVisibility}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                {showPassword ? (
                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                ) : (
                    <path fillRule="evenodd" d="M4.293 5.293a1 1 0 011.414 1.414l-1.702 1.702A7.468 7.468 0 004 10c.063.95.26 1.86.566 2.72l-1.48 1.48A1 1 0 013 14v2a1 1 0 01-2 0v-1a11.478 11.478 0 013.724-8.436l-1.48-1.48a1 1 0 011.416-1.416l1.702 1.702A9.46 9.46 0 0110 4c.95 0 1.86.146 2.722.407L11.28 5.28A1 1 0 0110 5a1 1 0 01-1-1v-.001a1 1 0 01.293-.707zM10 6a3 3 0 00-3 3c0 .256.025.507.074.75l-1.54 1.54A9.447 9.447 0 014 10c-.95 0-1.86.146-2.722.407L.72 10.72l1.68-1.68A3 3 0 0010 6zM1.414 3.293a1 1 0 011.414 0l1.682 1.682A9.445 9.445 0 012 10v1a1 1 0 01-2 0v-.001a11.478 11.478 0 013.724-8.436L3.414 3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                )}
            </svg>
        </button>
    )
}
