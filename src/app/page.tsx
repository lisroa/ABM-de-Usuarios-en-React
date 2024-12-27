//"use client";
//import { useState } from "react";
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

export default async function Home() {
	const sector = 2000;
	const limit = 15;
	const page = 2;

	//const [isModalVisible, setIsModalVisible] = useState(false);

	/*const openModal = () => {
		setIsModalVisible(true);
	};

	
	const closeModal = () => {
		setIsModalVisible(false);
	};*/

	try {
		const { data: users } = await fetchUsers(sector, limit, page);

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
								//onButtonClick={() => (console.log("Nuevo Usuario"), openModal)}
							/>

							<div className="flex flex-col w-full">
								<FilterRow />
							</div>
							<div className="flex flex-col w-full">
								<DataTableComponent data={users} />
							</div>
						</div>
					</div>
				</div>

				{/**<UserDataModal
					isModalVisible={isModalVisible}
					closeModal={closeModal}
				/> */}
			</PrimeReactProvider>
		);
	} catch (error) {
		console.error("Error al obtener los datos:", error);
	}
}
