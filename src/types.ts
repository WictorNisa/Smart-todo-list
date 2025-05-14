export type Option = {
    label: string;
    value: string;
}

export interface FormData {
    id: string;
    todo: string;
    priority: string;
    date: string;
}

export interface Todo {
    id: string,
    todo: string;
    priority: string;
    date: string;
    completed: boolean;
}