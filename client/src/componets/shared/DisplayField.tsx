export type DisplayFieldProps = {
    value: string | null | undefined;
    name: string;
    IconElement: () => JSX.Element;
}

export const DisplayField = ({ value, name, IconElement }: DisplayFieldProps) => {
    return (
        <div className="flex gap-2 my-2 md:mx-2 text-base md:text-md items-center">
            <IconElement />
            <span className="font-bold">{name}</span>
            <span>{value ? value : "not specified"}</span>
        </div>
    )
}