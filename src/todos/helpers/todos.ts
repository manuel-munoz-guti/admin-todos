import { Todo } from "@prisma/client";

export const updateTodo = async(id:string, complete:boolean):Promise<Todo> => {
    const body = {
        complete,
    };

    const dbTodo = await fetch(`/api/todo/${id}`,{
        method: 'PUT',
        body: JSON.stringify( body ),
        headers: {
            'Content-Type': 'applitcation/json'
        }
    }).then( response => response.json() );

    return dbTodo;
}