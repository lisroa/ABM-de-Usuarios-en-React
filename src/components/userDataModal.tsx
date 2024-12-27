import React from "react";
import { Button } from "primereact/button";
import { Settings, Minus } from "lucide-react";
import Modal from "@/components/modal/Modal";
import InputIconField from "@/components/Input-Icon-Field/InputIconField";
import SelectInput from "@/components/select-Input/SelectInput";

interface UserDataModalProps {
	isModalVisible: boolean;
	closeModal: () => void;
}

const UserDataModal: React.FC<UserDataModalProps> = ({
	isModalVisible,
	closeModal,
}) => {
	return (
		<Modal
			isVisible={isModalVisible}
			onClose={closeModal}
			header={
				<div className="bg-[#0763E7] text-white rounded-md h-[40px] flex justify-between items-center px-4">
					<p className="text-left">Usuario</p>
					<div className="flex space-x-2">
						<Settings className="text-white" />
						<button className="text-white" onClick={closeModal}>
							<Minus />
						</button>
					</div>
				</div>
			}
		>
			<div className="pr-6 pl-6">
				<p className="text-lg font-semibold mb-2">ID:</p>
				<InputIconField inputClassName="mb-4" />
				<p className="text-lg font-semibold mb-2">Estado:</p>
				<SelectInput inputClassName="mb-4" />
				<p className="text-lg font-semibold mb-2">Sector:</p>
				<SelectInput inputClassName="mb-4" />
			</div>

			<div className="flex justify-center gap-4 mt-4">
				<Button
					label="Confirmar"
					icon="pi pi-check"
					iconPos="left"
					className="bg-[#2563EB] w-[118px] h-[40px] text-white rounded-md sm:w-[118px] sm:h-[40px]"
				/>
				<Button
					label="Cancelar"
					icon="pi pi-times"
					iconPos="left"
					className="border-[#3B82F6] border-[1px] w-[118px] h-[40px] text-[#2563EB] rounded-md sm:w-[118px] sm:h-[40px]"
					onClick={closeModal}
				/>
			</div>
		</Modal>
	);
};

export default UserDataModal;
