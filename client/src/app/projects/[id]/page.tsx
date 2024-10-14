"use client";

import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import ListView from "../ListView";
import TableView from "../TableView";
import ModalNewTask from "../ModalNewTask";

type Props = {
  params: { id: string };
};

const Projects = ({ params }: Props) => {
  const { id } = params;

  const [activeTab, setActiveTab] = useState("Table");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        id={id}
      />
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab == "List" && (
        <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}

      {activeTab == "Table" && (
        <TableView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};

export default Projects;
