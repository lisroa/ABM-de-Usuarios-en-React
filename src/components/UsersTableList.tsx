"use client";
import React, { useState } from "react";
import DataTableComponent from "./data-table/DataTable";
import UserDataModal from "./userDataModal";

interface UserData {
	id: number;
	usuario: string;
	estado: string;
	sector: string;
}

interface UsersTableListProps {
	data: UserData[];
	total: number;
}

const UsersTableList: React.FC<UsersTableListProps> = ({ data }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleUserClick = () => {
		setIsModalVisible(true);
	};

	const closeModal = () => {
		setIsModalVisible(false);
	};

	return (
		<div>
			<DataTableComponent data={data} onUserClick={handleUserClick} />{" "}
			{isModalVisible && (
				<UserDataModal
					isModalVisible={isModalVisible}
					closeModal={closeModal}
				/>
			)}
		</div>
	);
};

export default UsersTableList;
