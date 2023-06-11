import React from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const Feedback = () => {
  const [feedbackClass] = useLoaderData();
  console.log("in feedback page", feedbackClass);

  const [axiosSecure] = useAxiosSecure();
    const {_id} = feedbackClass || {};
    console.log(_id)
  const handleFeedback = (event) =>{
    event.preventDefault();
    const form = event.target;
    const feedbackData = form.feedback.value ;

    console.log(feedbackClass)
    const newData = {
        feedBack : feedbackData
    }
    axiosSecure.post(`/updateFeedback/${_id}`, newData)
    .then(data=>console.log(data))
    // fetch(`http://localhost:5000/updateFeedback/${_id}`,{
    //     method :'POST',
    //     headers: { "content-Type": "application/json" },
    //     body: JSON.stringify(feedback)
    // })
    // .then(res=>res.json())
    // .then(data=>console.log(data))

  }
  return (
    <div className="w-full">
      <form onSubmit={handleFeedback} className="max-w-xl mx-auto mt-20">
        <p className="text-lg py-3 ">Please give me your feedback for this instructor</p>
        <textarea
          placeholder="Feedback"
          className="textarea textarea-bordered textarea-lg w-full  "
          name='feedback'
        ></textarea>
        <input type="submit" value='Post Your Feedback' className="px-4 py-2 bg-purple-500 cursor-pointer text-white rounded font-semibold mt-3"/>
      </form>
    </div>
  );
};

export default Feedback;
