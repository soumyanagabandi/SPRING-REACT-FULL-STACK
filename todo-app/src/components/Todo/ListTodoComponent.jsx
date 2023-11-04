export default function ListTodoComponent(){
    const today = new Date();

    const todos = [{id:1, description: 'Learn AWS', done:false},
                   {id: 2 , description: 'Learn Full Stack Development',done:false},
                   {id:3 , description:'Learn Devops',done:false},
]
    return(
        <div className="container">
            <h1> Things you want to Do!</h1>
            <div>
            <table className="table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>done</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                            <tr key = "{todo.id}">
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                </tr>
                            )
                        )
                    }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}