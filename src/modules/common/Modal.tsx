import React from "react";
import Portal from "./Portal";
import "./index.scss";

type Props = {
  headerTitle?: string;
  isActive?: boolean;
  close?: boolean;
  toggle?: () => void;
  renderBody: () => JSX.Element;
  renderFooter?: () => JSX.Element;
};

const Modal: React.FC<Props> = ({
  headerTitle = "",
  isActive = false,
  toggle,
  renderBody,
  renderFooter,
  close = true
}) => {
  return (
    <Portal>
      <div className={isActive ? "modal is-active" : "modal"}>
        <div
          style={{
            background: "rgba(0, 0, 0, 0.5)"
          }}
          onClick={toggle}
          className="modal-background"
        />
        <div className={"modal-card shadow-md border-0 scale-up-center"}>
          <header className="modal-card-head">
            {headerTitle && (
              <p className="modal-card-title capitalize font-bold">
                {headerTitle}
              </p>
            )}
            {close && (
              <button onClick={toggle} className="delete">
                &times;
              </button>
            )}
          </header>
          <section className="modal-card-body">{renderBody()}</section>
          {renderFooter && (
            <footer className="modal-card-foot">{renderFooter()}</footer>
          )}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
