"use client";
import { useSelector } from "react-redux";
import Asiento from "./Asiento";

export default function SalaCine() {
  const { salaActual, salas } = useSelector((state) => state.cine);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {salas[salaActual].map((ocupado, index) => (
        <Asiento key={index} index={index} ocupado={ocupado} />
      ))}
    </div>
  );
}
