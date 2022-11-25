const Forms = () => {
    return (  
    <section className="formularioClientes">
        <h2>Formulario Clientes</h2>
        <form  action="contact.php" method="post"> 
            
                <input type="text" placeholder="Nombre"/>
            
            
                <input type="email" placeholder="Documento"/>   
                    
            
                <input type="text" placeholder="Correo"/> 
            
            
                <input type="text" placeholder="Direccion"/> 
           
            
                <input type="text" placeholder="Barrio"/> 
            
                <input type="text" placeholder="telefono"/> 
            
             <button className="botonFormulario" type="submit">Enviar</button>
        </form>
    </section>    
    )
}

export default Forms