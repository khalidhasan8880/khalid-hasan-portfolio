'use client'
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import './modal.css'
const Modal = ({handleClose, project}) => {
    
    return (
        <Backdrop onclick={handleClose}>
            <motion.div onClick={(e)=> e.stopPropagation()} className="modal z-50 rounded-2xl bg-black ">
                This is modal hahaha
                

                <button className="bg-red-200" onClick={handleClose}>Close modal</button>
            </motion.div>
        </Backdrop>
    );
};

export default Modal;