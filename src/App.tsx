import { useState } from 'react';
import styles from './App.module.css';
import icon from './assets/imc.png';
import { levels, calcImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem/index';
import leftArrow from './assets/leftArrow.png';


const App = () => {
  const [heigthField, setHeigthField] = useState<number>(0);
  const [weigthField, setWeigthField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalcButton = () => {
    if (heigthField && weigthField) {
      setToShow(calcImc(heigthField, weigthField));
    } else {
      alert("Preencha todos os campos!!!");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeigthField(0);
    setWeigthField(0);
  };

  return (
    <div className={styles.main} data-theme="light">
      <header>
        <div className={styles.headerContainer}>
          <img src={icon} alt="logo guilherme" width={50} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>O IMC, sigla para Índice de Massa Corporal, é um parâmetro utilizado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder="Sua altura. (EX: 1.5) em métros."
            value={heigthField > 0 ? heigthField : ''}
            onChange={(e) => setHeigthField(parseFloat(e.target.value))}
            disabled={!!toShow}
          />

          <input
            type="number"
            placeholder="Seu peso. (EX: 75.5) em kg."
            value={weigthField > 0 ? weigthField : ''}
            onChange={(e) => setWeigthField(parseFloat(e.target.value))}
            disabled={!!toShow}
          />

          <button onClick={handleCalcButton} disabled={!!toShow}>Calcular</button>
        </div>

        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrow} alt="" width={50} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
