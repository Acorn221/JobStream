import { FC } from 'react';

export type PurchaseStatusProps = {
  status: 'success' | 'failure';
};

export const PurchaseStatus: FC<PurchaseStatusProps> = ({ status }) => (
  <div className={`w-full ${status === 'success' ? 'bg-green-700' : 'bg-red-700'} text-2xl rounded-2xl p-4 max-h-16 mr-8`}>
    <div className="m-auto text-white font-bold">
      {
        status ? (
          <p>Your purchase was successful! 🎉</p>
        ) : (
          <p>Purchase Cancelled 😢</p>
        )
      }
    </div>
  </div>
);
