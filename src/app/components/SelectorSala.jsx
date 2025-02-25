"use client";
import { useDispatch, useSelector } from "react-redux";
import { cambiarSala } from "../../store/cineSlice";

export default function SelectorSala() {
  const dispatch = useDispatch();
  const salaActual = useSelector((state) => state.cine.salaActual);

  return (
    <div className="mb-3">
      <h3>Sala actual: {salaActual}</h3>
      <button className="btn btn-outline-primary m-2" onClick={() => dispatch(cambiarSala("Sala 1"))}>
        Sala 1
      </button>
      <button className="btn btn-outline-primary m-2" onClick={() => dispatch(cambiarSala("Sala 2"))}>
        Sala 2
      </button>
    </div>
  );
}
