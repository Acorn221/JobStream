import type { FC, ReactNode } from 'react';
import { GrSelect } from 'react-icons/gr';

type SelectionCardProps = {
	title: string;
	icon: ReactNode;
	onClick?: () => void;
	selected?: boolean;
  className?: string;
};

export const SelectionCard: FC<SelectionCardProps> = ({
  title, icon, onClick, selected, className,
}) => (
  <div
    className={`${className || ''} ${selected && 'outline outline-2 outline-white'} cursor-pointer bg-base-100 p-2 w-full hover:bg-gray-700`}
    onClick={() => onClick()}
  >
    <div className="flex flex-col flex-1">
      <div className="card-title text-xl text-center m-2 flex justify-center items-center flex-1">
        <div className="m-auto">
          {title}
        </div>
      </div>
      <div className="p-0 flex align-bottom flex-1">
        {icon}
      </div>
    </div>
  </div>
);
