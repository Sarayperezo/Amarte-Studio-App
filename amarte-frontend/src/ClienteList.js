const fetchClientes = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/clientes");
    setClientes(response.data);
  } catch (error) {
    console.error("Error al obtener los clientes:", error);
  }
};

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/clientes", form);
    fetchClientes();
    setForm({ nombre: "", email: "" });
  };
  