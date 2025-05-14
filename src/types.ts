export type Option = {
    label: string;
    value: string;
}

export interface FormData {
    todo: string;
    priority: string;
    date: string;
}

export interface Todo {
    todo: string;
    priority: string;
    date: string;
    completed: boolean;
}