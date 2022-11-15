import React from "react";
import { Link } from "react-router-dom";

// This is the NotFound component. It is displayed when the user navigates to a page that does not exist.
// It contains a message and a link to the home page.
const NotFound = () => {
  return (
    <div className="w-full h-full flex justify-center flex-col items-center">
      <div className="text-center">
        <b className="text-xl mb-5">Sorry, this page isn't available.</b>
        <p>
          The link you followed may be broken, or the page may have been
          removed.
          <Link to="/" className="text-blue-500">
            Back to Wits Social.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
