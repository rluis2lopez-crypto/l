import React, { useState } from 'react';

const inputsPorFigura = {
  cilindro: [
    { label: 'Radio', id: 'radio' },
    { label: 'Altura', id: 'altura' }
  ],
  cubo: [
    { label: 'Lado', id: 'lado' }
  ],
  prisma: [
    { label: 'Base', id: 'base' },
    { label: 'Altura', id: 'altura' },
    { label: 'Profundidad', id: 'profundidad' }
  ],
  cono: [
    { label: 'Radio', id: 'radio' },
    { label: 'Altura', id: 'altura' }
  ],
  esfera: [
    { label: 'Radio', id: 'radio' }
  ],
  piramide: [
    { label: 'Área de la base', id: 'base' },
    { label: 'Altura', id: 'altura' }
  ]
};

function calcularVolumen(figura, valores) {
  switch (figura) {
    case 'cilindro':
      return Math.PI * valores.radio ** 2 * valores.altura;
    case 'cubo':
      return valores.lado ** 3;
    case 'prisma':
      return valores.base * valores.altura * valores.profundidad;
    case 'cono':
      return (1 / 3) * Math.PI * valores.radio ** 2 * valores.altura;
    case 'esfera':
      return (4 / 3) * Math.PI * valores.radio ** 3;
    case 'piramide':
      return (1 / 3) * valores.base * valores.altura;
    default:
      return 0;
  }
}

export default function App() {
  const [figura, setFigura] = useState('');
  const [valores, setValores] = useState({});
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const manejarCambioFigura = (e) => {
    setFigura(e.target.value);
    setValores({});
    setResultado(null);
    setError(null);
  };

  const manejarCambioInput = (e) => {
    setValores(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const manejarCalcular = () => {
    setError(null);

    if (!figura) {
      setError('Por favor, selecciona una figura.');
      setResultado(null);
      return;
    }

    const campos = inputsPorFigura[figura];
    for (let campo of campos) {
      const val = parseFloat(valores[campo.id]);
      if (isNaN(val) || val <= 0) {
        setError('Por favor, ingresa valores válidos y positivos.');
        setResultado(null);
        return;
      }
    }

    const valoresNum = {};
    campos.forEach(campo => {
      valoresNum[campo.id] = parseFloat(valores[campo.id]);
    });

    const vol = calcularVolumen(figura, valoresNum);
    setResultado(vol.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Calculadora de Volúmenes</h1>

      <label>Selecciona la figura:</label>
      <select value={figura} onChange={manejarCambioFigura} className="select">
        <option value="">-- Selecciona --</option>
        <option value="cilindro">Cilindro</option>
        <option value="cubo">Cubo</option>
        <option value="prisma">Prisma Rectangular</option>
        <option value="cono">Cono</option>
        <option value="esfera">Esfera</option>
        <option value="piramide">Pirámide</option>
      </select>

      {figura && inputsPorFigura[figura].map(({ label, id }) => (
        <div key={id} className="input-group">
          <label>{label}:</label>
          <input
            type="number"
            name={id}
            value={valores[id] || ''}
            onChange={manejarCambioInput}
            min="0"
            step="any"
            className="input"
          />
        </div>
      ))}

      <button onClick={manejarCalcular} className="btn">Calcular Volumen</button>

      {error && <p className="error">{error}</p>}

      {resultado !== null && !error && (
        <p className="resultado">Volumen: {resultado} unidades cúbicas</p>
      )}
    </div>
  );
}
