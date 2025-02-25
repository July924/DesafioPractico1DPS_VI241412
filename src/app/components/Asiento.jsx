"use client";
import { useDispatch } from "react-redux";
import { seleccionarAsiento } from "../../store/cineSlice";

export default function Asiento({ index, ocupado }) {
  const dispatch = useDispatch();

  return (
    <button
      className={`btn m-1 ${ocupado ? "btn-dark" : "btn-success"}`}
      style={{ width: "40px", height: "40px" }}
      onClick={() => dispatch(seleccionarAsiento(index))}
    >
      {index + 1}
    </button>
  );
}
