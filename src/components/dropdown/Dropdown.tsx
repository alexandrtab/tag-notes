import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface DropdownItemProps {
	icon?: string;
	options: Array<Option>;
}

export const Dropdown: React.FC<DropdownItemProps> = ({ options }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleEditTodo = (func: { (): void; (): void }) => {
		func();
		setIsOpen(false);
	};

	return (
		<div className="dropdown">
			<div className="dropdown__title" onClick={toggleDropdown}>
				<BsThreeDotsVertical />
			</div>
			{isOpen && (
				<div className="dropdown__list__container">
					{options.map((option: Option, index: number) => {
						return (
							<button
								key={index}
								onClick={
									option.value === "Edit"
										? () => handleEditTodo(option.onClick)
										: () => option.onClick()
								}
								className={`${option.color} dropdown__list__btn`}
							>
								{option.value}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};
