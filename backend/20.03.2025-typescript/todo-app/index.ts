// Task interface
interface Task {
    id: number;
    title: string;
    completed: boolean;
}

// Task list
let tasks: Task[] = [];

// Adding a new task
const addTask = (title: string): void => {
    const newTask: Task = {
        id: tasks.length + 1,
        title,
        completed: false,
    };
    tasks.push(newTask);
    console.log(`Task added: "${title}"`);
};

// Completing the task
const completeTask = (id: number): void => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
        task.completed = true;
        console.log(`Task completed: "${task.title}"`);
    } else {
        console.log(`Task not found: ID ${id}`);
    }
};

// Listing all tasks
const listTasks = (): void => {
    console.log("Task List:");
    tasks.forEach((task) => {
        console.log(
            `${task.id}. [${task.completed ? "X" : " "}] ${task.title}`
        );
    });
};

// Example usage
addTask("Learn TypeScript");
addTask("Create project");
listTasks();
completeTask(1);
listTasks();