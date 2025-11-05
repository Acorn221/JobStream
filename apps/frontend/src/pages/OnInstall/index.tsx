import { CardLayout } from '../Layouts/CardLayout';
import imageOne from './pics/1.png';
import imageTwo from './pics/2.png';
import imageThree from './pics/3.png';

const OnInstall = () => (
  <CardLayout
    title="Welcome To JobStream"
    description="Here's how you can pin JobStream to your task bar, to make it easier to access"
    className="flex-col flex justify-center align-middle"
		>
    <div className="flex flex-row gap-4 max-w-4xl m-auto">
      <img src={imageOne} alt="Step 1" className="flex-1 w-1/3" />
      <img src={imageTwo} alt="Step 2" className="flex-1 w-1/3" />
      <img src={imageThree} alt="Step 3" className="flex-1 w-1/3" />
    </div>
    <div>
      <h2 className="text-2xl font-bold m-auto p-4 text-center">Pinning JobStream to your toolbar makes it far quicker to use!</h2>
    </div>
  </CardLayout>
);

export default OnInstall;
