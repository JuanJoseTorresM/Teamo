import Imagen from '../src/image/imagen.jpg';

const App = () => {
  const handlePerdonClick = () => {
    // Aquí defines la URL a la que quieres redirigir cuando se hace clic en "Si te Perdono"
    window.location.href = 'https://www.youtube.com/watch?v=wZRWpr1G1Qw';
  };

  const handleNoPerdonClick = () => {
    // Aquí defines la URL a la que quieres redirigir cuando se hace clic en "No te Perdono"
    window.location.href = 'https://www.instagram.com/stories/highlights/18194852413260445/';
  };

  return (
    <>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">¿Cielito me Puedes Perdonar Por Favor?</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Disculpame por estar cometiendo tantos errores y solo herir a la princesa linda que tanto amo y que da todo por mi. Tu sabes que estoy haciendo mi mayor esfuerzo por cambiar y darte lo mejor de mi para el resto de nuestra vida. Tu sabes lo mucho que te amo y no quiero que sigamos peleando pofavo.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3" onClick={handlePerdonClick}>Si te Perdono</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleNoPerdonClick}>No te Perdono</button>
          </div>
        </div>

        <div className="container px-5">
          <img
            src={Imagen}
            width="250"
            height="auto"
            className="bd-placeholder-img"
          />        </div>
      </div>


    </>
  );
};
export default App;