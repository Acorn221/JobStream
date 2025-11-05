import { GrAdd } from 'react-icons/gr';
import { useGetCreditsQuery, useGetUserCreditsSumQuery } from 'graphql-generated-code';
import { DataGrid, GridSortModel } from '@mui/x-data-grid';
import { FaCoins } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { CardLayout } from '@/pages/Layouts/CardLayout';
import { AddCreditsModal } from './AddCreditsModal';

const Actions = () => (
  <div className="flex mr-2 mb-2">
    <div
      className="btn btn-secondary flex justify-center items-center"
      onClick={() => window.addCreditsModal.showModal()}
    >
      <div className="m-auto text-white font-bold">
        Add Credits
      </div>
      <GrAdd className="h-6 w-6 m-auto invert" />
    </div>
  </div>
);

export const Credits = () => {
  const { data: credits } = useGetCreditsQuery();

  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: 'createdAt',
      sort: 'desc',
    },
  ]);

  return (
    <CardLayout
      title="Credits"
      description="You view your spending and add new credits here to keep generating new content!"
      Actions={Actions}
      className="flex flex-col gap-4"
    >
      <Outlet />
      <AddCreditsModal />
      {
        credits?.user.__typename === 'QueryUserSuccess' && (
          <DataGrid
            className="bg-zinc-900 mr-8"
            rows={credits?.user.data.credits.map((credit) => ({
              id: credit.id,
              amount: credit.amount,
              note: credit.note,
              createdAt: credit.createdAt,
              cv: credit.generatedCv,
              coverLetter: credit.generatedCoverLetter,
            }))}
            disableRowSelectionOnClick
            columns={[
              {
                field: 'amount',
                headerName: 'Amount',
                width: 130,
                renderCell: (params) => (
                  <div className="grid grid-cols-2 gap-2 justify-center align-middle">
                    <div className="m-auto">{params.row.amount}</div>
                    <FaCoins className="h-6 w-6 m-auto" />
                  </div>
                ),
              },
              {
                field: 'createdAt',
                headerName: 'Created At',
                width: 150,
                renderCell: (params) => (
                  <div>
                    {new Date(params.row.createdAt).toLocaleDateString()}
                  </div>
                ),
              },
              {
                field: 'type',
                headerName: 'Type',
                width: 150,
                renderCell: (params) => (
                  <div>
                    {params.row.cv && 'CV '}
                    {params.row.coverLetter && 'Cover Letter '}
                  </div>
                ),
              },
              {
                field: 'note',
                headerName: 'Note',
                flex: 1,
              },
              {
                field: 'externalLink',
                headerName: 'Link',
                width: 80,
                // fiLink external link button to the generated google doc
                renderCell: (params) => {
                  let googleDocId;

                  if (params.row.cv) {
                    googleDocId = params.row.cv.googleDocId;
                  } else if (params.row.coverLetter) {
                    googleDocId = params.row.coverLetter.googleDocId;
                  } else {
                    return null;
                  }

                  return (
                    <Link
                      to={`https://docs.google.com/document/d/${googleDocId}/edit`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-center align-middle btn btn-info hover:btn-outline"
                    >
                      <FiExternalLink className="h-6 w-6 m-auto" />
                    </Link>
                  );
                },

              },
            ]}
            sortModel={sortModel}
            onSortModelChange={(model) => setSortModel(model)}
          />
        )
      }
    </CardLayout>
  );
};
