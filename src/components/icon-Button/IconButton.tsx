interface IconButtonProps {
	icon: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
	icon,
	onClick,
	className,
}) => {
	return (
		<div
			className={`text-white text-2xl cursor-pointer hover:text-gray-300 ${className}`}
			onClick={onClick}
		>
			{icon}
		</div>
	);
};

export default IconButton;
