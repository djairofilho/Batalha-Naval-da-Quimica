export default function Dica({ texto }){
    return(
        <div className="dica-container">
            <div className="dica-content">
                <div className="dica-header">
                    <span className="dica-icon">💡</span>
                    <h2 className="dica-title">Dica: </h2>
                </div>
                <p className="dica-text">{texto}</p>
            </div>
        </div>
    );
}