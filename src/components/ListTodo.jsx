import React from 'react'
import './todos.css'

const ListTodo = (props) => 
{
    const renderTodo = () =>
    {
        if ( props.todo.completed )
            return <s><i>{ props.todo.title }</i></s>;
        else
            return props.todo.title;
    }

    return (
        <React.Fragment >
            <td style={ { width: 10 } } className="text-center">
                { props.index }
            </td>
            <td style={ { width: 15 } } className="text-center">
                <input type="checkbox" defaultChecked={ props.todo.completed } onChange={ () => props.todoComplete( props.todo ) } />
            </td>
            <td className='text-start' key={ props.todo.id }>
                {
                    renderTodo()
                }
            </td>
            <td style={ { width: 100 } } className="text-center">
                <button onClick={ () => props.todoDelete( props.todo.id ) } className="btn btn-sm btn-outline-danger delete">Delete</button>
            </td>
        </React.Fragment>
    );
}

export default ListTodo;