import './paginas/Quadro/Quadro.css';
import React, { useState, useEffect } from "react";

function MainHome() {
  // Estados do Kanban com persistência
  const [columns, setColumns] = useState(() => {
    const savedColumns = localStorage.getItem('stimula-kanban');
    return savedColumns ? JSON.parse(savedColumns) : {
      todo: {
        id: 'todo',
        title: 'A Fazer',
        items: [
          { id: 1, content: 'Montar quebra-cabeça' },
          { id: 2, content: 'Associar formas' }
        ]
      },
      progress: {
        id: 'progress',
        title: 'Fazendo',
        items: [
          { id: 3, content: 'Jogo da memória' }
        ]
      },
      done: {
        id: 'done',
        title: 'Feito!',
        items: [
          { id: 4, content: 'Identificar cores' }
        ]
      }
    };
  });

  const [draggedItem, setDraggedItem] = useState(null);
  const [newTask, setNewTask] = useState('');

  // Persistir estado no localStorage
  useEffect(() => {
    localStorage.setItem('stimula-kanban', JSON.stringify(columns));
  }, [columns]);

  // Função para adicionar nova tarefa
  const addTask = () => {
    if (!newTask.trim()) return;
    
    const newItem = {
      id: Date.now(),
      content: newTask
    };

    setColumns(prev => ({
      ...prev,
      todo: {
        ...prev.todo,
        items: [...prev.todo.items, newItem]
      }
    }));
    
    setNewTask('');
  };

  // Função para remover card
  const handleDeleteCard = (itemId, columnId) => {
    setColumns(prev => {
      const newColumns = { ...prev };
      newColumns[columnId].items = newColumns[columnId].items.filter(
        item => item.id !== itemId
      );
      return newColumns;
    });
  };

  // Função para iniciar o arrasto
  const handleDragStart = (e, itemId, sourceColumn) => {
    setDraggedItem({ itemId, sourceColumn });
    e.dataTransfer.effectAllowed = 'move';
  };

  // Função para soltar o item
  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    
    if (!draggedItem || draggedItem.sourceColumn === targetColumn) return;
    
    setColumns(prev => {
      const newColumns = { ...prev };
      const sourceCol = newColumns[draggedItem.sourceColumn];
      const targetCol = newColumns[targetColumn];
      
      const itemIndex = sourceCol.items.findIndex(
        item => item.id === draggedItem.itemId
      );
      
      if (itemIndex === -1) return prev;
      
      const [movedItem] = sourceCol.items.splice(itemIndex, 1);
      targetCol.items.push(movedItem);
      
      return newColumns;
    });
    
    setDraggedItem(null);
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Meu Quadro de Atividades</h1>
      </div>

      <div className="kanban-container">
        {/* Formulário para adicionar novas tarefas */}
        <div className="task-form mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Adicione uma nova atividade..."
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && addTask()}
            />
            <button 
              className="btn" 
              onClick={addTask}
              style={{ 
                backgroundColor: '#4ECDC4', 
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              Adicionar
            </button>
          </div>
        </div>

        {/* Quadro Kanban */}
        <div className="kanban-board">
          {Object.keys(columns).map(columnId => {
            const column = columns[columnId];
            return (
              <div 
                key={column.id}
                className="kanban-column"
                onDrop={e => handleDrop(e, columnId)}
                onDragOver={handleDragOver}
              >
                <div className="column-header">
                  <h3>
                    {columnId === 'todo' && '📋 '}
                    {columnId === 'progress' && '✏️ '}
                    {columnId === 'done' && '✅ '}
                    {column.title}
                  </h3>
                  <span className="badge">{column.items.length}</span>
                </div>
                <div className="kanban-cards">
                  {column.items.map(item => (
                    <div
                      key={item.id}
                      className="kanban-card"
                      draggable
                      onDragStart={e => handleDragStart(e, item.id, columnId)}
                    >
                      {item.content}
                      {/* Ícone de lixeira discreto */}
                      <button 
                        className="delete-btn"
                        onClick={() => handleDeleteCard(item.id, columnId)}
                        aria-label="Remover atividade"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
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

export default MainHome;