import "./FormComponents.css";

export const Table = ({ dados = [[], [{}], []] }) => {
  return (
    <table>
      <thead>
        <tr>
          {dados[0].map((elementoHead, indice) => {
            return <th key={indice}>{elementoHead}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {dados[1].map((elementoTr, indice) => {
          return (
            <tr key={indice}>
              {Object.keys(elementoTr).map((chave, indice) => {
                return <td key={indice}>{elementoTr[chave]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const Input = ({
  type,
  id,
  value,
  required,
  name,
  placeholder,
  manipulationFunction,
  additionalClass = "",
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      required={required ? "required" : ""}
      className={`input-component ${additionalClass}`}
      placeholder={placeholder}
      onChange={manipulationFunction}
      autoComplete="off"
    />
  );
};

export const Select = ({
  required,
  id,
  name,
  options = [],
  manipulationFunction,
  additionalClass = "",
  defaultValue,
}) => {
  return (
    <select
      name={name}
      id={id}
      required={required}
      className={`input-component ${additionalClass}`}
      onChange={manipulationFunction}
      value={defaultValue}
    >
      <option value="">Selecione</option>
      {options.map((o) => {
        return (
          <option key={Math.random()} value={o.value}>
            {o.text}
          </option>
        );
      })}
    </select>
  );
};

export const Button = ({
  id,
  name,
  type,
  additionalClass = "",
  manipulationFunction,
  textButton,
}) => {
  return (
    <button
      id={id}
      name={name}
      type={type}
      className={`button-component ${additionalClass}`}
      onClick={manipulationFunction}
    >
      {textButton}
    </button>
  );
};

export const Label = ({ htmlFor, children, additionalClass = "", id }) => {
  return (
    <label
      id={id}
      className={`label-component ${additionalClass}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
