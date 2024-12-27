import IconButton from "../icon-Button/IconButton";

interface SidebarMenuProps {
	icons: React.ReactNode[];
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ icons }) => {
	return (
		<div className="h-full w-[65px] bg-[#2D3E50] flex flex-col items-center py-4">
			{icons.map((icon, index) => (
				<IconButton key={index} icon={icon} className="my-2" />
			))}
		</div>
	);
};

export default SidebarMenu;
