"use client";
import SalaCine from "./components/SalaCine";
import SelectorSala from "./components/SelectorSala";
import ResumenCompra from "./components/ResumenCompra";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";

export default function Home() {
  return (
    <header className={styles.encabezado}><h1>Venta de Boletos - Cine</h1>
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
