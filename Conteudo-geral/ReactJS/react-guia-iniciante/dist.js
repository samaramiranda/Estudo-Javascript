function MeuComponente1(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente3, {
    onClickIncrementar: props.onClickIncrementar
  })));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, props.children), /*#__PURE__*/React.createElement("footer", null)));
}

function MeuComponente3(props) {
  const [telefone, setTelefone] = React.useState('62 9999999');
  setTimeout(function () {
    setTelefone('34 8888888');
  }, 2000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, {
    telefone: telefone,
    onClickIncrementar: props.onClickIncrementar
  }));
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(21);
  setTimeout(function () {
    setIdade(22);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-4"
  }, /*#__PURE__*/React.createElement("p", null, "Componente 4 - ", idade, " - ", props.telefone), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: props.onClickIncrementar
  }, "Incrementar"));
}

function MeuComponente(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, {
    onClickIncrementar: props.onClickIncrementar
  }));
}

function MeuComponenteIrmao(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componente-irmao"
  }, /*#__PURE__*/React.createElement(MeuComponenteIrmao2, {
    contador: props.contador
  }));
}

function MeuComponenteIrmao2(props) {
  React.useEffect(function () {
    localStorage.setItem("contador", props.contador);
  });
  return /*#__PURE__*/React.createElement("h2", null, "Contador: ", props.contador, " ");
}

function AppComponente() {
  const [contador, incrementaContador] = React.useState(Number(localStorage.getItem("contador")) || 0);

  const clickIncrementa = function () {
    incrementaContador(contador + 1);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeuComponente, {
    onClickIncrementar: clickIncrementa
  }), /*#__PURE__*/React.createElement(MeuComponenteIrmao, {
    contador: contador
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponente, null), document.getElementById("app"));
