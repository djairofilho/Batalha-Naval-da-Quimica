export default function Fase({ numero, descricao }) {
    return (
        <div className="fase-container">
            <div className="fase-content">
                <div className="fase-header">
                    <span className="fase-icon">🎯</span>
                    <h2 className="fase-title">Fase {numero}</h2>
                </div>
                <p className="fase-text">{descricao}</p>
            </div>
        </div>
    );
}