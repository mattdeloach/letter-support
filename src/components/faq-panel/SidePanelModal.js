import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import { Button, CustomInput, Modal, ModalHeader, ButtonGroup, Label, Media, Badge } from 'reactstrap';
import AppContext from '../../context/Context';
import defaultModeImg from '../../assets/img/generic/falcon-mode-default.jpg';
import darkModeImg from '../../assets/img/generic/falcon-mode-dark.jpg';
import invertedImg from '../../assets/img/generic/inverted.png';
import card from '../../assets/img/generic/card.png';
import vibrant from '../../assets/img/generic/vibrant.png';
import transparent from '../../assets/img/generic/default.png';
import leftArrowFromLeft from '../../assets/img/icons/left-arrow-from-left.svg';
import arrowsH from '../../assets/img/icons/arrows-h.svg';
import paragraph from '../../assets/img/icons/paragraph.svg';
import settings from '../../assets/img/illustrations/settings.png';
import Flex from '../common/Flex';
import ScrollBarCustom from '../common/ScrollBarCustom';
import { createCookie, getCookieValue, getPageName } from '../../helpers/utils';
import VerticalNavRadioBtn from './VerticalNavStyleRadioBtn';

const SidePanelModal = ({ autoShow, showOnce, autoShowDelay, cookieExpireTime }) => {
  const {
    isCombo,
    isOpenSidePanel,
    toggleModal,
    isFluid,
    setIsFluid,
    isRTL,
    setIsRTL,
    isDark,
    setIsDark,
    isTopNav,
    setIsTopNav,
    setIsOpenSidePanel,
    setIsCombo,
    isVertical,
    setIsVertical
  } = useContext(AppContext);
  const isKanban = getPageName('kanban');

  useEffect(() => {
    let modalStatus = getCookieValue('modalClose');

    if (modalStatus === null && autoShow) {
      setTimeout(() => {
        setIsOpenSidePanel(prev => !prev);
        showOnce && createCookie('modalClose', false, cookieExpireTime);
      }, autoShowDelay);
    }
  }, [autoShow, showOnce, setIsOpenSidePanel, autoShowDelay, cookieExpireTime]);
  return (
    <Modal
      isOpen={isOpenSidePanel}
      toggle={toggleModal}
      modalClassName="overflow-hidden modal-fixed-right modal-theme"
      className="modal-dialog-vertical"
      contentClassName="vh-100 border-0"
    >
      <ModalHeader tag="div" toggle={toggleModal} className="modal-header-settings">
        <div className="py-1 flex-grow-1">
          <h5 className="text-white">
            <FontAwesomeIcon icon="palette" className="mr-2 fs-0" />
            FAQ's
          </h5>
          <p className="mb-0 fs--1 text-white opacity-75">Quick Knowledge Resource</p>
        </div>
      </ModalHeader>
      <ScrollBarCustom
        className="modal-body"
        contentProps={{
          renderer: ({ elementRef, ...restProps }) => (
            <span
              {...restProps}
              ref={elementRef}
              className={classNames('p-card position-absolute', { 'border-left': isDark })}
            />
          )
        }}
      >


        <Flex justify="between">
          <h5>Some very interesting information</h5>
        </Flex>


      </ScrollBarCustom>
    </Modal>
  );
};

SidePanelModal.propTypes = {
  autoShow: PropTypes.bool,
  showOnce: PropTypes.bool,
  autoShowDelay: PropTypes.number,
  cookieExpireTime: PropTypes.number
};

SidePanelModal.defaultProps = {
  autoShow: true,
  showOnce: true,
  autoShowDelay: 3000,
  cookieExpireTime: 7200000
};

export default SidePanelModal;
