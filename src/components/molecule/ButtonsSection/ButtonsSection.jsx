import Button from "../../atom/Button/Button";
export default function ButtonsSection({className, className1, className2, onClick1, onClick2, Icon1, Icon2}) {

  return (
    <div className={className}>
      <Button
        className={className1}
        onClick={onClick1}
        Icon={Icon1}
      />
      <Button
        className={className2}
        onClick={onClick2}
        Icon={Icon2}
      />
    </div>
  );
}
