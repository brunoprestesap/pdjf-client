import React from "react";
import { Link } from "react-router-dom";

const BotaoVoltar = () => {
    return (
        <div>
            <Link to="/">
                <button className="m-5 p-5 text-slate-300 border-2 border-slate-300 rounded-lg">
                    Voltar Pág. Principal
                </button>
            </Link>
        </div>
    )
}

export default BotaoVoltar