import { CascadeSelect } from "primereact/cascadeselect";

interface SelectInputProps {
	inputClassName?: string;
	placeholder?: string;
	icon?: string;
	onClick?: () => void;
	value?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
	placeholder,
	inputClassName,
	value,
}) => {
	return (
		<CascadeSelect
			className={"w-full h-full border-2 rounded-md border-solid border-gray-300 p-2".concat(
				" ",
				inputClassName || ""
			)}
			placeholder={placeholder}
			value={value}
		/>
	);
};

export default SelectInput;
