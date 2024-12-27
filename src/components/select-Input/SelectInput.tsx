import { CascadeSelect } from "primereact/cascadeselect";

interface SelectInputProps {
	inputClassName?: string;
	placeholder?: string;
	icon?: string;
	onClick?: () => void;
}
const SelectInput: React.FC<SelectInputProps> = ({
	placeholder,
	inputClassName,
}) => {
	return (
		<CascadeSelect
			className={"w-full h-full border-2 rounded-md border-solid border-gray-300 p-2".concat(
				" ",
				inputClassName || ""
			)}
			placeholder={placeholder}
		/>
	);
};

export default SelectInput;
