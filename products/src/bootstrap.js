import faker from 'faker';

let products = '';

const mount = (el) => {
    for (let i = 0; i < 5; i++) {
        let name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    el.innerHTML = products;
    //ReactDOM.render(<App />, el);
};

// contexto #1
// correr este archivo en desarrollo, aislado
// estamos corriendo index.html
// tenemos el elemento del selector
// queremos que se renderice inmediatamente
//******//

// Asumiendo que el contenedor no contiene un elemento con el id dev-products
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    if(el) {
        // Probablemente lo vamos a correr aislado
        mount(el);
    }
}


// Contexto #2
// corriendo en desa o products
// en container applicationCache
// no hay garantia que el elemento html exista
// no queremos que renderice inmediatamente la app
export { mount };
