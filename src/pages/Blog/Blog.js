import React from "react";

const Blog = () => {
  return (
    <div className="m-8">
      <p className="text-2xl">Authentication Vs Authorization?</p>
      <p>
        Authentication is basically the process of identifying the person. so
        what it does is matches the user id and password and if it matches it
        gives the access to the user.
      </p>
      <p>
        Authorization takes place after the authentication is successfully
        done.it gives the access to at what length the user can access the
        pages. for example, certain premium memberships.
      </p>

      <p className="text-2xl">
        Why are you using firebase?What other options do you have to implement
        authentication?
      </p>
      <p>
        Firebase is backed by google and is really known to people and also user
        friendly UI. Other options are auth0, mongoDB, okta etc.
      </p>
      <p className="text-2xl">
        What other services does firebase provide other than authentication?
      </p>
      <p>
        Hosting, Storage, cloud Storage, Cloud Functions, Cloud Firestore, Cloud
        Messaging, Predictions.
      </p>
    </div>
  );
};

export default Blog;
