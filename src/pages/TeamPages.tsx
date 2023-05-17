import { useParams } from "react-router-dom";

export const TeamPages = () => {

  const hola = useParams();
  console.log(hola)

  return (
    <>
        <h1>TeamPages</h1>
        <hr />
    </>
  )
}
