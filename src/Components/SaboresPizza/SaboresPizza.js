import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sabores.css'

function SaboresPizza() {
    const [selectedOption, setSelectedOption] = useState('1-sabor'); // Estado para rastrear a seleção do usuário
    const [selectedSabor1, setSelectedSabor1] = useState(''); // Estado para o sabor da primeira metade
    const [selectedSabor2, setSelectedSabor2] = useState(''); // Estado para o sabor da segunda metade

    // Lista de todos os sabores disponíveis
    const saboresDisponiveis = [
        'Calabresa',
        'Pepperoni',
        'Mussarela',
        'Marguerita',
        'Portuguesa',
        'Frango com Catupiry',
        'Presunto',
        '4 Queijos',
        'Vegana',
    ];

    const handleSabor1Change = (e) => {
        setSelectedSabor1(e.target.value);
    };

    const handleSabor2Change = (e) => {
        setSelectedSabor2(e.target.value);
    };

    return (
        <div className="page-container">
            <h2 className="sabores_title">Selecione a quantidade de Sabores da Pizza:</h2>
            <div className="sabores_container">
                <label>
                    <input
                        type="radio"
                        name="sabor-option"
                        value="1-sabor"
                        checked={selectedOption === '1-sabor'}
                        onChange={() => setSelectedOption('1-sabor')}
                    />
                    1 Sabor
                </label>
                <label>
                    <input
                        type="radio"
                        name="sabor-option"
                        value="2-sabores"
                        checked={selectedOption === '2-sabores'}
                        onChange={() => setSelectedOption('2-sabores')}
                    />
                    2 Sabores
                </label>
            </div>
            {selectedOption === '1-sabor' && (
                <div>
                    <h3>Selecione 1 Sabor:</h3>
                    <ul>
                        {saboresDisponiveis.map((sabor) => (
                            <li key={sabor}>
                                <label>
                                    <input
                                        type="radio"
                                        name="sabor"
                                        value={sabor}
                                        checked={selectedSabor1 === sabor}
                                        onChange={handleSabor1Change}
                                    />
                                    {sabor}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {selectedOption === '2-sabores' && (
                <div>
                    <h3>Selecione 2 Sabores:</h3>
                    <div>
                        <h4>Primeira Metade:</h4>
                        <ul>
                            {saboresDisponiveis.map((sabor) => (
                                <li key={sabor}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="sabor-1"
                                            value={sabor}
                                            checked={selectedSabor1 === sabor}
                                            onChange={handleSabor1Change}
                                        />
                                        {sabor}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>Segunda Metade:</h4>
                        <ul>
                            {saboresDisponiveis.map((sabor) => (
                                <li key={sabor}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="sabor-2"
                                            value={sabor}
                                            checked={selectedSabor2 === sabor}
                                            onChange={handleSabor2Change}
                                        />
                                        {sabor}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            <Link className="button-container" to="/">Ir para Tamanhos de Pizza</Link>
            <Link className="button-container" to="/">Confirmar</Link>
        </div>
    );
}

export default SaboresPizza;
