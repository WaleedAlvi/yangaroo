import axios, { AxiosResponse} from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
}

const LstOfTodos = () => {
    return request.get(`/todo`);
}

const AddTodoItem = (todo: string) => {
    return request.post(`/todo`, {
        todoName: todo,
    });
}

const agent = {
    LstOfTodos,
    AddTodoItem,
}

export default agent;