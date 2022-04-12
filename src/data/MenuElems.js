
import MiPrimerComponenteClase from '../components/MiPrimerComponenteClase';
import MiPrimerComponente from '../components/MiPrimerComponente';

import Gastos from '../components/Gastos';
import Ingresos from '../components/Ingresos';
import Transacciones from '../components/Transacciones';

const MenuElems = [

    {
        path: "/",
        defaultRoute:true,
        text: "Inicio",
        componentSite: <MiPrimerComponente />
    },

    {
        path: "/juana",
        defaultRoute:false,
        text: "Juana",
        componentSite: <MiPrimerComponenteClase nombre="Juana" apellido="Perez" color="red"/>
    },

    {
        path: "/carmen",
        defaultRoute:false,
        text: "Carmen",
        componentSite: <MiPrimerComponenteClase nombre="Carmen" apellido="Ceballos" color="green"/>
    },

    {
        path: "/carlos",
        defaultRoute:false,
        text: "Carlos",
        componentSite: <MiPrimerComponenteClase nombre="Carlos" apellido="López" color="blue"/>
    },

    {
        path: "/",
        defaultRoute:true,
        text: "Gastos",
        componentSite: <Gastos/>
    },

    {
        path: "/",
        defaultRoute:true,
        text: "Ingresos",
        componentSite: <Ingresos/>
    },

    {
        path: "/",
        defaultRoute:true,
        text: "Transacciones",
        componentSite: <Transacciones/>
    }

];
export default MenuElems;