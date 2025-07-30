// src/components/ArmaModal/ArmaModal.tsx
import React from 'react';
import ModalGenerico from '../ModalGenerico/ModalGenerico';
import styles from './ArmaModal.module.css';
import { IArma } from '../../Interfaces/IArma';
import { IArmaDamageRange } from '../../Interfaces/IArmaDamageRange';


interface Props {
  arma: IArma;
  onClose: () => void;
}

const ArmaModal: React.FC<Props> = ({ arma, onClose }) => {
  if (!arma) {
    return null;
  }

  return (
    <ModalGenerico onClose={onClose} modalContentClassName={styles.armaModalContent}>
      <div className={styles.modalHeader}>
        {arma.displayIcon && (
          <img
            src={arma.displayIcon}
            alt={`Imagem da Arma ${arma.displayName}`}
            className={styles.armaDisplayIcon}
          />
        )}
        {/* REMOVA ESTA LINHA: O ModalGenerico já fornece um botão de fechar. */}
        {/* <button className={styles.closeButton} onClick={onClose}>X</button> */}
      </div>
      <div className={styles.modalBody}>
        <h2>{arma.displayName}</h2>
        <p><strong>Categoria:</strong> {arma.category}</p>

        {arma.weaponStats && (
          <>
            <h3>Estatísticas da Arma:</h3>
            <ul>
              <li><strong>Taxa de Disparo:</strong> {arma.weaponStats.fireRate} rps</li>
              <li><strong>Tamanho do Pente:</strong> {arma.weaponStats.magazineSize} balas</li>
              <li><strong>Tempo de Recarga:</strong> {arma.weaponStats.reloadTimeSeconds}s</li>
              {arma.weaponStats.shotgunPelletCount && (
                <li><strong>Contagem de Projéteis (Escopeta):</strong> {arma.weaponStats.shotgunPelletCount}</li>
              )}
              <li><strong>Penetração de Parede:</strong> {arma.weaponStats.wallPenetration}</li>
              <li><strong>Precisão da Primeira Bala:</strong> {arma.weaponStats.firstBulletAccuracy * 100}%</li>
            </ul>

            {arma.weaponStats.damageRanges && arma.weaponStats.damageRanges.length > 0 && (
              <>
                <h4>Alcances de Dano:</h4>
                <table className={styles.damageTable}>
                  <thead>
                    <tr>
                      <th>Alcance (m)</th>
                      <th>Cabeça</th>
                      <th>Corpo</th>
                      <th>Perna</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arma.weaponStats.damageRanges.map((range: IArmaDamageRange, index: number) => (
                      <tr key={index}>
                        <td>{range.rangeStartMeters}-{range.rangeEndMeters}</td>
                        <td>{range.headDamage}</td>
                        <td>{range.bodyDamage}</td>
                        <td>{range.legDamage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </>
        )}
      </div>
    </ModalGenerico>
  );
};

export default ArmaModal;