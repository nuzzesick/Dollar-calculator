import React, { useState, useEffect } from 'react';
import { Header, Footer } from './components';
import './App.css';

const App = () => {
  const [userValue, setUserValue] = useState('');
  const [resultOficial, setResultOficial] = useState(null);
  const [resultBlue, setResultBlue] = useState(null);
  const [oficial, setOficial] = useState(null);
  const [blue, setBlue] = useState(null);
  useEffect(() => {
    const getDollarsValues = async () => {
      try {
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
          .then((result) => result.json())
          .then((values) => {
            setOficial(parseInt(values[0].casa.compra));
            setBlue(parseInt(values[1].casa.compra))
          })
      } catch (error) {
        console.error(error);
      }
    };
    getDollarsValues();
  });
  useEffect(() => {
    setResultOficial(userValue * oficial);
    setResultBlue(userValue * blue);
  }, [userValue, blue, oficial]);
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center my-36">
        <h1 className="text-3xl font-bold text-gray-700">
          Conversor de dólar a peso argentino en tiempo real
        </h1>
        <div className="flex flex-col mt-6">
          <div>
            <span className="inline-block text-lg font-medium text-green-700 w-44">
              Dólar oficial (venta):
            </span>
            <b className="text-green-700">
              {' '}
              ARS {resultOficial || oficial}
            </b>
          </div>
          <div>
            <span className="inline-block text-lg font-medium text-blue-700 w-44">
              Dólar blue (venta):
            </span>
            <b className="text-blue-700">
              {' '}
              ARS {resultBlue || blue}
            </b>
          </div>
        </div>
        <form className="flex flex-col my-10">
          <input
            type="text"
            className="rounded-md py-3 px-10 bg-gray-100 mb-4 text-gray-900 font-semibold focus:outline-none text-center"
            placeholder="Ingresá el valor en dólares"
            onChange={(e) => setUserValue(e.target.value)}
            value={userValue}
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default App;
