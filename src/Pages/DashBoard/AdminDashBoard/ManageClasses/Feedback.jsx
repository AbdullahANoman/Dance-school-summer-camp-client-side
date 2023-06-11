import React from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Feedback = () => {
  const [feedbackClass] = useLoaderData();
  console.log("in feedback page", feedbackClass);

  const [axiosSecure] = useAxiosSecure();
  const { _id } = feedbackClass || {};
  console.log(_id);
  const handleFeedback = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedbackData = form.feedback.value;

    console.log(feedbackClass);
    const newData = {
      feedBack: feedbackData,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You want post this Feed Back to your instructor ? ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Post it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .post(`/updateFeedback/${_id}`, newData)
          .then((data) => {
            if(data.data.modifiedCount>0){
                Swal.fire("Deleted!", "Your feedback has been posted to your instructor .", "success");
                form.feedback.value = ''
            }
          });
        
      }
    });
  };
  return (
    <div className="w-full">
      <form onSubmit={handleFeedback} className="max-w-xl mx-auto mt-20">
        <p className="text-lg py-3 ">
          Please give me your feedback for this instructor
        </p>
        <textarea
          placeholder="Feedback"
          className="textarea textarea-bordered textarea-lg w-full  "
          name="feedback"
        ></textarea>
        <input
          type="submit"
          value="Post Your Feedback"
          className="px-4 py-2 bg-purple-500 cursor-pointer text-white rounded font-semibold mt-3"
        />
      </form>
    </div>
  );
};

export default Feedback;
