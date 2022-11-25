const FormularioProductos = ()=>{
    return(
        <section className="formularioClientes ">
        <h2 className="Producto">Fromulario Producto</h2>
        <form  action="contact.php" method="post"> 
            
                <input type="text" placeholder="Nombre"/>
            
            
                <input type="email" placeholder="Sexo"/>   
                    
            
                <input type="text" placeholder="Referencia"/> 
            
            
                <input type="text" placeholder="Tamaño"/> 
           
            
                <input type="text" placeholder="cantidad"/> 
            
                <input className="descripcion" type="text" placeholder="Descripcion"/> 
            
             <button className="botonFormulario" type="submit">Enviar</button>
        </form>
    </section>    
    )
}

export default FormularioProductos