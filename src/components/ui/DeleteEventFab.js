import React from "react";
import { useDispatch } from "react-redux";
import {} from "react-redux";
import { evenetDelete } from "../../actions/events";

export const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(evenetDelete());

  return (
    <button onClick={handleDelete} className="btn btn-danger fab-danger">
      <i className="fas fa-trash"></i> <span>Delete event</span>
    </button>
  );
};
