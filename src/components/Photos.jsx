import { ContextObject } from "../context";

function Photos() {
  return (
    <>
      <ContextObject.Consumer>
        {(valor) => {
          if (valor.arrayPhotos[1] !== undefined) {
            console.log(valor);
            return <h1>{valor.arrayPhotos[1].url}</h1>;
          } else {
            return <h1>Loading...</h1>;
          }
        }}
      </ContextObject.Consumer>

      <h1>Images go here</h1>
    </>
  );
}

export default Photos;
