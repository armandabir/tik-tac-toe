export default function({winner,onRestart}){
    return (
        <div id="game-over">
            <h2>Gmae Over!</h2>
            {(winner) && <p>{winner} is winner</p> }
            {(!winner) && <p>No winner!draw</p> }
            <p>
                <button onClick={onRestart}>Rematch!</button>
            </p>

        </div>

    )
}