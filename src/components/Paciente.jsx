import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="bg-gray-100 rounded p-4">
            <h2 className="text-lg font-bold mb-2">
              Eliminar paciente: {paciente.nombre}?
            </h2>
            <p className="text-base mb-4">
              ¿Seguro que deseas eliminar este paciente?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  eliminarPaciente(id);
                  onClose();
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        );
      },
    });
  };

  return (
    <div className="m-5 bg-white shadow-md rounded-lg py-10 px-5">
      <p className="font-bold uppercase mb-2 text-slate-900 bg-red-200 py-1 px-3 rounded-sm">
        Nombre:{" "}
        <span className="font-normal normal-case text-base text-slate-600">
          {nombre}
        </span>
      </p>
      <p className="font-bold uppercase mb-2 text-slate-900 bg-blue-200 py-1 px-3 rounded-sm">
        Propietario:{" "}
        <span className="font-normal normal-case text-base text-slate-600">
          {propietario}
        </span>
      </p>
      <p className="font-bold uppercase mb-2 text-slate-900 bg-yellow-200 py-1 px-3 rounded-sm ">
        Email:{" "}
        <span className="font-normal normal-case text-base text-slate-600">
          {email}
        </span>
      </p>
      <p className="font-bold uppercase mb-2 text-slate-900 bg-green-200 py-1 px-3 rounded-sm">
        Fecha Alta:{" "}
        <span className="font-normal normal-case text-base text-slate-600">
          {fecha}
        </span>
      </p>
      <p className="font-bold uppercase mb-2 text-slate-900 bg-indigo-200 py-1 px-3 rounded-sm">
        Síntomas:{" "}
        <span className="font-normal normal-case text-base text-slate-600">
          {sintomas}
        </span>
      </p>
      <div className="flex justify-between mt-5 border-t pt-4 border-t-indigo-500">
        <button
          onClick={() => setPaciente(paciente)}
          className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-10 uppercase font-bold rounded-lg"
        >
          Editar
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-10 uppercase font-bold rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
