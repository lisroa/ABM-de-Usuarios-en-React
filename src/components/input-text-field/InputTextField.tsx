import { InputText } from "primereact/inputtext";

interface InputIconFieldProps {
	inputClassName?: string;
	placeholder?: string;
	defaultValue?: string;
}

export const InputTextField = ({
	inputClassName,
	placeholder,
	defaultValue,
}: InputIconFieldProps) => {
	return (
		<InputText
			className={"flex items-center w-full h-[44px] border-2 rounded-md border-solid border-gray-300".concat(
				" ",
				inputClassName || ""
			)}
			defaultValue={defaultValue}
			placeholder={placeholder}
		>
			<i className="pi pi-search text-gray-500 px-2" />
			<InputText className="flex-1 w-full border-none focus:ring-0" />
		</InputText>
	);
};

export default InputTextField;
