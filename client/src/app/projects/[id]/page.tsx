"use client";

import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import ListView from "../ListView";
import TableView from "../TableView";

type Props = {
  params: { id: string };
};

const Projects = ({ params }: Props) => {
  const { id } = params;

  const [activeTab, setActiveTab] = useState("Board");
  const [isModelNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
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
