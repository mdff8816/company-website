import React from "react";

const Contact = () => {
  return (
        <div className="m-auto p-4 py-16 md:pl-20 border-2 border-gray-200 bg-green-50 mb-5" >
          <h1 className="text-center text-3xl font-bold text-black">
            <span className="text-green-500"> Contact</span> Us
          </h1>
          <form action="" method="POST" encType="multipart/form-data">
            <div className="grid w-full gap-4 py-2 md:grid-cols-2">
              <div className=" flex flex-col">
                <label className="py-2 text-sm uppercase">Name</label>
                <input
                  className="rounder-lg flex border-2 border-gray-300 p-3"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col">
                <label className="py-2 text-sm uppercase">Phone</label>
                <input
                  className="rounder-lg flex border-2 border-gray-300 p-3"
                  type="text"
                  name="phone"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="py-2 text-sm uppercase">Email</label>
                <input
                  className="rounder-lg flex border-2 border-gray-300 p-3"
                  type="text"
                  name="email"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="py-2 text-sm uppercase">Subject</label>
                <input
                  className="rounder-lg flex border-2 border-gray-300 p-3"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="mb-5 py-2 text-sm uppercase">Message</label>
                <textarea
                  className="rounded-lg border-2 border-gray-300 p-3"
                  name="message"
                />
              </div>
              <button
                className="mt-4 mb-5 rounded-lg border-2 border-gray-300 bg-green-500 p-3 text-gray-100 2xl:px-auto 2xl:py-auto sm:px-4 sm:py-2"
                style={{ fontSize: "14px" }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
  );
};

export default Contact;
