"use client";
import SalaCine from "./components/SalaCine";
import SelectorSala from "./components/SelectorSala";
import ResumenCompra from "./components/ResumenCompra";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";

export default function Home() {
  return (
    <header className={styles.encabezado}><h1>Venta de Boletos - Cine</h1>
       <h3 className={styles.letra}>Selecciona tus asientos</h3>
    <div className={styles.asientos}>  
        <div className={styles.disponibilidad}>
        <label>Ocupados:</label>
        <button className={styles.boton__negro}></button>
        </div>
        <div className={styles.disponibilidad}>
        <label>Disponibles:</label>
        <button className={styles.boton__verde }></button>
        </div>
          </div>
    <div className={styles.contenedor__principal}>
      <div className={styles.contenedor}>
      <SelectorSala />
      <SalaCine />
      <ResumenCompra />
      </div>
    </div>
    </header>
  );
}
