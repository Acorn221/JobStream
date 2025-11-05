import { FC, ReactNode } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Routes } from 'misc-glob';

type CardLayoutProps = {
	children: ReactNode;
  Actions?: FC;
  ActionsElement?: ReactNode;
	title: string | ReactNode;
	description?: string | ReactNode;
  className?: string;
};

export const CardLayout: FC<CardLayoutProps> = ({
  children, title, description, Actions, className, ActionsElement,
}) => (
  <div className="flex flex-col justify-center">
    <div className="m-auto w-full md:w-2/3">
      <div className="flex text-white">
        <Link className="m-4 shadow-2xl" to={Routes.Home}>
          <div className="btn btn-primary text-xl h-full">
            <IoArrowBackSharp className="w-6 h-6" />
          </div>
        </Link>
        <div className="card card-normal bg-base-200 m-4 flex flex-row justify-center align-middle flex-1 shadow-2xl">
          <div className="card-header m-auto">
            <div className="text-2xl font-bold px-2 text-center">{title}</div>
          </div>
          <div className="flex flex-col justify-center align-middle">
            {
              description && (
                <div className="card-body m-auto">
                  {description}
                </div>
              )
            }
            {Actions && (
              <div className="card-actions justify-end flex align-bottom h-full">
                <Actions />
              </div>
            )}
            {
              ActionsElement && (
                <div className="card-actions justify-end flex align-bottom h-full">
                  {ActionsElement}
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div className={`w-full flex justify-center align-middle m-4 ${className}`}>
        {children}
      </div>
    </div>
  </div>
);
