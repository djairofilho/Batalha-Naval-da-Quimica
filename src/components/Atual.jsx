export default function Atual({ elementoAtual }) {
    return (
        <div className="atual-container">
            {elementoAtual ? (
                <div className="atual-content">
                    <h3 className="atual-nome">Elemento: {elementoAtual.nome}</h3>
                    <p className="atual-dica">Dica: {elementoAtual.dica}</p>
                </div>
            ) :<p></p>}
        </div>
    );
}