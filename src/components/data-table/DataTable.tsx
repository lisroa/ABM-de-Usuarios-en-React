"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import UserDataModal from "@/components/userDataModal";

interface UserData {
	id: number;
	usuario: string;
	estado: string;
	sector: string;
}

interface DataTableProps {
	data: UserData[];
}

const DataTableComponent: React.FC<DataTableProps> = ({ data }) => {
	// Estado para controlar el modal
	const [isModalVisible, setIsModalVisible] = useState(false);

	// Funciones para abrir y cerrar el modal
	const openModal = () => setIsModalVisible(true);
	const closeModal = () => setIsModalVisible(false);

	// Template para la columna de "Usuario"
	const usuarioTemplate = (rowData: UserData) => {
		return (
			<a
				href="#"
				className="text-blue-600 underline hover:text-blue-800"
				onClick={(e) => {
					e.preventDefault();
					openModal();
				}}
			>
				{rowData.usuario}
			</a>
		);
	};

	const commonHeaderStyle: React.CSSProperties = {
		textAlign: "center",
		verticalAlign: "middle",
		backgroundColor: "#F9FAFB",
		fontWeight: "bold",
	};

	return (
		<div className="p-4 bg-white rounded-md shadow-md">
			{/* Modal */}
			<UserDataModal isModalVisible={isModalVisible} closeModal={closeModal} />

			{/* Tabla */}
			<DataTable
				value={data}
				paginator
				rows={5}
				className="w-full"
				sortMode="single"
				tableStyle={{
					tableLayout: "fixed",
					minWidth: "50rem",
					fontSize: "1rem",
				}}
				paginatorTemplate=" PrevPageLink  CurrentPageReport NextPageLink "
			>
				<Column
					field="id"
					header="ID"
					sortable
					headerStyle={commonHeaderStyle}
					className="border-t h-[60px]"
				/>
				<Column
					field="usuario"
					header="Usuario"
					body={usuarioTemplate}
					sortable
					headerStyle={commonHeaderStyle}
					className="border-t h-[60px]"
				/>
				<Column
					field="estado"
					header="Estado"
					sortable
					headerStyle={commonHeaderStyle}
					className="border-t h-[60px]"
				/>
				<Column
					field="sector"
					header="Sector"
					sortable
					headerStyle={commonHeaderStyle}
					className="border-t h-[60px]"
				/>
			</DataTable>
		</div>
	);
};

export default DataTableComponent;
