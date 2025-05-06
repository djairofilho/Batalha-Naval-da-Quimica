export default function Elemento({simbolo, onClick, status}){
    return (
        <button
            className={`elemento-btn ${status === "acerto" ? "acerto" : status === "erro" ? "erro" : ""}`}
            onClick={() => onClick(simbolo)}
        >{simbolo}
        </button>
    );
}