import './paginas/Quadro/Quadro.css';
import React, { useState, useEffect } from "react";

function Quadro() {
   const [colunas, setColunas] = useState(() => {
    const colunasSalvas = localStorage.getItem('stimula-kanban');
    return colunasSalvas ? JSON.parse(colunasSalvas) : {
      afazer: {
        id: 'afazer',
        titulo: 'A Fazer',
        itens: [
          { id: 1, conteudo: 'Montar quebra-cabeça' },
          { id: 2, conteudo: 'Associar formas' }
        ]
      },
      fazendo: {
        id: 'fazendo',
        titulo: 'Fazendo',
        itens: [
          { id: 3, conteudo: 'Jogo da memória' }
        ]
      },
      feito: {
        id: 'feito',
        titulo: 'Feito!',
        itens: [
          { id: 4, conteudo: 'Identificar cores' }
        ]
      }
    };
  });

  const [itemArrastado, setItemArrastado] = useState(null);
  const [novaTarefa, setNovaTarefa] = useState('');

  useEffect(() => {
    localStorage.setItem('stimula-kanban', JSON.stringify(colunas));
  }, [colunas]);

  const adicionarTarefa = () => {
    if (!novaTarefa.trim()) return;
    
    const novoItem = {
      id: Date.now(),
      conteudo: novaTarefa
    };

    setColunas(prev => ({
      ...prev,
      afazer: {
        ...prev.afazer,
        itens: [...prev.afazer.itens, novoItem]
      }
    }));
    
    setNovaTarefa('');
  };

  const excluirCard = (itemId, colunaId) => {
    setColunas(prev => {
      const novasColunas = { ...prev };
      novasColunas[colunaId].itens = novasColunas[colunaId].itens.filter(
        item => item.id !== itemId
      );
      return novasColunas;
    });
  };

  const iniciarArrasto = (e, itemId, colunaOrigem) => {
    setItemArrastado({ itemId, colunaOrigem });
    e.dataTransfer.effectAllowed = 'move';
  };

  const soltarItem = (e, colunaDestino) => {
    e.preventDefault();
    
    if (!itemArrastado || itemArrastado.colunaOrigem === colunaDestino) return;
    
    setColunas(prev => {
      const novasColunas = { ...prev };
      const colunaOrigem = novasColunas[itemArrastado.colunaOrigem];
      const colunaDest = novasColunas[colunaDestino];
      
      const indiceItem = colunaOrigem.itens.findIndex(
        item => item.id === itemArrastado.itemId
      );
      
      if (indiceItem === -1) return prev;
      
      const [itemMovido] = colunaOrigem.itens.splice(indiceItem, 1);
      colunaDest.itens.push(itemMovido);
      
      return novasColunas;
    });
    
    setItemArrastado(null);
  };

  const permitirSoltar = e => {
    e.preventDefault();
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-12 px-md-4">

      <div className="container-kanban mt-5">

        <div className="formulario-tarefa">
          <div className="grupo-input">
            <input
              type="text"
              className="campo-texto"
              placeholder="Adicione uma nova atividade..."
              value={novaTarefa}
              onChange={e => setNovaTarefa(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && adicionarTarefa()}
            />
            <button 
              className="botao-adicionar" 
              onClick={adicionarTarefa}
            >
              Adicionar
            </button>
          </div>
        </div>

        <div className="quadro-kanban">
          {Object.keys(colunas).map(colunaId => {
            const coluna = colunas[colunaId];
            return (
              <div 
                key={coluna.id}
                className="coluna"
                onDrop={e => soltarItem(e, colunaId)}
                onDragOver={permitirSoltar}
              >
                <div className="cabecalho-coluna">
                  <h3>
                    {colunaId === 'afazer' && '📋 '}
                    {colunaId === 'fazendo' && '✏️ '}
                    {colunaId === 'feito' && '✅ '}
                    {coluna.titulo}
                  </h3>
                  <span className="contador">{coluna.itens.length}</span>
                </div>
                <div className="cards">
                  {coluna.itens.map(item => (
                    <div
                      key={item.id}
                      className="card"
                      draggable
                      onDragStart={e => iniciarArrasto(e, item.id, colunaId)}
                    >
                      {item.conteudo}
                      <i 
                        onClick={(e) => {
                          e.stopPropagation();
                          excluirCard(item.id, colunaId);
                        }} 
                        className="bi bi-trash-fill icone-excluir"
                        title="Remover atividade"
                      ></i>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Quadro;