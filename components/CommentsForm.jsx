import { useEffect, useRef, useState } from "react";
import { submitComment } from "../services";

function CommentsForm({ slug }) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const storeDataRef = useRef();
  function handlePostSubmission() {
    setError(false);
    const {value:comment}=commentRef.current;
    const {value:name}=nameRef.current;
    const {value:email}=emailRef.current;
    const {value:storeData}=storeDataRef.current;
    if (
      !comment ||
      !name ||
      !email
    ) {
      setError(true);
      return;
    }
    const commentObj = {
      name,email,comment,slug
    }
    if(storeData){
     window.localStorage.setItem('name',name);
     window.localStorage.setItem('email',email);
    }
    else {
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('email'); 
    }
    submitComment(commentObj)
    .then(res=>{
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    })
  }
  useEffect(()=>{
    nameRef.current.value=window.localStorage.getItem('name');
    emailRef.current.value=window.localStorage.getItem('email');
  },[])
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          placeholder="Comment"
          name="comment"
          ref={commentRef}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          // value={formData.name}
          // onChange={onInputChange}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
          ref={nameRef}
        />
        <input
          type="email"
          // value={formData.email}
          // onChange={onInputChange}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
          ref={emailRef}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          // checked={formData.storeData}
          // onChange={onInputChange}
          type="checkbox"
          id="storeData"
          name="storeData"
          value="true"
          ref={storeDataRef}
        />
        <label className="text-gray-500 cursor-pointer" htmlFor="storeData">
          {" "}
          Save my name, email in this browser for the next time I comment.
        </label>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are mandatory</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
}

export default CommentsForm;
