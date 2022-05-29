

import Gastos from '../components/Gastos';
import Ingresos from '../components/Ingresos';
import Transacciones from '../components/Transacciones';
import styles from '../components/Estilos.css';

const MenuElems = [


    {
        path: "/gastos",
        defaultRoute:false,
        text: "Gastos",
        componentSite: <Gastos/>,
        class:"btn-gastos"
    },


    {
        path: "/ingresos",
        defaultRoute:false,
        text: "Ingresos",
        componentSite: <Ingresos/>,
        class:"btn-ingresos"
    },

    {
        path: "/transacciones",
        defaultRoute:false,
        text: "Transacciones",
        componentSite: <Transacciones/>,
        class:"btn-transacciones"
    },

    {
        path: "/cambioMoneda",
        defaultRoute:false,
        text: "Cambio de Moneda",
        componentSite: <cambioMoneda/>,
        class:"btn-cambioMoneda"
    }

];
export default MenuElems;