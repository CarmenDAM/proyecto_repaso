import Gastos from './Gastos';
import Ingresos from './Ingresos';
import Transacciones from './Transacciones';

export const PaginasApp = [
    {
      id: 1,
      path: 'Gastos',
      title: 'Gastos',
      component: Gastos
    },
    {
      id: 2,
      path: 'Ingresos',
      title: 'Ingresos',
      component: Ingresos
    },
    {
      id: 3,
      path: 'Transacciones',
      title: 'Transacciones',
      component: Transacciones
    },
  ];
  