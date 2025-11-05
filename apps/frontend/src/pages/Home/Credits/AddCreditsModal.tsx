/* eslint-disable react/no-array-index-key */
import { GetStripeBuyLinkDocument, useGetStripeBuyLinkQuery } from 'graphql-generated-code';
import { ToastStyle } from 'misc-glob';
import { FrontendProductsDev, FrontendProductsProd } from 'stripe-products';
import { toast } from 'react-toastify';
import { client } from '@/App';
import { NODE_ENV } from '@/utils/environment';

const FrontendProducts = NODE_ENV === 'production' ? FrontendProductsProd : FrontendProductsDev;

export const AddCreditsModal = () => {
  const goToCheckout = async (priceId: string) => {
    // stop using the hook and use the client directly

    const stripeBuyLink = await toast.promise(
      client.query({
        query: GetStripeBuyLinkDocument,
        variables: {
          priceId,
        },
      }),
      {
        pending: 'Loading...',
      },
      {
        ...ToastStyle,
      },
    );

    if (stripeBuyLink.error || !stripeBuyLink.data) {
      throw new Error(`Error getting Stripe buy link for priceId: ${priceId}, error: ${stripeBuyLink.error}`);
    }
    window.open(stripeBuyLink.data.GetStripeBuyLink);
  };

  return (
    <dialog className="modal" id="addCreditsModal">
      <form method="dialog" className="rounded-2xl absolute p-4 bg-neutral-800 text-white w-full m-10 md:w-2/3 md:m-0">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <div className="grid grid-rows-1 grid-cols-4 rounded-box gap-4 mt-6">
          {
					FrontendProducts.map((product, i) => (
  <div className="mt-auto btn h-full bg-neutral p-0 rounded-2xl" key={i} onClick={() => goToCheckout(product.default_price_data.priceId)}>
    <div className="w-full p-8 rounded-t-2xl bg-secondary text-2xl text-white">
      {product.name}
    </div>
    <div className="card-actions w-full flex justify-center align-middle mt-2">
      <div className="flex-1 m-x-auto text-center text-xl m-2">
        $
        {Math.ceil(product.default_price_data.unit_amount / 100)}
      </div>
    </div>
  </div>
					))
				}
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
