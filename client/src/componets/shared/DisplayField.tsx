export type DisplayFieldProps = {
    value: string | null | undefined;
    name: string;
}

export const DisplayField = ({ value, name }: DisplayFieldProps) => {
    return (
        <div className="flex gap-2 my-2 mx-2">
            <span className="font-bold">{name}</span>
            <span className="">{value ? value : "not specified"}</span>
        </div>
    )
}