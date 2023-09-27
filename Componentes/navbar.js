import React from 'react';

const CarWidget = () => {
  // Número hardcodeado para la notificación del carrito
  const itemCount = 3;

  return (
    <div className="cart">
      <a href="/carrito" className="text-dark text-decoration-none">
        <i className="fa fa-shopping-cart"></i> Carrito
        <span className="badge bg-primary rounded-circle ml-1">
          {itemCount}
        </span>
      </a>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="logo">
          <a href="/" className="navbar-brand">Franchy SA</a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="/productos" className="nav-link">Productos</a>
            </li>
            <li className="nav-item">
              <a href="/nosotros" className="nav-link">Nosotros</a>
            </li>
            <li className="nav-item">
              <a href="/contacto" className="nav-link">Contacto</a>
            </li>
          </ul>
          <CarWidget />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
