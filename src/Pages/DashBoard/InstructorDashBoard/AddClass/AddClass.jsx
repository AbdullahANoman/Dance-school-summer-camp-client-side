import React, { useContext } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
const AddClass = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    // console.log(data);
    const { category, name, recipe, price } = data || {};
    const imageFile = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imgUrl = imgData.data.display_url;
        const newItem = {
          classesName,
          instructorName,
          status: "pending",
          price: parseFloat(price),
          image: imgUrl,
          email
        };
        console.log(newItem);
        axiosSecure.post("/classes", newItem).then((data) => {
          const alert = data?.data?.insertedId;
          if (alert) {
            reset();
          }
        });
        // fetch("http://localhost:5000/menu", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(newItem),
        // })
        //   .then((res) => res.json())
        //   .then((data) => console.log(data));
      });
    // reset();
  };
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="w-4/5 bg-gray-200 px-10 py-20 rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* register your input into the hook by invoking the "register" function */}

        <div className="flex w-full gap-2">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Class name*</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Class Name"
                className="input input-bordered w-full"
                {...register("classesName", { required: true })}
              />
            </label>

            {errors.classesName && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Instructor name*</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                placeholder="Instructor Name"
                className="input input-bordered w-full"
                {...register("instructorName", { required: true })}
              />
            </label>

            {errors.instructorName && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Email*</span>
            </label>
            <label className="input-group">
              <input
                {...register("email", { required: true })}
                type="text"
                defaultValue={user?.email}
                readOnly
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </label>
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Available Seats*</span>
            </label>
            <label className="input-group">
              <input
                {...register("availableSeats", { required: true })}
                type="number"
                placeholder="Available Seats"
                className="input input-bordered w-full"
              />
            </label>
            {errors.availableSeats && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        <div className="flex w-full gap-3">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <label className="input-group">
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
            {errors.price && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text font-semibold">Class Image * </span>
            </label>
            <label className="input-group">
              <input
                type="file"
                name="image"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                {...register("image", { required: true })}
              />
            </label>
            {errors.image && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <input
            className="btn btn-primary mt-5"
            type="submit"
            value="add Item"
          />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
