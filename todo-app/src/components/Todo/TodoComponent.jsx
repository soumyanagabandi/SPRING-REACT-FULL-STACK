import { useParams, useNavigate } from "react-router-dom";
import { retrieveTodoApi, updateTodoApi } from "../api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { Formik, Form , Field, ErrorMessage} from 'formik'

export default function TodoComponent() {

    const [ description, setDescription] = useState('')
    const [ targetDate, setTargetDate] = useState('')
    const {id} = useParams()
    const authContext = useAuth()
    const username = authContext.username
    const navigate = useNavigate();
    useEffect(
        () => retrieveTodos(),
        [id]
    )
    function retrieveTodos(){
        retrieveTodoApi(authContext.username, id)
        .then(response => {setDescription(response.data.description)
        setTargetDate(response.data.targetDate)})
        .catch(error => console.log(error))
    }

    function onSubmit( values){
        console.log(values)
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }
        console.log(todo)
        updateTodoApi(username, id, todo)
        .then(response => {
            navigate('/todos')
        })
        .catch(error => console.log(error))
    }

    function validate (values){
        const errors = {}
        if(values.description.length < 5){
            errors.description = 'Enter atleast 5 characters'
        }
        if(values.targetDate == null){
            errors.targetDate = 'Enter target date'
        }
        return errors
    }

    return (
        <div className="container">
            <h1>Enter todo details</h1>
            <div>
                <Formik initialValues={{description, targetDate}}
                enableReinitialize= {true}
                onSubmit={onSubmit}
                validate={validate}
                validateOnChange={false}
                validateOnBlur={false}>
                {
                    (props) => (
                        <Form>
                            <ErrorMessage
                                name = "description"
                                component= "div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage
                                name = "targetDate"
                                component= "div"
                                className="alert alert-warning"
                            />
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field className="form-control" type ="text" name = "description"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field className="form-control" type = "date" name = "targetDate"></Field>
                            </fieldset>
                            <button className="btn btn-success">Save</button>
                        </Form>
                    )
                }
                </Formik>
            </div>
        </div>
    );
}