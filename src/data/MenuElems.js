
import MiPrimerComponenteClase from '../components/MiPrimerComponenteClase';
import MiPrimerComponente from '../components/MiPrimerComponente';

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
    }

];
export default MenuElems;