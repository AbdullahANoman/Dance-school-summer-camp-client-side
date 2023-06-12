import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error.status);
  const message = error.error.message;
  return (
    <>
      <div className="h-[20vh] w-1/2 mx-auto mt-10">
        <img src="https://i.ibb.co/SfBn5gx/6342464.jpg" alt="" />
      </div>
      <div className=" flex justify-center">
        <div className="flex justify-center items-end h-[50vh]">
          <p className="text-5xl mt-3">ERR</p>
          <div className="w-10 h-10 border-8 border-dotted rounded-full animate-spin mt-5 border-blue-400"></div>
          <p className="text-5xl mt-3">R</p>
        </div>
        <div>
          <p className=" flex justify-center items-end h-[50vh] text-5xl pl-5 ">
            {error.status}
          </p>
        </div>
      </div>
      <div className="flex  justify-center mt-5 text-center">
        <p className="text-4xl font-semibold">{message}</p>
      </div>
      <div className="text-center">
        <Link to="/" className=" btn mt-5">
          Back to homepage
        </Link>
      </div>
    </>
  );
};
export default Error;
