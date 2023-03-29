import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      // console.log("Todo los campos son abligatorios");
      setError(true);
      return;
    }
    setError(false);

    const generarId = () => {
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36);

      return random + fecha;
    };

    // Objeto de Paciente
    const objetoPacientes = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // Editando Registro
      objetoPacientes.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPacientes : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});

    } else {
      // Nuevo Registro
      objetoPacientes.id = generarId();
      setPacientes([...pacientes, objetoPacientes]);
    }

    // Reiniciar form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-5">
        Añade Pacientes y {""}
        <span className="text-indigo-700 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-5 bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            {" "}
            <p>Todo los campos son obligatorios</p>{" "}
          </Error>
        )}
        <div className="mb-5">
          <label
            className="block uppercase font-bold text-gray-700"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            className="w-full p-2 rounded-md border-2 mt-2 placeholder-slate-400 focus:outline-none focus:border-indigo-600"
            placeholder="Nombre de la Mascota"
            type="text"
            id="mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block uppercase font-bold text-gray-700"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            className="w-full p-2 rounded-md border-2 mt-2 placeholder-slate-400 focus:outline-none focus:border-indigo-600"
            placeholder="Nombre del Propietario"
            type="text"
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block uppercase font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-2 rounded-md border-2 mt-2 placeholder-slate-400 focus:outline-none focus:border-indigo-600"
            placeholder="Email Contacto Propietario"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block uppercase font-bold text-gray-700"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            className="w-full p-2 rounded-md border-2 mt-2 placeholder-slate-400 focus:outline-none focus:border-indigo-600"
            type="date"
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block uppercase font-bold text-gray-700"
            htmlFor="sintomas"
          >
            Síntomas
          </label>
          <textarea
            className="w-full p-2 rounded-md border-2 mt-2 placeholder-slate-400 focus:outline-none focus:border-indigo-600"
            id="sintomas"
            placeholder="Describe los Síntomas..."
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-700 w-full p-3 text-white cursor-pointer uppercase font-bold hover:bg-indigo-800 hover:shadow-md transition-all"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
