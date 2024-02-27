import { Todo } from "@prisma/client";

export const updateTodo = async(id:string, complete:boolean):Promise<Todo> => {
    const body = {
        complete,
    };

    const dbTodo = await fetch(`/api/todos/${id}`,{
        method: 'PUT',
        body: JSON.stringify( body ),
        headers: {
            'Content-Type': 'applitcation/json'
        }
    }).then( response => response.json() );

    return dbTodo;
}

export const createTodo = async(description:string):Promise<Todo> => {
    const body = {
        description
    };

    const dbTodo = await fetch('/api/todos',{
        method: 'POST',
        body: JSON.stringify( body ),
        headers: {
            'Content-Type': 'applitcation/json',
        }
    }).then( response => response.json() );

    return dbTodo;
}

export const deleteCompletedTodos = async():Promise<Todo> => {
  
    const { deleted: { count } } = await fetch('/api/todos',{
        method: 'DELETE',
        headers: {
            'Content-Type': 'applitcation/json'
        }
    }).then( response => response.json() );

    return count;
}