import { Button } from "primereact/button";

interface PrimaryButtonProps {
	label?: string;
	icon?: string;
	onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
	label,
	icon,
	onClick,
}) => {
	return (
		<Button
			label={label}
			icon={icon}
			className="bg-[#3B82F6] w-[158px] h-[40px] text-white rounded-md flex items-center gap-1 font-semibold"
			onClick={onClick}
		/>
	);
};

export default PrimaryButton;
