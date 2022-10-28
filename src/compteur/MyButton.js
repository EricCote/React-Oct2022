import { Button } from "react-bootstrap";

export function MyButton({ incrementation, incrementer }) {
  return (
    <Button
      variant={incrementation < 0 ? "danger" : "primary"}
      className="m-3"
      onClick={() => {
        incrementer(incrementation);
      }}
    >
      {incrementation < 0 ? "Diminuer" : "Incrémenter"} de{" "}
      {Math.abs(incrementation)}
    </Button>
  );
}
