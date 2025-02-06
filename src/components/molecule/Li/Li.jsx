import React from "react";
import TextSection from "../TextSection/TextSection";
import ButtonsSection from "../ButtonsSection/ButtonsSection";

export default function Li({
  key,
  taskText,
  taskTimeAdded,
  className,
  className1,
  className2,
  className3,
  onClick1,
  onClick2,
  Icon1,
  Icon2,
}) {
  return (
    <li key={key}>
      <TextSection
        taskText={taskText}
        taskTimeAdded={taskTimeAdded}
        className={className}
      />
      <ButtonsSection
        className={className1}
        className1={className2}
        className2={className3}
        onClick1={onClick1}
        onClick2={onClick2}
        Icon1={Icon1}
        Icon2={Icon2}
      />
    </li>
  );
}
