
import Forms from "./formularioCliente";
import FormularioProductos from "./formularioProducto";
import FormularioProveedores from "./formularioProveedore";
import Img from "./Img";

const Section =()=> {
    return(
        <section className="sectioMain">
            <article className="articleSection">
                <section className="productos"><Img/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia blanditiis dolore neque autem dolores officia cum, mollitia quis reiciendis magni nam iusto adipisci sed asperiores non repellendus vel nihil. Quasi!</p>
                </section>
                <section className="productos"><Img/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia blanditiis dolore neque autem dolores officia cum, mollitia quis reiciendis magni nam iusto adipisci sed asperiores non repellendus vel nihil. Quasi!</p>
                </section>
                <section className="productos"><Img/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia blanditiis dolore neque autem dolores officia cum, mollitia quis reiciendis magni nam iusto adipisci sed asperiores non repellendus vel nihil. Quasi!</p>
                </section>
            </article>
            <article className="articleSection">
                <section className="productos"><Img/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia blanditiis dolore neque autem dolores officia cum, mollitia quis reiciendis magni nam iusto adipisci sed asperiores non repellendus vel nihil. Quasi!</p>
                </section>
                <section className="productos"><Img/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia blanditiis dolore neque autem dolores officia cum, mollitia quis reiciendis magni nam iusto adipisci sed asperiores non repellendus vel nihil. Quasi!</p>
                </section>
            </article>
            <aside className="formularios">
                <Forms/>
                <FormularioProductos/>
            </aside>
            <aside className="formularios2">
            <FormularioProveedores/>
            </aside>
        </section>
    );
}

export default Section