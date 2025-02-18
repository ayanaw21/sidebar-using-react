import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ Children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<AppContext.Provider
			value={{
				isModalOpen,
				isSidebarOpen,
				openModal,
				openSidebar,
				closeModal,
				closeSidebar,
			}}
		>
			{Children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
