import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { useTaskContext } from "./context/ContextApi";
import InputFields from "./components/InputFields";
import Table from "./components/Table";

export default function App() {
  const [text, setText] = useState([]);

  return (
    <div className=" h-screen flex flex-col gap-2 items-center justify-center">
      <InputFields setText={setText} text={text} />
      <Table />
    </div>
  );
}
