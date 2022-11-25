const Dropdown = () => {
    return (
        <section class="dropdown">
            <button className=" btn btn-secondary bg-success text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Productos</a></li>
                <li><a class="dropdown-item" href="#">Formularios</a></li>
                <li><a class="dropdown-item" href="#">Contato</a></li>
            </ul>
        </section>
        )
}

export default Dropdown