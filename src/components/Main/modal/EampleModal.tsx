import React from 'react';
import cl from './modal.module.css';
import Portal from './Portal';

type propsType = {
    modalHeader?: string
    modalFooter?: string
    collaps: boolean
    onCansel: () => void
    children: any
}
const defaultProps: propsType = {
    modalHeader: 'some Title',
    modalFooter: '',
    collaps: false ,
    onCansel: () => {},
    children: null,
}
export const ExampleModal = (props = defaultProps) => {
    const onChange=()=>{
        props.onCansel()
    }
    return (
        <>{props.collaps &&
        <Portal>
            <div className={cl.ModalOverlay} >
                <div className={cl.ModalContent}>
                    <div className={cl.modalWindow}>
                        <div className={cl.modalHeader}>
                            <div className={cl.title}><h3>{props.modalHeader}</h3></div>
                            <p onClick={onChange} style={{float: 'right'}}>x</p>
                        </div>
                        <div className={cl.modalBody}>
                            {props.children}
                        </div>
                        <div className={cl.modalFooter}>
                            {props.modalFooter}
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
        }
        </>
    )
}

