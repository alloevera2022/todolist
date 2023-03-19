/* const todosNode = document.querySelector('.js-todos');
const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');

let todos = [];

function addTodo(text) {
    const todo = {
    text, 
    done: false, 
    id: `${Math.random()};`
    };
    
    todos.push(todo);

}

function deleteTodo(id) {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.done = true; 

        }
    })
}

function render () {
    console.log(todos);
    let html = ''; 

    todos.forEach(todo => {
        if (todo.done) {
            return;
          
        };

        html += `
             <div>
             ${todo.text}
             <button data-id='${todo.id}'>Done</button>
             </div>
        `;


    })

    todosNode.innerHTML = html; 


}

btnNode.addEventListener ('click', () => {
    const text = inputNode.value;

    addTodo(text);

    render();

}); */
/*
todosNode.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const id = event.target.dataset.id;

    deleteTodo(id);

    render();

});



render(); */

import { Connection, SystemProgram, Transaction, clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletDialogButton } from '@solana/wallet-adapter-react-ui';
import { useConnection } from './utils/connection';

const Wallet = () => {
    const { adapter, publicKey, ready, connect, disconnect } = useWallet();
    const connection = useConnection();
    
    return (
      <div>
        {ready && (
          <div>
            {publicKey ? (
              <button onClick={() => disconnect()}>Disconnect</button>
            ) : (
              <button onClick={() => connect()}>Connect</button>
            )}
          </div>
        )}
      </div>
    );
  };
  