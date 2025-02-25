"use client";
import { useSelector } from "react-redux";

export default function ResumenCompra() {
  const { salaActual, salas } = useSelector((state) => state.cine);
  const asientosSeleccionados = salas[salaActual].filter((ocupado) => ocupado).length;
  const precioPorBoleto = 5;
  const total = asientosSeleccionados * precioPorBoleto;

  return (
    <div className="mt-3">
      <h4>Resumen de Compra</h4>
      <p>Asientos seleccionados: {asientosSeleccionados}</p>
      <p>Total a pagar: ${total.toFixed(2)}</p>
      <button className="btn btn-primary" disabled={asientosSeleccionados === 0}>
        Confirmar Compra
      </button>
    </div>
  );
}
