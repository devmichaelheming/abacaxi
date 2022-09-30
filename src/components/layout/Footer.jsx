import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from "styled-components";
import { a } from 'react-router-dom';
import { FaMapMarkerAlt, FaRegPaperPlane, FaCarSide } from "react-icons/fa";
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Nav = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  background-color: #00A0C1;
  padding: 2rem 0 3rem 0;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >

      <Container>
        <Nav>
          <div className="footer-nav">
            <ul className="list-reset" style={{ padding: "0 20px" }}>
              <h5 style={{ padding:" 0 12px" }}>
                Informações
              </h5>
              <li>
                <a href="#0">Início</a>
              </li>
              <li>
                <a href="#1">Sobre Nós</a>
              </li>
              <li>
                <a href="#3">Trabalhe Conosco</a>
              </li>
            </ul>
          </div>

          <div className="footer-nav">
            <ul className="list-reset" style={{ padding: "0 20px" }}>
              <h5 style={{ padding:" 0 12px" }}>
                Logistica e Financeiro
              </h5>
              <li>
                <a href="tel:+5566996390632">Flávio: (66) 99639-0632</a>
              </li>
              <li>
                <a href="tel:+5566999886915">Moisés: (66) 99988-6915</a>
              </li>
              <li>
                <a href="tel:+5566999854833">Fernando: (66) 99985-4833</a>
              </li>
              <li>
                <a href="tel:+5566999886615">Fabio: (66) 99988-6615</a>
              </li>
            </ul>
          </div>

          <div className="footer-nav">
            <ul className="list-reset" style={{ padding: "0 20px" }}>
              <h5 style={{ padding:" 0 12px" }}>
                Nossos Compradores
              </h5>
              <li>
                <a href="tel:+5566996390632">Flávio: (66) 99639-0632</a>
              </li>
              <li>
                <a href="tel:+5566999886915">Moisés: (66) 99988-6915</a>
              </li>
              <li>
                <a href="tel:+5566999854833">Fernando: (66) 99985-4833</a>
              </li>
              <li>
                <a href="tel:+5566999886615">Fabio: (66) 99988-6615</a>
              </li>
            </ul>
          </div>

          <div className="footer-nav">
            <ul className="list-reset">
              <h5>
                Endereço
              </h5>
              <li>
                <FaCarSide/>
                <a href="#0">Estrada Planalto, ST. Rural</a>
              </li>
              <li>
                <FaMapMarkerAlt/>
                <a href="#0">Colíder - MT, 78500-000</a>
              </li>
              <li>
                <FaRegPaperPlane/>
                <a href="#0">confinamentoabacaxiquebrado@outlook.com</a>
              </li>
            </ul>
          </div>
        </Nav>
      </Container>

      <div className="container">

        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>

          <div className="footer-top space-between text-xxs">
          </div>

          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterSocial />

            <div className="footer-copyright">
              © Todos os direitos reservados a ABACAXIQUEBRADO
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;