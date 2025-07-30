import React from 'react';
import styles from './ListarGenerico.module.css';

interface Props<T> {
  items: T[];
  renderItem: (item: T) => React.ReactElement;
  onItemClick?: (item: T) => void;
  containerClassName?: string;
}

function ListarGenerico<T>({ items, renderItem, onItemClick, containerClassName }: Props<T>): React.ReactElement {
  const containerClass = containerClassName || styles.container;

  return (
    <div className={containerClass}>
      {items.map((item, index) => (
        <div key={(item as any).uuid || index} onClick={() => onItemClick && onItemClick(item)}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

export default ListarGenerico;