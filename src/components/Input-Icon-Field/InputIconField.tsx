import { IconField } from "primereact/iconfield";
import { InputText } from "primereact/inputtext";

interface InputIconFieldProps {
	inputClassName?: string;
	defaultValue?: string;
}

export const InputIconField = ({
	inputClassName,
	defaultValue,
}: InputIconFieldProps) => {
	return (
		<IconField
			className={"flex items-center w-full h-[44px] border-2 rounded-md border-solid border-gray-300".concat(
				" ",
				inputClassName || ""
			)}
		>
			<i className="pi pi-search text-gray-500 px-2" />
			<InputText
				placeholder="Buscar"
				className="flex-1 w-full border-none focus:ring-0"
				defaultValue={defaultValue}
			/>
		</IconField>
	);
};

export default InputIconField;
