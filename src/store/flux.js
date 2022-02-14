const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            currentUser: {
                name: 'Luis',
                lastname: 'Rodriguez',
                email: 'lrodriguez@4geeks.co',
                address: 'Av Manquehue Sur 350, Las Condes'
            }
        },
        actions: {
            saludo: () => {
                const store = getStore();
                console.log(`Hola, ${store.currentUser.name} ${store.currentUser.lastname}`);
            },
            despedida: () => {
                const { saludo } = getActions();
                saludo();
            },
            a: () => {
                const { currentUser } = getStore(); // obtenemos la informacion actual del currentUser
                currentUser.name = 'Pedro'; // cambiamos el name del currenUser con el nuevo valor
                currentUser.lastname = 'Perez';
                setStore({ currentUser: currentUser }) // Actualizamos el store con la nueva informacion del currentUser
            },
            b: () => {
                console.log('Bienvenido');
            }
        }
    }
}

export default getState;