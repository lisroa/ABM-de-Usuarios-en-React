"use client";
import { useEffect, useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import NavBar from "@/components/navBar/NavBar";
import SidebarMenu from "@/components/side-Bar/SideBarMenu";
import PageHeader from "@/components/PageHeader";
import FilterRow from "@/components/FilterRow";
import DataTableComponent from "@/components/data-table/DataTable";
import UserDataModal from "@/components/userDataModal";
import { fetchUsers } from "@/app/services/usersList";
import logo from "../../public/assets/navBar-logo/logo.jpeg";
import { Settings } from "lucide-react";
import { Box } from "lucide-react";
import "primeicons/primeicons.css";

interface UserData {
	id: number;
	usuario: string;
	estado: string;
	sector: string;
}

export default function Home() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
	const [users, setUsers] = useState<UserData[]>([]);

	const openModal = (userData?: UserData) => {
		setSelectedUser(userData || null);
		setIsModalVisible(true);
	};

	const closeModal = () => {
		setSelectedUser(null);
		setIsModalVisible(false);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data: users } = await fetchUsers(2000, 15, 2);
				setUsers(users);
			} catch (error) {
				console.error("Error al obtener los datos:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<PrimeReactProvider>
			<div className="flex flex-col h-screen">
				<NavBar
					leftImage={logo}
					rightIcon={<Settings className="text-white" />}
				/>

				<div className="flex flex-1">
					<SidebarMenu
						icons={[<Box />, <Box />, <Box />, <Box />, <Box />, <Box />]}
					/>

					<div className="flex-1 flex flex-col">
						<PageHeader
							title="Usuarios"
							buttonLabel="Nuevo Usuario"
							buttonIcon="pi pi-plus"
						/>

						<div className="flex flex-col w-full">
							<FilterRow />
						</div>
						<div className="flex flex-col w-full">
							<DataTableComponent data={users} onOpenModal={openModal} />
						</div>
					</div>
				</div>

				<UserDataModal
					isModalVisible={isModalVisible}
					closeModal={closeModal}
					selectedUser={selectedUser}
				/>
			</div>
		</PrimeReactProvider>
	);
}
