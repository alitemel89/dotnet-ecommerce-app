import { CheckCircleIcon } from "@heroicons/react/24/solid";


function Success() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="my-2 flex justify-center -mt-8">
        <CheckCircleIcon className="text-green-600 w-24 h-24" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Thank you for your order!
        </h2>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4">
          Your order has been placed and is being processed. We will send you an
          email with your order details shortly.
        </p>
      </div>
    </div>
  );
}

export default Success;
