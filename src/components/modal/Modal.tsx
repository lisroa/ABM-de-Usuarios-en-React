import React, { ReactNode } from "react";

interface ModalProps {
	isVisible: boolean;
	onClose: () => void;
	header?: ReactNode;
	children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
	isVisible,
	onClose,
	header,
	children,
}) => {
	if (!isVisible) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div
				className="bg-white rounded-md shadow-lg 
                    max-w-[1100px] lg:h-[541px]
                      sm:w-[65%] md:w-[80%] lg:w-[1100px] 
                      sm:h-[541px] md:h-[441px] transition-all duration-300"
			>
				{header && <div className="text-xl font-semibold mb-4">{header}</div>}

				<div className="mb-4">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
