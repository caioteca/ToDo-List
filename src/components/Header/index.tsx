import todoLogo from "../../assets/img/logo.svg";
import styles from "./styles.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="logo da aplicação" />

      <form action="" className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
          required
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
