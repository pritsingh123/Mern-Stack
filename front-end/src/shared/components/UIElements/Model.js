import React from "react";

import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";

import "./Model.css";

const ModelOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content${props.contentClass}`}>
          {props.children}
        </div>

        <footer className={`modal__footer${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("model-root"));
};

const Model = (props) => {
  return (
    <React.Fragment>
      {props.show && <BackDrop onClick={props.onClick} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModelOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Model;
