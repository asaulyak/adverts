import css from './ProductList.module.css';
import { ProductCard } from '../ProductCard/ProductCard.jsx';
import Modal from 'react-modal';
import { useState } from 'react';
import { ProductModalContent } from '../ProductModalContent/ProductModalContent.jsx';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(17,18,19,0.2)',
  },
  content: {
    width: 982,
    height: 720,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    borderRadius: 20,
    border: 'none',
    overflow: 'auto'
  },
};

export const ProductList = ({ products }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = product => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };
  return (
    <>
      <ul className={css.products}>
        {products.map(product => (
          <li key={product.id}>
            <ProductCard product={product} openModal={openModal} />
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
        >
          <ProductModalContent product={selectedProduct} />
        </Modal>
      )}
    </>
  );
};
