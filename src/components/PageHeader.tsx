"use client";

import { useState } from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import UserDataModal from "@/components/userDataModal";

interface PageHeaderProps {
	title: string;
	buttonLabel?: string;
	buttonIcon?: any;
}

const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	buttonLabel,
	buttonIcon,
}) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	const openModal = (userData = null) => {
		setSelectedUser(userData);
		setIsModalVisible(true);
	};

	const closeModal = () => {
		setSelectedUser(null);
		setIsModalVisible(false);
	};

	return (
		<div className="flex justify-between items-center p-4">
			<h1 className="text-2xl font-bold text-[#000000]">{title}</h1>
			{buttonLabel && (
				<PrimaryButton
					label={buttonLabel}
					icon={buttonIcon}
					onClick={() => openModal()}
				/>
			)}

			<UserDataModal
				isModalVisible={isModalVisible}
				closeModal={closeModal}
				selectedUser={selectedUser}
			/>
		</div>
	);
};

export default PageHeader;
