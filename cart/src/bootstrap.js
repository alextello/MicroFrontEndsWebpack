import faker from 'faker';

const mount = (el) => {
    el.innerHTML = `<div>Tienes ${faker.datatype.number()} articulos en tu carreta</div>`;
}

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    if(el) {
        mount(el);
    }
}

export {mount}
