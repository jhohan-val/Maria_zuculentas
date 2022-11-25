const FormularioProveedores = ()=>{
    return(
        <section className="formularioClientes">
        <h2>Formulario Proveedor</h2>
        <form  action="contact.php" method="post"> 
            
                <input type="text" placeholder="Nombre"/>
            
            
                <input type="email" placeholder="Nit"/>   
                    
            
                <input type="text" placeholder="Direccion"/> 
            
            
                <input type="text" placeholder="Correo"/> 
           
            
                <input type="text" placeholder="Telefono"/> 

                <input type="text" placeholder="producto"/> 
            
                <input className="descripcion" type="text" placeholder="Descripcion"/> 
            
             <button className="botonFormulario" type="submit">Enviar</button>
        </form>
    </section> 
    )
}

export default FormularioProveedores