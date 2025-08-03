import { message, Modal } from "antd";
import React from "react";
import moment from "moment";
import Divider from "./Divider";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function MessagesComponent({
  messages,
  reloadMessages,
  showMessages,
  setShowMessages,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   const deleteNotification = async (id) => {
  //     try {
  //       dispatch(setLoader(true));
  //       const response = await DeleteNotification(id);
  //       dispatch(setLoader(false));
  //       if (response.success) {
  //         message.success(response.message);
  //         reloadNotifications();
  //       } else {
  //         throw new Error(response.message);
  //       }
  //     } catch (error) {
  //       dispatch(setLoader(false));
  //       message.error(error.message);
  //     }
  //   };

  return (
    <Modal
      title="New Messages"
      open={showMessages}
      onCancel={() => setShowMessages(false)}
      footer={null}
      centered
      className=""
    >
      <div className="flex flex-col gap-2">
        {messages.map((message) => (
          <div
            className="flex flex-col border border-solid border-gray-300 rounded p-2 cursor-pointer"
            key={message._id}
          >
            <div className="flex items-center gap-4 justify-between">
              <div
                onClick={() => {
                  navigate(message.onClick);
                  setShowMessages(false);
                }}
                className="flex-1"
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-lg text-gray-700">
                    <span className="italic text-sm">From: </span>
                    {message.fullname}
                  </h1>
                  <Link to={message.email}>{message.email}</Link>
                </div>
                <Divider />
                <p className="text-sm text-gray-600">{message.message}</p>
                <p className="text-xs text-gray-400 mt-2">
                  <span>{moment(message.createdAt).fromNow()}</span>
                </p>
              </div>
              {/* <MdDeleteForever
                onClick={() => deleteNotification(notification._id)}
                className="w-6 h-6 cursor-pointer text-red-600"
              /> */}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
