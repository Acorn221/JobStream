import { RawPrivacyPolicy } from './RawPrivacyPolicy';
import './style.css';

export const PrivacyPolicy = () => (
  <div className="flex justify-center">
    <div className="w-full md:w-2/3 m-auto p-4 bg-white">
      <RawPrivacyPolicy />
    </div>
  </div>
);
