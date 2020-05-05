import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { CSSTransition } from "react-transition-group";
import BackDrop from "../BackDrop/BackDrop";

const ModalOverlay = (props) => {
  const content = (
    <div className={`cus-modal ${props.className}`} style={props.style}>
      <span className="btn-close-modal" onClick={props.onCancel}>
        <i className="simple-icon icon-close"></i>
      </span>
      {/* <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header> */}
      {props.hasForm ? (
        <form
          onSubmit={
            props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
          }
        >
          <div className={`modal__content ${props.contentClass}`}>
            {props.children}
          </div>
          <footer className={`modal__footer ${props.footerClass}`}>
            {props.footer}
          </footer>
        </form>
      ) : (
        props.children
      )}
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};
const Modal = (props) => {
  return (
    <>
      {props.show && <BackDrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};
export default Modal;
