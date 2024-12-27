import Image from "next/image";

interface NavBarProps {
	leftImage: any;
	rightIcon: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ leftImage, rightIcon }) => {
	return (
		<div className="w-full h-[45px] bg-[#0763E7] flex items-center justify-between px-4">
			<div className="flex-shrink-0">
				<Image src={leftImage} alt="Logo" width={44} height={44} />
			</div>

			<div className="flex-shrink-0">{rightIcon}</div>
		</div>
	);
};

export default NavBar;
