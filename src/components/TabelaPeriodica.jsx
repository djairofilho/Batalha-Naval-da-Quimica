import React from 'react';
import { elementos } from '../data/elementos';
import './TabelaPeriodica.css';

const TabelaPeriodica = ({ onClick, statusMap }) => {
  return (
    <div className="tabela-container">
      <div className="tabela">
        {elementos.map((el) => (
          <div
            key={el.number}
            className="elemento"
            onClick={() => onClick(el.symbol)}
            style={{
              gridColumn: el.group,
              gridRow: el.period,
              cursor: 'pointer',
              backgroundColor: statusMap?.[el.symbol] === "acerto" ? "#4ade80" : 
                             statusMap?.[el.symbol] === "erro" ? "#f87171" : "#1f1f1f"
            }}
          >
            <strong>{el.symbol}</strong><br />
            <span>{el.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabelaPeriodica;
