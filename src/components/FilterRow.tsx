import { Button } from "primereact/button";
import PrimaryButton from "./buttons/PrimaryButton";
import SelectInput from "./select-Input/SelectInput";
import InputIconField from "./Input-Icon-Field/InputIconField";

const FilterRow = () => {
	return (
		<div className="flex flex-row items-center gap-4 p-4 bg-white overflow-x-auto">
			<div className="flex flex-column w-full">
				<InputIconField />
			</div>

			<div className="flex flex-column w-full">
				<SelectInput placeholder="Filtrar por Estado" />
			</div>

			<div className="flex flex-column w-full">
				<SelectInput placeholder="Filtrar por Sector" />
			</div>

			<div className="flex flex-row gap-2">
				<Button
					icon="pi pi-filter"
					className="w-[42px] h-[34px] bg-[#64748B] text-white rounded-md"
				/>
				<Button
					icon="pi pi-sliders-h"
					className="w-[42px] h-[34px] bg-[#64748B] text-white rounded-md"
				/>
			</div>
		</div>
	);
};

export default FilterRow;
