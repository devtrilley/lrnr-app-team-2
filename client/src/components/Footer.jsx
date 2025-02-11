export default function Footer() {
  return (
    // Just default Materialize footer taken from documentation. Edit this accordingly
    <footer className="page-footer blue">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <p className="grey-text text-lighten-4">
            Embrace the power of our app and unlock the secrets of the universe, one quiz at a time.
            As I always say, 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.'
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Home
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Quiz Generator
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          Made by <strong>Materialize</strong>
        </div>
      </div>
    </footer>
  );
}
